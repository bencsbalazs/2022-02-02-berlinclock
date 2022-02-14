class BerlinClock {
  constructor(time) {
    this.time = time;
    this.result = [
      [this.firstElement()],
      this.secondElement(),
      this.thirdElement(),
    ];
  }

  getSeconds() {
    return this.time.split(':')[2];
  }

  getHours() {
    return this.time.split(':')[0];
  }

  firstElement() {
    return this.getSeconds() % 2 === 0 ? 'Y' : 'O';
  }

  secondElement() {
    const hours = this.getHours();
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      if (i < Math.trunc(hours / 5)) {
        result.push('R');
      } else {
        result.push('O');
      }
    }
    return result;
  }

  thirdElement() {
    const hours = this.getHours();
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      result.push(i < Math.trunc(hours % 5) ? 'R' : 'O');
    }
    return result;
  }
}

module.exports = { BerlinClock };
