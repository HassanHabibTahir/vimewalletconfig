import { useCallback, useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { AppContext } from '../utils';
import { useTokenContract } from '../connectivity/Hooks';

function Staking() {
  const { signer } = useContext(AppContext);
  const tokenContract = useTokenContract(signer);
  const [decimal, setDecimal] = useState(0);

  console.log(decimal, 'deci');

  const init = useCallback(async () => {
    try {
      const decimals = await tokenContract.decimals();
      setDecimal(Number(decimals));
    } catch (e) {
      console.log(e);
    }
  }, [tokenContract]);

  useEffect(() => {
    init();
  }, [init]);

  return <Box></Box>;
}

export default Staking;
