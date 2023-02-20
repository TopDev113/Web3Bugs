// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "../../../../libraries/Errors.sol";
import "../../../../libraries/AccountEncoding.sol";

import "../../../../interfaces/actions/topup/ITopUpHandler.sol";
import "../../../../interfaces/vendor/ILendingPool.sol";
import "../../../../interfaces/vendor/IWETH.sol";
import "../../../../libraries/vendor/DataTypes.sol";

contract AaveHandler is ITopUpHandler {
    using SafeERC20 for IERC20;
    using AccountEncoding for bytes32;

    uint16 public constant BACKD_REFERRAL_CODE = 62314;

    ILendingPool public immutable lendingPool;
    IWETH public immutable weth;

    constructor(address lendingPoolAddress, address wethAddress) {
        lendingPool = ILendingPool(lendingPoolAddress);
        weth = IWETH(wethAddress);
    }

    /**
     * @notice Executes the top-up of a position.
     * @param account Account holding the position.
     * @param underlying Underlying for tup-up.
     * @param amount Amount to top-up by.
     * @return `true` if successful.
     */
    function topUp(
        bytes32 account,
        address underlying,
        uint256 amount,
        bytes memory extra
    ) external override returns (bool) {
        bool repayDebt = abi.decode(extra, (bool));
        if (underlying == address(0)) {
            weth.deposit{value: amount}();
            underlying = address(weth);
        }

        address addr = account.addr();

        DataTypes.ReserveData memory reserve = lendingPool.getReserveData(underlying);
        require(reserve.aTokenAddress != address(0), Error.UNDERLYING_NOT_SUPPORTED);

        IERC20(underlying).safeApprove(address(lendingPool), amount);

        if (repayDebt) {
            uint256 stableDebt = IERC20(reserve.stableDebtTokenAddress).balanceOf(addr);
            uint256 variableDebt = IERC20(reserve.variableDebtTokenAddress).balanceOf(addr);
            if (variableDebt + stableDebt > 0) {
                uint256 rateMode = stableDebt > variableDebt ? 1 : 2;
                amount -= lendingPool.repay(underlying, amount, rateMode, addr);
                if (amount == 0) return true;
            }
        }

        lendingPool.deposit(underlying, amount, addr, BACKD_REFERRAL_CODE);
        return true;
    }

    function getUserFactor(bytes32 account, bytes memory) external view override returns (uint256) {
        (, , , , , uint256 healthFactor) = lendingPool.getUserAccountData(account.addr());
        return healthFactor;
    }
}
