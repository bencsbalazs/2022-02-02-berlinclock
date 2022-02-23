const request = require('supertest');
const { app } = require('../api');

describe('Test the API accessibility', () => {
  it('The API needs to be accessible', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('The API needs an input', (done) => {
    request(app)
      .get('/?time=12:00:00')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('The berlin clock API should respond to an input', (done) => {
    request(app)
      .get('/?time=12:00:00')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        done();
      });
  });

  it('The response will contain the display of the berlin clock in a two dimensional array', (done) => {
    request(app)
      .get('/?time=12:00:00')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.berlinClock)).toBe(true);
        done();
      });
  });
});
