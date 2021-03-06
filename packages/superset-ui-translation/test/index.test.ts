import { configure, t, tn } from '../src/index';

describe('index', () => {
  it('exports configure()', () => {
    expect(configure).toBeDefined();
    expect(configure).toBeInstanceOf(Function);
  });
  it('exports t()', () => {
    expect(t).toBeDefined();
    expect(t).toBeInstanceOf(Function);
  });
  it('exports tn()', () => {
    expect(tn).toBeDefined();
    expect(tn).toBeInstanceOf(Function);
  });
});
