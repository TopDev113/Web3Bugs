// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.7.0;

import {DSTest} from "ds-test/test.sol";

import {Hevm} from "./Hevm.sol";

contract DSTestPlus is DSTest {
    Hevm internal constant hevm = Hevm(HEVM_ADDRESS);

    address internal constant DEAD_ADDRESS = 0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF;

    string private checkpointLabel;
    uint256 private checkpointGasLeft;

    function startMeasuringGas(string memory label) internal virtual {
        checkpointLabel = label;
        checkpointGasLeft = gasleft();
    }

    function stopMeasuringGas() internal virtual {
        uint256 checkpointGasLeft2 = gasleft();

        string memory label = checkpointLabel;

        emit log_named_uint(string(abi.encodePacked(label, " Gas")), checkpointGasLeft - checkpointGasLeft2);
    }

    function fail(string memory err) internal virtual {
        emit log_named_string("Error", err);
        fail();
    }

    function assertFalse(bool data) internal virtual {
        assertTrue(!data);
    }

    function assertUint128Eq(uint128 num1, uint128 num2) internal virtual {
        assertEq(uint256(num1), uint256(num2));
    }

    function assertUint64Eq(uint64 num1, uint64 num2) internal virtual {
        assertEq(uint256(num1), uint256(num2));
    }

    function assertUint96Eq(uint96 num1, uint96 num2) internal virtual {
        assertEq(uint256(num1), uint256(num2));
    }

    function assertUint32Eq(uint32 num1, uint32 num2) internal virtual {
        assertEq(uint256(num1), uint256(num2));
    }

    function assertBytesEq(bytes memory b1, bytes memory b2) internal virtual {
        assertEq(keccak256(b1), keccak256(b2));
    }
}
