const { BerlinClock } = require('../src/2022-02-02-berlinclock');

describe('User story 1', () => {
  it('If 00:00:00 is given, then lights are off except the first one in the bottom line', () => {
    const actualClock = new BerlinClock('00:00:00');
    expect(actualClock).toBeDefined();
  });

  it('The clock should return a two dimensional array.', () => {
    const actualClock = new BerlinClock('00:00:00');
    expect(actualClock.result.filter(Array.isArray).length).toBeGreaterThan(0);
  });
});
