import { waitForTransaction } from '@wagmi/core';
import { readContract, writeContract } from 'wagmi/actions';
import { tokenAddress } from './Environment';
import tokenAbi from './tokenAbi.json';
import { createPublicClient, http } from 'viem';
import { bscTestnet } from 'viem/chains';
export const tokenWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
    // gas: '21000',
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const tokenReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  return data;
};
// ======================ESTIMATE GAS ============================
const provider = createPublicClient({
  chain: bscTestnet,
  transport: http(),
});

console.log(provider, 'kskdkaszk');

export const gasestimation = async (functionName, args, account) => {
  const gasfee = await provider.estimateContractGas({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: functionName,
    args: args,
    account,
  });

  // console.log(gasfee, 'working');
  // const gasPrice = await provider.getGasPrice();
  return gasfee;
};

// export const tokenContract = getContract({
//   address: tokenAddress,
//   abi: tokenAbi,
// });

//gassLimi
//payable
//arguments
// paramerters
// error cach
