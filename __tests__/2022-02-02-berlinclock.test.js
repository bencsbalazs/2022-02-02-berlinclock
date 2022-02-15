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

  it('Between 10 and 14 minutes it should return two "y" and 9 "O"', () => {
    const actualClock = new BerlinClock('00:12:00');
    expect(actualClock.result[3]).toEqual([
      'Y',
      'Y',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ]);
  });

  it('Between 15 and 20 minutes it should return two "y", 1 "R" and 8 "O"', () => {
    const actualClock = new BerlinClock('00:16:00');
    expect(actualClock.result[3]).toEqual([
      'Y',
      'Y',
      'R',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ]);
  });

  it('Between 16 and 17 minutes it should return one "Y" and 3 "O"', () => {
    const actualClock = new BerlinClock('00:16:00');
    expect(actualClock.result[4]).toEqual(['Y', 'O', 'O', 'O']);
  });
  it('The berlin clock should show the time in all the five rows', () => {
    const actualClock = new BerlinClock('12:56:01');
    expect(actualClock.result).toEqual([
      ['O'],
      ['R', 'R', 'O', 'O'],
      ['R', 'R', 'O', 'O'],
      ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y'],
      ['Y', 'O', 'O', 'O'],
    ]);
  });
});
