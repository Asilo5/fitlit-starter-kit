const chai = require('chai');
const expect = chai.expect;

const mockUser = require('../data/mock-user');
const User = require('../src/User');


describe('User', () => {
  
  beforeEach( () => {
    user = new User(mockUser[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });
  
  it('should return users first name', () => {
    expect(user.returnFirstName()).to.equal('Luisa')
  })
});