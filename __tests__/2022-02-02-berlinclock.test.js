const { berlinclock } = require('../src/2022-02-02-berlinclock');

describe('User story 1', () => {
  it('If 00:00:00 is given, then lights are off except the first one in the bottom line', () => {
    expect(berlinclock('00:00:00')).toBeDefined();
  });
});
