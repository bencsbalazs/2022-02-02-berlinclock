/* eslint-disable prefer-arrow-callback */
const prompt = require('prompt');
const { BerlinClock } = require('./src/2022-02-02-berlinclock');

const berlinClockRunner = () => {
  prompt.start();
  prompt.get(['time'], (err, result) => {
    const clock = new BerlinClock(result.time);
    return clock.result;
  });
};

berlinClockRunner();
