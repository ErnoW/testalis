import { EvmChain, EvmChainish, EvmAddress, EvmAddressish } from '@ernotestalis/core';
import { operations } from '../../generated/types';
import { EvmResolver } from '../Resolver';

type operation = 'runContractFunction';
const method = 'post';
const bodyParams = ['abi', 'params'] as const;

type QueryParams = operations[operation]['parameters']['query'];
type PathParams = operations[operation]['parameters']['path'];
type Body = operations[operation]['requestBody']['content']['application/json'];
type ApiParams = QueryParams & PathParams & Body;
export interface Params {
  chain?: EvmChainish;
  subdomain?: ApiParams['subdomain'];
  providerUrl?: ApiParams['providerUrl'];
  // TODO: allow also function_name, with proper typechecking where one of both is required. then parse in correctly as param
  functionName: ApiParams['function_name'];
  address: EvmAddressish;
  abi: ApiParams['abi'];
  params: ApiParams['params'];
}
type ApiResult = operations[operation]['responses']['200']['content']['application/json'];

export const runContractFunctionResolver = new EvmResolver<ApiParams, Params, ApiResult, ApiResult, ApiResult>({
  getPath: (params: Params) => `${params.address}/function`,
  apiToResult: (data: ApiResult) => {
    return data;
  },
  resultToJson: (data) => data,
  parseParams: (params: Params) => ({
    chain: params.chain ? EvmChain.create(params.chain).apiHex : undefined,
    function_name: params.functionName,
    address: EvmAddress.create(params.address).lowercase,
    abi: params.abi,
    params: params.params,
  }),
  method,
  bodyParams,
});
