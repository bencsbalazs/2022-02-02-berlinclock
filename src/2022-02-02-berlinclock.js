class BerlinClock {
  constructor(time) {
    this.time = time.split(':');
    this.result = [
      [this.firstElement()],
      this.secondElement(),
      this.thirdElement(),
      this.fourthElement(),
      this.fifthElement(),
    ];
  }

  firstElement() {
    return this.time[2] % 2 === 0 ? 'Y' : 'O';
  }

  secondElement() {
    const hours = this.time[0];
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
    const hours = this.time[0];
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      result.push(i < Math.trunc(hours % 5) ? 'R' : 'O');
    }
    return result;
  }

  fourthElement(minutes = this.time[1]) {
    const result = [];
    let element;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 12; i++) {
      if (i <= Math.trunc(minutes / 5)) {
        element = i % 3 === 0 ? 'R' : 'Y';
      } else {
        element = 'O';
      }
      result.push(element);
    }
    return result;
  }

  fifthElement(minutes = this.time[1]) {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(i < Math.trunc(minutes % 5) ? 'Y' : 'O');
    }

    return result;
  }
}

module.exports = { BerlinClock };
