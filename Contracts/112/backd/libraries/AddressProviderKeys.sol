// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

library AddressProviderKeys {
    bytes32 internal constant _TREASURY_KEY = "treasury";
    bytes32 internal constant _GAS_BANK_KEY = "gasBank";
    bytes32 internal constant _VAULT_RESERVE_KEY = "vaultReserve";
    bytes32 internal constant _SWAPPER_REGISTRY_KEY = "swapperRegistry";
    bytes32 internal constant _ORACLE_PROVIDER_KEY = "oracleProvider";
    bytes32 internal constant _POOL_FACTORY_KEY = "poolFactory";
    bytes32 internal constant _CONTROLLER_KEY = "controller";
    bytes32 internal constant _BKD_LOCKER_KEY = "bkdLocker";
    bytes32 internal constant _ROLE_MANAGER_KEY = "roleManager";
}
