const request = require('supertest');
const server = require('./index');

describe('GET /', function() {
  it('responds with Hello, Bitrise!', function(done) {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello, Bitrise!\n', done);
  });
});

