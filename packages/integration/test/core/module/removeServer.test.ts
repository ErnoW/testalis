import Core from '@ernotestalis/core';
import Server from '@ernotestalis/server';

describe('Moralis Core', () => {
  test('should remove server module', () => {
    Core.registerModules([Server]);
    Core.modules.remove('server');
    let listModule = Core.modules.list();
    expect(listModule).not.toContain(Server);
    expect(listModule.length).toBe(0);
    expect(listModule).not.toBeUndefined();
    expect(() => Core.modules.remove('server')).toThrowErrorMatchingInlineSnapshot(
      `"[C0003] Module \\"server\\" does not exist."`,
    );
  });
});
