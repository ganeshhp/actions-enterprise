
const request = require('supertest');
const app = require('../index');

describe('App Test', () => {
  it('returns hello message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Enterprise GitHub Actions Training');
  });
});
