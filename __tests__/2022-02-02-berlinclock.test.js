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

  it('The first element should be "Y" if the number of the seconds is even.', () => {
    const actualClock = new BerlinClock('00:00:00');
    expect(actualClock.result[0]).toEqual(['Y']);
  });

  it('The first element should be "O" if the number of the seconds is odd.', () => {
    const actualClock = new BerlinClock('00:00:01');
    expect(actualClock.result[0]).toEqual(['O']);
  });

  it('Between five and ten hours it should return one "R" and 3 "O".', () => {
    const actualClock = new BerlinClock('06:00:01');
    expect(actualClock.result[1]).toEqual(['R', 'O', 'O', 'O']);
  });

  it('Between 15 and 20 hours it should return 3 "R" and 1 "O".', () => {
    const actualClock = new BerlinClock('16:00:01');
    expect(actualClock.result[1]).toEqual(['R', 'R', 'R', 'O']);
  });

  it('Between 8 and 9 hours it should return 3 "R" and 1 "O".', () => {
    const actualClock = new BerlinClock('08:00:01');
    expect(actualClock.result[2]).toEqual(['R', 'R', 'R', 'O']);
  });
});
