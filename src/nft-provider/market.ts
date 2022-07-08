import { MARKET, RPC } from '../consts';
import { JsonRpcProvider } from '@ethersproject/providers';
import { MarketServiceV1__factory } from '../typechain/factories/MarketServiceV1__factory';
import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';

class MarketProvider {
  private factories_market = new MarketServiceV1__factory();
  public provider = new JsonRpcProvider(RPC);
  private default_provider = new JsonRpcProvider(RPC);
  private contract_market = this.factories_market.attach(MARKET).connect(this.provider);

  public setProviderMarket(provider: any) {
    try {
      if (provider) {
        this.provider = provider;
      } else {
        this.provider = this.default_provider;
      }
      this.setContractMarket();
    } catch (e) {
      console.log('setProviderMarket', e);
    }
  }

  public setContractMarket = () => {
    try {
      this.contract_market = this.factories_market.attach(MARKET).connect(this.provider);
    } catch (e) {
      console.log(e);
    }
  };

  public getContractMarket = () => {
    return this.contract_market;
  };

  public getProviderMarket = () => this.provider;

  public getListingFee = (
    nft: string
  ): Promise<
    [boolean, BigNumber, BigNumber, string, BigNumber] & {
    isSupport: boolean;
    listingFee: BigNumber;
    auctionFee: BigNumber;
    nftTeam: string;
    percentNFTTeam: BigNumber;
  }
    > => {
    return new Promise(async (resolve, rejects) => {
      try {
        const nft_info = await this.contract_market.nfts(nft);
        resolve(nft_info);
      } catch (e) {
        rejects(e);
      }
    });
  };

  public getListingByNft = (
    nft: string,
    token_id: string
  ): Promise<
    [boolean, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
    isEnded: boolean;
    nft: string;
    currency: string;
    owner: string;
    tokenId: BigNumber;
    fee: BigNumber;
    price: BigNumber;
    id: BigNumber;
  }
    > => {
    return new Promise(async (resolve, rejects) => {
      try {
        const listing = await this.contract_market.getListingByNFT(nft, token_id);
        resolve(listing);
      } catch (e) {
        rejects(e);
      }
    });
  };
}

export default new MarketProvider();
