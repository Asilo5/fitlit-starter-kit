const chai = require('chai');
const expect = chai.expect;

// for tests im using user 2 
const mockUserData = require('../data/mock-user');
const mockActivityData = require('../data/mock-activity');
const Activity = require('../src/Activity');
const UserRepo = require('../src/UserRepo');

describe('Activity', () => {
  let activity;
  let app;
  beforeEach(() => {
    activity = new Activity(mockActivityData);
    app = new UserRepo(mockUserData, activity);
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('should return miles walked in a day', () => {
    // console.log(activity)
    expect(activity.milesWalkedOnDay(2, "2019/06/15", 4.5)).to.equal(1.8);
  })

  it('should return mins active in that day', () => {
    expect(activity.minsActiveOnDay(2, "2019/06/15")).to.equal(138);
  })

  it('should return the average minutes active from the week', () => {
    expect(activity.avgMinsActiveWeekly(2)).to.equal(156);
  })

  it('should evaluate if step was reached on a specific day', () => {
    expect(activity.stepGoalOnDay(2, "2019/06/15", 5000)).to.equal(false);
  })

  it('should return all the days the user exceeded their step goals', () => {
    expect(activity.exceededStepGoal(2, 5000)).to.deep.equal( ["2019/06/17", "2019/06/19", "2019/06/20", "2019/06/21"] )
  })

  it('should return the highest num of stairs climbed', () => {
    expect(activity.allTimeClimbingRecord(2)).to.equal(44)
  })

  it('should return the avg stairs climbed from all users on a specific day', () => {
    expect(activity.avgNumOfStairsClimbedOnDay("2019/06/20")).to.equal(22)
  })

  it('should return the avg number of steps taken from all users on a specific day', () => {
    expect(activity.avgStepsTakenOnDay("2019/06/20")).to.equal(9333)
  })

  it('should return the avg minutes active from all users on a specific day', () => {
    expect(activity.avgMinsActiveOnDay("2019/06/20")).to.equal(114)
  })
})