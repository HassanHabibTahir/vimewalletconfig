import { useProvider, useContract as useWagmiContract } from 'wagmi';

// import factoryAbi from './factoryAbi.json';
import tokenAbi from './tokenAbi.json';
import { tokenAddress } from './Environment';

function useContract(address, ABI, signer) {
  const provider = useProvider();
  return useWagmiContract({
    address: address,
    abi: ABI,
    signerOrProvider: signer ?? provider,
  });
}

export function useRouterContract(signer) {
  return useContract(tokenAddress, tokenAbi, signer);
}
// export function useFactoryContract(signer) {
//   return useContract(factoryAddress, factoryAbi, signer);
// }
