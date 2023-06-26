import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
// import { WagmiConfig } from 'wagmi';

// import { bscTestnet } from 'viem/chains';
import { bscTestnet } from 'wagmi/chains';

import App from './App';
import { AppContextProvider } from './utils';
import { theme } from './theme';

import './index.css';

import { createConfig, configureChains, WagmiConfig } from 'wagmi';

// const { REACT_APP_WALLET_CONNECT_ID } = process.env;
const projectId = 'd7cb6b03aab17067e015661d38b5c007';

const chains = [bscTestnet];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  // autoConnect: true,
  connectors: w3mConnectors({
    projectId: projectId,
    version: 1,
    chains,
  }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AppContextProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
