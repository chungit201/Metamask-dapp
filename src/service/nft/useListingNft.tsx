import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { MarketProvider } from '../../nft-provider';
import { BigNumber } from 'ethers';
import {Web3Provider} from "@ethersproject/providers";
interface Listing {
  isEnded: boolean;
  nft: string;
  currency: string;
  owner: string;
  tokenId: BigNumber;
  fee: BigNumber;
  price: BigNumber;
  id: BigNumber;
}
const useListingNft = (nft: string, token_id: string) => {
  const { library } = useWeb3React<Web3Provider>();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getListing = async () => {
    setLoading(true);
    let listing;
    try {
      if (library) {
        MarketProvider.setProviderMarket(library);
      }
      listing = await MarketProvider.getListingByNft(nft, token_id);
    } catch (e) {
    } finally {
      setLoading(false);
      return listing;
    }
  };

  const refetch = async () => {
    let nft_listing: any = await getListing();
    setListing(nft_listing);
  };

  useEffect(() => {
    (async () => {
      let nft_listing: any = await getListing();
      setListing(nft_listing);
    })();
  }, [nft, token_id]);

  return { getListing, listing, loading, refetch };
};

export default useListingNft;
