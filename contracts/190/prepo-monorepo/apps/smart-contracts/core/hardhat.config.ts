import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomicfoundation/hardhat-chai-matchers'
import '@typechain/ethers-v5'
import '@typechain/hardhat'
import '@openzeppelin/hardhat-upgrades'
import { config as dotenvConfig } from 'dotenv'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'hardhat-gas-reporter'
import { HardhatUserConfig, subtask } from 'hardhat/config'
import { TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD } from 'hardhat/builtin-tasks/task-names'
import { generateHardhatConfig, generateHardhatLocalConfig } from 'prepo-hardhat'
import { resolve } from 'path'
import 'solidity-coverage'
// TODO: uncomment tasks once harness is modified to accomodate preUSD
// import './tasks/CoreFunding'
// import './tasks/Markets'

dotenvConfig({ path: resolve(__dirname, './.env') })

const hardhatLocalConfig = generateHardhatLocalConfig()
const hardhatConfig = generateHardhatConfig(hardhatLocalConfig)

// download any compiler version here https://etherscan.io/solcversions
subtask<{ solcVersion: string }>(
  TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD,
  // eslint-disable-next-line require-await
  async (args, hre, runSuper) => {
    if (args.solcVersion === '0.8.7' && process.env.LOCAL_SOLC) {
      const compilerPath = resolve(
        __dirname,
        '../../../packages/compiler',
        'soljson-v0.8.7+commit.e28d00a7.js'
      )

      return {
        compilerPath,
        isSolcJs: true,
        version: args.solcVersion,
      }
    }

    // we just use the default subtask if the version is not 0.8.7
    return runSuper()
  }
)

const config: HardhatUserConfig = {
  ...hardhatConfig,
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  typechain: {
    outDir: './typechain',
    target: 'ethers-v5',
  },
  /**
   * This can't be put in the shared local config since the `etherscan` field
   * is not a native Hardhat field and injected by `@nomiclabs/hardhat-ethers`.
   */
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: hardhatLocalConfig.ETHERSCAN_API_KEY,
      ropsten: hardhatLocalConfig.ETHERSCAN_API_KEY,
      rinkeby: hardhatLocalConfig.ETHERSCAN_API_KEY,
      goerli: hardhatLocalConfig.ETHERSCAN_API_KEY,

      // arbitrum
      arbitrumOne: hardhatLocalConfig.ARBISCAN_API_KEY,
      arbitrumTestnet: hardhatLocalConfig.ARBISCAN_API_KEY,

      // polygon
      polygon: hardhatLocalConfig.POLYGONSCAN_API_KEY,
      polygonMumbai: hardhatLocalConfig.POLYGONSCAN_API_KEY,
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true',
  },
}

export default config
