/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "ChainlinkAdapterEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkAdapterEth__factory>;
    getContractFactory(
      name: "SushiswapV2LPAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiswapV2LPAdapter__factory>;
    getContractFactory(
      name: "SushiswapV2TokenAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiswapV2TokenAdapter__factory>;
    getContractFactory(
      name: "UniswapV2LPAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2LPAdapter__factory>;
    getContractFactory(
      name: "UniswapV2TokenAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2TokenAdapter__factory>;
    getContractFactory(
      name: "SushiswapV2CSSR",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiswapV2CSSR__factory>;
    getContractFactory(
      name: "UniswapV2CSSR",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2CSSR__factory>;
    getContractFactory(
      name: "ICurveAddressProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveAddressProvider__factory>;
    getContractFactory(
      name: "ICurvePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurvePool__factory>;
    getContractFactory(
      name: "ICurveRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveRegistry__factory>;
    getContractFactory(
      name: "ICSSRAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICSSRAdapter__factory>;
    getContractFactory(
      name: "ICSSRRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICSSRRouter__factory>;
    getContractFactory(
      name: "IGovernanceOwned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernanceOwned__factory>;
    getContractFactory(
      name: "IUniswapV2CSSR",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2CSSR__factory>;
    getContractFactory(
      name: "MochiCSSRv0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MochiCSSRv0__factory>;
    getContractFactory(
      name: "MockAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAdapter__factory>;
    getContractFactory(
      name: "MockOwned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOwned__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
