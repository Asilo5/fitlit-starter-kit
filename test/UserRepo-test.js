const chai = require('chai');
const expect = chai.expect;

const mockData = require('../data/mock-user');
const UserRepo = require('../src/UserRepo');


describe('UserRepo', () => {
  let userRepo;
  beforeEach( () => {
    userRepo = new UserRepo(mockData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  })

  it('should return user ID', () => {
    expect(userRepo.returnUserID(2)).to.equal(mockData[1]);
  });

  it('should return avg step goals of all users', () => {
    expect(userRepo.returnAvgStepGoal()).to.equal(6666)
  });
});

 