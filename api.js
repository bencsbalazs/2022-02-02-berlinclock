const express = require('express');
const { BerlinClock } = require('./src/2022-02-02-berlinclock');

const app = express();

app.get('/', (req, res) => {
  const { time } = req.query;
  if (time) {
    const berlinClock = new BerlinClock(time);
    res.status(200).json({ berlinClock: berlinClock.result });
  } else {
    res.status(200).json({});
  }
});

module.exports = { app };
