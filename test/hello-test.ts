import axios from 'axios';
import { expect } from 'chai';

describe('GET /hello', () => {
  it('should return hello, world', async () => {
    const response = await axios.get(`http://localhost:${process.env.PORT}/hello`)
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.equal('hello, world');
  });
});
