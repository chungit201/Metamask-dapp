import { useState } from 'react';
import { CLAIM_SCE_CONTRACT } from '../../consts';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import {SCE__factory} from "../../typechain/factories/SCE__factory";

const useClaimSCE = () => {
  const { library, account } = useWeb3React<Web3Provider>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const claim = async (
    claim_params: {
      user: string;
      itx: string;
      amount: BigNumber;
      expire: BigNumber;
      signature: any;
    },
    action_params: {
      onError: (error: string) => void;
      onSuccess: () => void;
    }
  ) => {
    try {
      setLoading(true);
      if (!library || !account) throw { message: 'Not connect wallet!' };
      const factory = new SCE__factory();
      const contract = factory.attach(`0x0281E5AD7D4C532d146540e87Cca2eB09085E59F` || "").connect(library.getSigner());

      const tx = await contract.claim(
        claim_params.user,
        claim_params.itx,
        claim_params.amount,
        claim_params.expire,
        claim_params.signature
      );

      const receipt = await tx.wait(5);
      action_params.onSuccess();
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    claim,
  };
};

export default useClaimSCE;
