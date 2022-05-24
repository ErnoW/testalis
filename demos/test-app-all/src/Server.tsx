import { Moralis } from 'moralis';
import { AuthMethod } from '@ernotestalis/server/lib/AuthMethods/types';

export const Server = () => {
  return (
    <div>
      <h2>Server</h2>
      <button onClick={() => Moralis.Server.authenticate(AuthMethod.EVM, { connector: 'metamask', silent: false })}>
        Authenticate via EVM metamask
      </button>

      <button onClick={() => {}}>Logout</button>
    </div>
  );
};
