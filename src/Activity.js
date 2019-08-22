class Activity {
  constructor( {id, date, numSteps, flightsOfStairs} ) {
    Object.assign(this, {id, date, numSteps, flightsOfStairs} )
  }

  milesWalkedOnDay(date) {

  }

  minsActiveOnDay(id, date) {

  }

  avgMinsActiveWeekly() {

  }

  stepGoalOnDay(date) {

  }

  exceededStepGoal() {
    //find all the days that exceeded the users step goal
  }

  allTimeClimbingRecord() {
    //find a users all time climbing record
  }

  eiffelTowerChallenge() {
    // iteration 5 
  }

  avgNumOfStairsClimbedOnDay(date) {

  }

  avgStepsTakenOnDay(date) {

  }

  minsActiveOnDayAllUsers(date) {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
};