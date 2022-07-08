import { IGOBox__factory } from '../typechain';
import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { RPC } from '../consts';
import { IGO_CONTRACT, IGO_CONTRACT_2 } from '../consts/igo-contract';
import { JsonRpcProvider } from '@ethersproject/providers';

export interface InfoIgoBox {
  checkWhitelist: boolean;
  merkleRoot: string;
  CID: string;
  currency: string;
  limitPerUser: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  sellLimit: BigNumber;
  sold: BigNumber;
  preventTime: BigNumber;
}
export interface BoxTypes {
  isActive: boolean;
  boxTypeId: BigNumber;
  sellLimit: BigNumber;
  sold: BigNumber;
  price: BigNumber;
  name: string;
  prefixUri: string;
}

class IGOBoxProvider {
  private factories_igo_box = new IGOBox__factory();
  private provider = new JsonRpcProvider(RPC);
  private contract_igo_box = this.factories_igo_box.attach(IGO_CONTRACT).connect(this.provider);

  public setProviderIgoBox(provider: any) {
    try {
      this.provider = provider;
      this.setContractIgoBox();
    } catch (e) {
      console.log('setProviderIgoBox', e);
    }
  }

  public setContractIgoBox = (igo_box?: string) => {
    try {
      if (igo_box) {
        this.contract_igo_box = this.factories_igo_box.attach(igo_box).connect(this.provider);
      } else {
        this.contract_igo_box = this.factories_igo_box.attach(IGO_CONTRACT).connect(this.provider);
      }
    } catch (e) {
      console.log(e);
    }
  };

  public getContractIgoBox = () => {
    return this.contract_igo_box;
  };
  public getInfo = (): Promise<
    [boolean, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    checkWhitelist: boolean;
    merkleRoot: string;
    CID: string;
    currency: string;
    limitPerUser: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    sellLimit: BigNumber;
    sold: BigNumber;
    preventTime: BigNumber;
  }
    > => {
    return new Promise(async (resolve, rejects) => {
      try {
        const info_igo_box = await this.contract_igo_box.getInfo();
        resolve(info_igo_box);
      } catch (e) {
        console.log('getInfo', e);
      }
    });
  };

  public getBoxTypes = (): Promise<
    ([boolean, BigNumber, BigNumber, BigNumber, BigNumber, string, string] & BoxTypes)[]
    > => {
    return new Promise(async (resolve, rejects) => {
      try {
        const info_box_type = await this.contract_igo_box.getBoxTypes();
        resolve(info_box_type);
      } catch (e) {
        console.log('getBoxTypes', e);
      }
    });
  };

  public buy = (boxTypeId: BigNumberish, merkleProof: BytesLike[], agency: string): Promise<ContractTransaction> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const transaction = await this.contract_igo_box.buy(boxTypeId, merkleProof, agency);
        resolve(transaction);
      } catch (e) {
        rejects(e);
      }
    });
  };

  public getBought = (account: string): Promise<BigNumber> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const bought = await this.contract_igo_box.getBought(account);
        resolve(bought);
      } catch (e) {
        rejects(e);
      }
    });
  };
  public getNextBuyTime = (account: string): Promise<BigNumber> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const time = await this.contract_igo_box.getNextBuyTime(account);
        resolve(time);
      } catch (e) {
        rejects(e);
      }
    });
  };
}

export default new IGOBoxProvider();
