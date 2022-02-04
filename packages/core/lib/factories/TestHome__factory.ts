/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestHome, TestHomeInterface } from "../TestHome";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldUpdater",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newUpdater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextLeafIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum NomadBase.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
    ],
    name: "testDestinationAndNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "testHomeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516130093803806130098339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612f9661007360003980610a2c5280610b925280611069528061165a5250612f966000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80639776120e11610104578063c4d66de8116100a2578063f6d1610211610071578063f6d1610214610688578063fa31de0114610690578063fd54b22814610748578063ffa1ad7414610750576101da565b8063c4d66de814610612578063df034cd014610645578063ebf0c7171461064d578063f2fde38b14610655576101da565b8063ab91c7b0116100de578063ab91c7b01461050c578063b31c01fb14610514578063b95a2001146105c6578063c19d93fb146105e9576101da565b80639776120e1461049e5780639d54f419146104d15780639df6c8e114610504576101da565b80635146366e1161017c578063715018a61161014b578063715018a6146103925780638d3638f41461039a5780638da5cb5b146103bb5780638e4e30e0146103ec576101da565b80635146366e146103325780635221c8181461033a578063522ae0021461038257806367a6771d1461038a576101da565b806319d9d21a116101b857806319d9d21a1461020b5780632bef2892146102d857806336e104de1461030957806345630b1a1461032a576101da565b806306661abd146101df5780630be4f422146101f9578063146901db14610201575b600080fd5b6101e761076e565b60408051918252519081900360200190f35b6101e7610774565b610209610783565b005b610209600480360360a081101561022157600080fd5b813591602081019181019060808101606082013564010000000081111561024757600080fd5b82018360208201111561025957600080fd5b8035906020019184600183028401116401000000008311171561027b57600080fd5b91939092909160208101903564010000000081111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460018302840111640100000000831117156102cd57600080fd5b50909250905061078d565b6102f5600480360360208110156102ee57600080fd5b50356109ea565b604080519115158252519081900360200190f35b6103116109fd565b6040805192835260208301919091528051918290030190f35b6101e7610a25565b6101e7610a50565b6103656004803603604081101561035057600080fd5b5063ffffffff81358116916020013516610a5a565b6040805167ffffffffffffffff9092168252519081900360200190f35b6101e7610a6d565b6101e7610a73565b610209610a79565b6103a2610b90565b6040805163ffffffff9092168252519081900360200190f35b6103c3610bb4565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102f56004803603606081101561040257600080fd5b81359160208101359181019060608101604082013564010000000081111561042957600080fd5b82018360208201111561043b57600080fd5b8035906020019184600183028401116401000000008311171561045d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bd0945050505050565b610209600480360360208110156104b457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e22565b610209600480360360208110156104e757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ed6565b6103c3610f66565b6101e7610f83565b6102096004803603606081101561052a57600080fd5b81359160208101359181019060608101604082013564010000000081111561055157600080fd5b82018360208201111561056357600080fd5b8035906020019184600183028401116401000000008311171561058557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f8f945050505050565b6103a2600480360360208110156105dc57600080fd5b503563ffffffff1661112d565b6105f1611146565b6040518082600281111561060157fe5b815260200191505060405180910390f35b6102096004803603602081101561062857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611167565b6103c361132b565b6101e7611347565b6102096004803603602081101561066b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611353565b6101e76114f5565b610209600480360360608110156106a657600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156106d357600080fd5b8201836020820111156106e557600080fd5b8035906020019184600183028401116401000000008311171561070757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611501945050505050565b6101e7611777565b61075861177d565b6040805160ff9092168252519081900360200190f35b60545490565b600061077e61076e565b905090565b61078b611782565b565b600260ea5474010000000000000000000000000000000000000000900460ff1660028111156107b857fe5b141561082557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261086791889188359188908890819084018382808284376000920191909152506117c392505050565b80156108b657506108b686866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117c392505050565b80156108c757508435602086013514155b156109e2576108d4611855565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b60006109f7600183611931565b92915050565b600080610a0a60016119a1565b15610a215760eb549150610a1e60016119e1565b90505b9091565b600061077e7f0000000000000000000000000000000000000000000000000000000000000000611a1e565b600061077e610a25565b6000610a668383611a93565b9392505050565b61080081565b60eb5481565b610a81611aad565b73ffffffffffffffffffffffffffffffffffffffff16610a9f610bb4565b73ffffffffffffffffffffffffffffffffffffffff1614610b2157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60b85460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360b880547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60b85473ffffffffffffffffffffffffffffffffffffffff1690565b6000600260ea5474010000000000000000000000000000000000000000900460ff166002811115610bfd57fe5b1415610c6a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610c758484846117c3565b610ce057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b60eb548414610d5057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420612063757272656e7420757064617465000000000000000000000000604482015290519081900360640190fd5b610d5b600184611931565b610e1857610d67611855565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab28484846040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dd4578181015183820152602001610dbc565b50505050905090810190601f168015610e015780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1506001610a66565b5060009392505050565b610e2a611aad565b73ffffffffffffffffffffffffffffffffffffffff16610e48610bb4565b73ffffffffffffffffffffffffffffffffffffffff1614610eca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610ed381611ab1565b50565b61011c5473ffffffffffffffffffffffffffffffffffffffff163314610f5d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b610ed381611b9f565b61011c5473ffffffffffffffffffffffffffffffffffffffff1681565b600061077e60016119a1565b600260ea5474010000000000000000000000000000000000000000900460ff166002811115610fba57fe5b141561102757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b611032838383610bd0565b1561103c57611128565b60006110486001611c27565b905082811415611058575061105e565b5061103c565b8160eb8190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b838110156110ed5781810151838201526020016110d5565b50505050905090810190601f16801561111a5780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b505050565b61011b6020526000908152604090205463ffffffff1681565b60ea5474010000000000000000000000000000000000000000900460ff1681565b600054610100900460ff16806111805750611180611d60565b8061118e575060005460ff16155b6111e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff1615801561124957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611251611d71565b61125a82611ab1565b61011c54604080517fdf034cd000000000000000000000000000000000000000000000000000000000815290516112f89273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b1580156112c757600080fd5b505afa1580156112db573d6000803e3d6000fd5b505050506040513d60208110156112f157600080fd5b5051611e8e565b801561132757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60ea5473ffffffffffffffffffffffffffffffffffffffff1681565b600061077e6034611ff2565b61135b611aad565b73ffffffffffffffffffffffffffffffffffffffff16611379610bb4565b73ffffffffffffffffffffffffffffffffffffffff16146113fb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611467576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612ec96026913960400191505060405180910390fd5b60b85460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360b880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600061077e60016119e1565b600260ea5474010000000000000000000000000000000000000000900460ff16600281111561152c57fe5b141561159957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b6108008151111561160b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d736720746f6f206c6f6e670000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815261011b602052604081208054808416600181019094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009091161790556116837f00000000000000000000000000000000000000000000000000000000000000003384888888612005565b805160208201209091506116986034826120db565b6116ab6116a3611347565b6001906121e3565b506116b68684611a93565b67ffffffffffffffff1660016116ca61076e565b03827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a60eb54866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561173457818101518382015260200161171c565b50505050905090810190601f1680156117615780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4505050505050565b60545481565b600081565b60ea80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b6000806117ce610a25565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061180f81612250565b60ea5490915073ffffffffffffffffffffffffffffffffffffffff1661183582856122a1565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b61185d611782565b61011c54604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b1580156118d057600080fd5b505af11580156118e4573d6000803e3d6000fd5b505060ea5460405133935073ffffffffffffffffffffffffffffffffffffffff90911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111610e185760008181526001850160205260409020548314156119995760019150506109f7565b600101611949565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166119d9828261233b565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4e4f4d41440000000000000000000000000000000000000000000000000000006024840152815180840360090181526029909301909152815191012090565b63ffffffff1660209190911b67ffffffff00000000161790565b3390565b611aba81612355565b611b2557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b61011c805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b60ea805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040805191909216808252602082019390935281517f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a929181900390910190a15050565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611c5f828261233b565b611cca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611d1b576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b6000611d6b30612355565b15905090565b600054610100900460ff1680611d8a5750611d8a611d60565b80611d98575060005460ff16155b611ded576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff16158015611e5357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e5d600161235b565b8015610ed357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611ea75750611ea7611d60565b80611eb5575060005460ff16155b611f0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff16158015611f7057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611f7861239f565b611f8182611b9f565b60ea80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561132757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60006109f782612000612491565b612952565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b6020831061209657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612059565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff1161215157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b60208110156121e057816001166001141561218d578284826020811061218357fe5b0155506113279050565b83816020811061219957fe5b0154836040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250600282816121d557fe5b049150600101612161565b50fe5b81546fffffffffffffffffffffffffffffffff80821670010000000000000000000000000000000092839004821660010191821690920291909117835581156109f7576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461231357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a61233186828585612a10565b9695505050505050565b60019103016fffffffffffffffffffffffffffffffff1690565b3b151590565b80546fffffffffffffffffffffffffffffffff16610ed35780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b600054610100900460ff16806123b857506123b8611d60565b806123c6575060005460ff16155b61241b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff1615801561248157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b612489612c07565b611e5d612d19565b612499612ea9565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015612a0857600182821c16600086836020811061297957fe5b0154905081600114156129bc57808560405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094506129fe565b848684602081106129c957fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b505060010161295c565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612eef6022913960400191505060405180910390fd5b8360ff16601b1480612aa057508360ff16601c145b612af5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f3f6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612b51573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612bfe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b600054610100900460ff1680612c205750612c20611d60565b80612c2e575060005460ff16155b612c83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff16158015611e5d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610ed357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680612d325750612d32611d60565b80612d40575060005460ff16155b612d95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f11602e913960400191505060405180910390fd5b600054610100900460ff16158015612dfb57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000612e05611aad565b60b880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610ed357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b604051806104000160405280602090602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a264697066735822122034088f1b73bb4ceb1537cacf35e1e50887a2e2fc9ac0d9e885616c933b98bffc64736f6c63430007060033";

export class TestHome__factory extends ContractFactory {
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
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestHome> {
    return super.deploy(_localDomain, overrides || {}) as Promise<TestHome>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): TestHome {
    return super.attach(address) as TestHome;
  }
  connect(signer: Signer): TestHome__factory {
    return super.connect(signer) as TestHome__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHomeInterface {
    return new utils.Interface(_abi) as TestHomeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHome {
    return new Contract(address, _abi, signerOrProvider) as TestHome;
  }
}
