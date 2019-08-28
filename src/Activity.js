class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  userId(id) {
    return this.activityData.filter(val => val.userID === id); 
  }

  specificDays(date) {
    return this.activityData.filter((val) => val.date === date)
  }

  findIndexOfData(weekDate) {
    return this.activityData.findIndex(data => data.date === weekDate);
  }

  numberOfSteps(id, date) {
    return this.userId(id).find(val => val.date === date).numSteps
  }

  milesWalkedOnDay(id, date, strideLength) {
    let specificDate = this.userId(id).find((data) => data.date === date);
    let result =  (specificDate.numSteps * (strideLength / 2) ) / 5280;
    return Number(result.toFixed(1));
  }

  minsActiveOnDay(id, date) {
    return this.userId(id).find((val) => val.date === date).minutesActive;
  }

  avgMinsActiveWeekly(id) {
    let days = this.userId(id).map((day) => day.minutesActive).slice(0, 7);
    let result = days.reduce((acc, currMins) => {
      acc += currMins;
      return acc;
    }, 0); 
    return Math.floor(result / days.length)
  }

  stepGoalOnDay(id, date, dailyStepGoal) {
    let specificUser = this.userId(id).find((data) => data.date === date);
    return specificUser.numSteps >= dailyStepGoal ? true : false;
  }

  exceededStepGoal(id, dailyStepGoal) {
    let specificUser = this.userId(id).filter((val) => val.numSteps >= dailyStepGoal);
    let result = specificUser.reduce((acc, currDate) => {
      acc.push(currDate.date)
      return acc;
    }, []);
    return result;
  }

  allTimeClimbingRecord(id) {
    let specificUser = this.userId(id); 
    let stairs = specificUser.map((val) =>  val.flightsOfStairs);
    let orderedNums = stairs.sort((a, b) => a - b);
    return orderedNums.pop();
  }

  avgNumOfKey(date, key) {
    let days = this.specificDays(date);
    let avgRecord = days.reduce((acc, currVal) => {
      acc += currVal[key]
      return acc;
    }, 0);
    return Math.floor(avgRecord / days.length)
  }
  
  eiffelTowerChallenge(id, date) {
    let stepsDone = this.userId(id).find((day) => day.date === date).numSteps;

    return Math.round(stepsDone / 1710);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}