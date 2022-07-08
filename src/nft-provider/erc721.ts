import { ERC20__factory, ERC721__factory } from '../typechain';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { BigNumberish } from 'ethers';
import { ContractTransaction } from '@ethersproject/contracts/lib.esm';
import { RPC, SLIME_CONTRACT } from '../consts';

class ERC721Provider {
  private factories_Erc721 = new ERC721__factory();
  private provider: any = new JsonRpcProvider(RPC);
  private address_token: string = SLIME_CONTRACT;
  private contract_erc721 = this.factories_Erc721.attach(this.address_token).connect(this.provider);

  public setProviderErc721(provider: any) {
    try {
      this.provider = provider;
      this.setContractErc721();
    } catch (e) {
      console.error('setProviderErc721', e);
    }
  }

  public setContractErc721 = (address?: string) => {
    try {
      this.address_token = address ? address : this.address_token;
      this.contract_erc721 = this.factories_Erc721
        .attach(address ? address : this.address_token)
        .connect(this.provider);
    } catch (error) {
      console.log('setContractErc721', error);
    }
  };

  public setContractAddress = (address_token: string) => {
    this.setContractErc721(address_token);
  };

  public getContract = () => {
    return this.contract_erc721;
  };

  public getProvider = (): Web3Provider => {
    return this.provider;
  };

  public approveToken(to: string, token_id: BigNumberish): Promise<ContractTransaction> {
    return new Promise(async (resolve, rejects) => {
      try {
        const transaction = await this.contract_erc721.approve(to, token_id);
        resolve(transaction);
      } catch (e) {
        rejects(e);
      }
    });
  }

  public getContractErc20() {
    return this.contract_erc721;
  }

  public getApproved(token_id: string): Promise<string> {
    return new Promise(async (resolve, rejects) => {
      try {
        const approved_address = await this.contract_erc721.getApproved(token_id);
        resolve(approved_address);
      } catch (e) {
        rejects(e);
      }
    });
  }

  public isApproveAll(owner: string, spender: string): Promise<boolean> {
    return new Promise(async (resolve, rejects) => {
      try {
        const is_approve_all = await this.contract_erc721.isApprovedForAll(owner, spender);
        resolve(is_approve_all);
      } catch (e) {
        rejects(e);
      }
    });
  }

  public getOwner(token_id: string): Promise<string> {
    return new Promise(async (resolve, rejects) => {
      try {
        const owner = await this.contract_erc721.ownerOf(token_id);
        resolve(owner);
      } catch (e) {
        rejects(e);
      }
    });
  }

  public getTokenUri(token_id: string): Promise<string> {
    return new Promise(async (resolve, rejects) => {
      try {
        const token_uri = await this.contract_erc721.tokenURI(token_id);
        resolve(token_uri);
      } catch (e) {
        rejects(e);
      }
    });
  }
}

export default new ERC721Provider();
