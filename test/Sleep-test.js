const chai = require('chai');
const expect = chai.expect;

const mockSleepData = require('../data/mock-sleep');
const userData =  require('../data/users');
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  let sleep;

  beforeEach(() => {
    sleep = new Sleep(mockSleepData);
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function'); 
  })

  it('should return the avg number of hours slept per day for a user', () => {
    expect(sleep.dailyAvgNumHoursSlept(2)).to.equal(7);
  })

  it('should return avg sleep quality per day over all time for a user', () => {
    expect(sleep.avgQualityPerDayAllTime(2)).to.equal(3);
  })

  it('should return hours slept for specific date', () => {
    expect(sleep.hoursSleptOnDay(2, "2019/06/16")).to.equal(7.5); 
  })

  it('should return sleep quality for specific date', () => {
    expect(sleep.qualitySleptOnDay(2, "2019/06/16")).to.equal(3.8); 
  })

  it('should return hours slept each day for a week', () => {
    expect(sleep.hoursSleptWeekly(2, "2019/06/16")).to.eql([7.5, 5.7, 10.8, 9.6, 10.1, 4.3]);
  })

  it('should return sleep quality each day for a week', () => {
    expect(sleep.qualitySleptWeekly(2, "2019/06/16")).to.eql([ 3.8, 3, 3.2, 2.5, 2.4, 4.8]); 
  })

  it('should return avg sleep quality for all users', () => {
    expect(sleep.avgSleepQualityAllUsers()).to.equal(3);
  })

  it('should return sleep quality for all users above 3 in a week', () => {
    expect(sleep.qualitySleptAboveThreeWeekly("2019/06/16")).to.equal(3.8); 
  })

  it('should return the users who slept most hours by date', () => {
    expect(sleep.mostSleptHoursPerDay(userData, "2019/06/16")).to.equal('Herminia Witting');
  })

})