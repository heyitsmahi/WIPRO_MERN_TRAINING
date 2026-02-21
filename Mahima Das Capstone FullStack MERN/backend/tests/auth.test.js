const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../server'); 

describe('Auth & App API Integration Tests', function() {
  
  it('should return a list of applications (GET /api/apps)', async function() {
    const response = await request(app).get('/api/apps'); 
    
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should reject login with wrong credentials (POST /api/auth/login)', async function() {
    const response = await request(app)
      .post('/api/auth/login') 
      .send({
        email: 'wronguser@gmail.com',
        password: 'badpassword'
      });
      
    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
  });

});