import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Header';

import { Button } from '@mui/material';
import { AppContext } from './utils';
import {
  gasestimation,
  tokenWriteFunction,
  // tokenContract,
  // tokenReadFunction,
  // tokenWriteFunction,
} from './connectivity/contractCalls';
import Loading from './connectivity/Loading';

function App() {
  const [loading, setLoading] = useState();
  const { account, signer, provider } = useContext(AppContext);
  // console.log(, account, 'DATA');

  const getData = async () => {
    try {
      setLoading(true);
      // const tContact = tokenContract;
      // const gas = await gasestimation(
      //   'approve',
      //   ['0x1393Bbc09B738B3c1a1115417cC575c92dAdAC50', '10000000000000000'],
      //   account,
      // );
      const data = await tokenWriteFunction('approve', [
        '0x1393Bbc09B738B3c1a1115417cC575c92dAdAC50',
        '10000000000000000',
      ]);

      // const signature = await signer.signMessage({
      //   account,
      //   message: 'hello world',
      // });

      // console.log(signature);

      // const valid = await provider.verifyMessage({
      //   address: account,
      //   message: 'hello world',
      //   signature,
      // });

      console.log(data, 'jsjajsj', signer);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('====================================');
      console.log(error?.message);
      console.log('====================================');
    }
  };

  return (
    <div>
      <Loading loading={loading} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <Button onClick={getData}> send </Button>{' '}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
