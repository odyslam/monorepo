/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeBeaconProxy,
  UpgradeBeaconProxyInterface,
} from "../UpgradeBeaconProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_upgradeBeacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_initializationCalldata",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405260405161058b38038061058b8339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b506040525050506100f0826101d060201b6100291760201c565b610134576040805162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b604482015290519081900360640190fd5b6001600160601b0319606083901b166080526000610151836101d6565b9050610166816101d060201b6100291760201c565b6101b7576040805162461bcd60e51b815260206004820152601f60248201527f626561636f6e20696d706c656d656e746174696f6e2021636f6e747261637400604482015290519081900360640190fd5b8151156101c8576101c881836102d6565b50505061038f565b3b151590565b604051600090819081906001600160a01b0385169082818181855afa9150503d8060008114610221576040519150601f19603f3d011682016040523d82523d6000602084013e610226565b606091505b50915091508181906102b65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561027b578181015183820152602001610263565b50505050905090810190601f1680156102a85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508080602001905160208110156102cc57600080fd5b5051949350505050565b6000826001600160a01b0316826040518082805190602001908083835b602083106103125780518252601f1990920191602091820191016102f3565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610372576040519150601f19603f3d011682016040523d82523d6000602084013e610377565b606091505b505090508061038a573d6000803e3d6000fd5b505050565b60805160601c6101e06103ab60003980603652506101e06000f3fe60806040523661001357610011610017565b005b6100115b61002761002261002f565b61005f565b565b3b151590565b600061005a7f0000000000000000000000000000000000000000000000000000000000000000610083565b905090565b3660008037600080366000845af43d6000803e80801561007e573d6000f35b3d6000fd5b6040516000908190819073ffffffffffffffffffffffffffffffffffffffff85169082818181855afa9150503d80600081146100db576040519150601f19603f3d011682016040523d82523d6000602084013e6100e0565b606091505b509150915081819061018a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561014f578181015183820152602001610137565b50505050905090810190601f16801561017c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508080602001905160208110156101a057600080fd5b505194935050505056fea264697066735822122045e2978eb512ee336ea17d3aebe82e86ec3eccf27a023a07f6c24bd7e9b53c8e64736f6c63430007060033";

export class UpgradeBeaconProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _upgradeBeacon: string,
    _initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeBeaconProxy> {
    return super.deploy(
      _upgradeBeacon,
      _initializationCalldata,
      overrides || {}
    ) as Promise<UpgradeBeaconProxy>;
  }
  getDeployTransaction(
    _upgradeBeacon: string,
    _initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _upgradeBeacon,
      _initializationCalldata,
      overrides || {}
    );
  }
  attach(address: string): UpgradeBeaconProxy {
    return super.attach(address) as UpgradeBeaconProxy;
  }
  connect(signer: Signer): UpgradeBeaconProxy__factory {
    return super.connect(signer) as UpgradeBeaconProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconProxyInterface {
    return new utils.Interface(_abi) as UpgradeBeaconProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeBeaconProxy;
  }
}
