import { getTokenPriceResolver } from './resolvers/token';
import core, { ApiModule } from '@ernotestalis/core';
import { getPairReservesResolver } from './resolvers/defi';
import { resolveDomainResolver } from './resolvers/resolve';
import { getTokenBalancesResolver, getNativeBalanceResolver } from './resolvers/account';
import { resolveAddressResolver } from './resolvers/resolve/resolveAddress';
import { reSyncMetadataResolver, getTokenAllowanceResolver } from './resolvers/token';
import {
  getBlockResolver,
  getDateToBlockResolver,
  runContractFunctionResolver,
  getLogsByAddressResolver,
  getTransactionResolver,
} from './resolvers/native';

export const BASE_URL = 'https://deep-index.moralis.io/api/v2';
export class MoralisEvmApi extends ApiModule {
  constructor() {
    super({
      name: 'evmApi',
      core,
      baseUrl: BASE_URL,
    });
  }

  get native() {
    return {
      runContractFunction: runContractFunctionResolver.fetch,
      getBlock: getBlockResolver.fetch,
      getDateToBlock: getDateToBlockResolver.fetch,
      getTransaction: getTransactionResolver.fetch,
      getLogsByAddress: getLogsByAddressResolver.fetch,
    };
  }
  get account() {
    return {
      getTokenBalances: getTokenBalancesResolver.fetch,
      getNativeBalance: getNativeBalanceResolver.fetch,
    };
  }
  get resolve() {
    return {
      resolveDomain: resolveDomainResolver.fetch,
      resolveAddress: resolveAddressResolver.fetch,
    };
  }
  get defi() {
    return {
      getPairReserves: getPairReservesResolver.fetch,
    };
  }
  get token() {
    return {
      reSyncMetadata: reSyncMetadataResolver.fetch,
      getTokenPrice: getTokenPriceResolver.fetch,
      getTokenAllowance: getTokenAllowanceResolver.fetch,
    };
  }
}

const moralisEvmApi = new MoralisEvmApi();
export default moralisEvmApi;
