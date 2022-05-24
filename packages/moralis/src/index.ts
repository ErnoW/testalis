// Import all Moralis modules
import Server from '@ernotestalis/server';
import EvmApi from '@ernotestalis/evm-api';
import Evm from '@ernotestalis/evm';

// Import all other functions
import Core from '@ernotestalis/core';

// register all Moralis modules to MoralisCore
Core.registerModules([Evm, Server, EvmApi]);

const start = Core.start;

const Moralis = { Core, Server, Evm, EvmApi, start };

export { Moralis };
export default Moralis;
