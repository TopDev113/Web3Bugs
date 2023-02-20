// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;
import "../utils/token/ERC20Permit.sol";
import "../utils/access/AccessControl.sol";

contract RestrictedERC20Mock is AccessControl(), ERC20Permit  {

    constructor(
        string memory name,
        string memory symbol
    ) ERC20Permit(name, symbol, 18) { }

    /// @dev Give tokens to whoever.
    function mint(address to, uint256 amount) public virtual auth {
        _mint(to, amount);
    }

    /// @dev Burn tokens from whoever.
    function burn(address from, uint256 amount) public virtual auth {
        _burn(from, amount);
    }
}
