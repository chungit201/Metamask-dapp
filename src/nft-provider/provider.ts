import { RPC } from '../consts';
import { JsonRpcProvider } from '@ethersproject/providers';

class Provider {
  private default_provider = new JsonRpcProvider(RPC);
  private provider;

  constructor() {
    this.provider = this.default_provider;
  }
  public setProvider(provider: any) {
    try {
      if (provider) {
        this.provider = provider;
      } else {
        this.provider = this.default_provider;
      }
    } catch (e) {
      console.log('setProviderMarket', e);
    }
  }
  public getProvider = () => this.provider;
}

export default new Provider();
