module.exports = {
  ...require('../../jest.config'),
  moduleNameMapper: {
    '^@ernotestalis/evm-connector-utils$': '<rootDir>/../evmConnectors/EvmConnectorUtils/src',
    '^@ernotestalis/evm-metamask-connector$': '<rootDir>/../evmConnectors/EvmMetamaskConnector/src',
    '^@ernotestalis/evm-walletconnect-connector$': '<rootDir>/../evmConnectors/EvmWalletconnectConnector/src',
    '^@ernotestalis/evm-api': '<rootDir>/../evmApi/src',
    '^@ernotestalis/(.*)$': '<rootDir>/../$1/src',
  },
};
