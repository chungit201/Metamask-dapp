import { ERC20__factory } from '../typechain';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { BigNumberish } from 'ethers';
import { ContractTransaction } from '@ethersproject/contracts/lib.esm';
import { RPC, USDT_ADDRESS } from '../consts';
import { BigNumber } from 'ethers';
class ERC20Provider {
  private factories_Erc20 = new ERC20__factory();
  private provider: any = new JsonRpcProvider(RPC);
  private address_token: string = USDT_ADDRESS;
  private contract_erc20 = this.factories_Erc20.attach(this.address_token).connect(this.provider);

  public setProviderErc20(provider: any, address_token: string) {
    try {
      this.address_token = address_token;
      this.provider = provider;
      this.setContractErc20();
    } catch (e) {
      console.error('setProviderErc20', e);
    }
  }

  public setContractErc20 = (address?: string) => {
    try {
      this.address_token = address ? address : this.address_token;
      this.contract_erc20 = this.factories_Erc20
        .attach(address ? address : this.address_token)
        .connect(this.provider);
    } catch (error) {
    }
  };

  public getContract = () => {
    return this.contract_erc20;
  };

  public getProvider = (): Web3Provider => {
    return this.provider;
  };

  public approveToken(to: string, amount: BigNumberish): Promise<ContractTransaction> {
    return new Promise(async (resolve, rejects) => {
      try {
        const transaction = await this.contract_erc20.approve(to, amount);
        resolve(transaction);
      } catch (e) {
        rejects(e);
      }
    });
  }

  public getContractErc20() {
    return this.contract_erc20;
  }

  public getBalance = (account: string): Promise<BigNumber> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const balance = await this.contract_erc20.balanceOf(account);
        resolve(balance);
      } catch (error) {
        rejects(error);
      }
    });
  };

  public allowance = (owner: string, spender: string): Promise<BigNumber> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const allowance = await this.contract_erc20.allowance(owner, spender);
        resolve(allowance);
      } catch (error) {
        rejects(error);
      }
    });
  };

  public getDecimal = (): Promise<number> => {
    return new Promise(async (resolve, rejects) => {
      try {
        const allowance = await this.contract_erc20.decimals();
        resolve(allowance);
      } catch (error) {
        rejects(error);
      }
    });
  };
}

export default new ERC20Provider();
