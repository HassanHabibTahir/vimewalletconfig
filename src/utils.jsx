import { useState, useCallback, useEffect, createContext } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';

import { createPublicClient, http, createWalletClient, custom } from 'viem';
import { bscTestnet } from 'viem/chains';

let initialState = {
  provider: null,
  account: null,
  chainId: null,
  signer: null,
};
export const AppContext = createContext(initialState);
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isConnected, address } = useAccount();

  const provider = createPublicClient({
    chain: bscTestnet,
    transport: http(),
  });

  let signer = null;
  if (isConnected) {
    signer = createWalletClient({
      chain: bscTestnet,
      transport: custom(window.ethereum),
    });
  }
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();

  const connect = useCallback(async () => {
    await open();
  }, [open]);

  useEffect(() => {
    if (isConnected) {
      setState({
        ...state,
        provider: provider,
        account: address,
        signer: signer,
        chainId: chain?.id,
      });
    } else if (!isConnected) {
      setState({
        provider: null,
        account: null,
        signer: null,
        chainId: null,
      });
    }
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        account: state.account,
        signer: state.signer,
        connect,
        chainId: state.chainId,
        disconnect: connect,
        provider: state.provider,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
