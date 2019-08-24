class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  userId(id) {
    return this.activityData.filter(val => val.userID === id); 
  }

  milesWalkedOnDay(id, date, strideLength) {
    let specificDate = this.userId(id).find((data) => data.date === date);
    let result =  (specificDate.numSteps * (strideLength / 2) ) / 5280;
    return parseFloat(result.toString().slice(0, 3));
  }

  minsActiveOnDay(id, date) {
    return this.userId(id).find((val) => val.date === date).minutesActive;
  }

  avgMinsActiveWeekly(id) {
    let days = this.userId(id);
    let result = days.map((day) => day.minutesActive);
    let weekDays = result.slice(0,7);
    let resultReduce = weekDays.reduce((acc, currMins) => {
      acc += currMins;
      return acc;
    }, 0); 
    return Math.floor(resultReduce / weekDays.length)
  }

  stepGoalOnDay(id, date, dailyStepGoal) {
    let user = this.userId(id);
    let specificDate = user.find((data) => data.date === date);
    if (specificDate.numSteps >= dailyStepGoal) {
      return true;
    } else {
      return false
    }
  }

  exceededStepGoal(id, dailyStepGoal) {
    let user = this.userId(id);
    let daysGoalMet = user.filter((val) => val.numSteps >= dailyStepGoal); 
    let reduced = daysGoalMet.reduce((acc, currDate) => {
      acc.push(currDate.date)
      return acc;
    }, []);
    return reduced;
  }

  allTimeClimbingRecord(id) {
    let user = this.userId(id); 
    let stairs = user.map((val) =>  val.flightsOfStairs).sort((a, b) => a - b);
    let highestNum = stairs.pop();
    return highestNum;
  }

  avgNumOfStairsClimbedOnDay(date) {
    let day = this.activityData.filter((val) => val.date === date)
    let reduced = day.reduce((acc, currDay) => {
      acc += currDay.flightsOfStairs
      return acc;
    }, 0);
    return Math.floor(reduced / day.length)
  }
  
  avgStepsTakenOnDay(date) {
    let day = this.activityData.filter((val) => val.date === date)
    let reduced = day.reduce((acc, currDay) => {
      acc += currDay.numSteps
      return acc;
    }, 0);

    return Math.floor(reduced / day.length);
  }
  
  avgMinsActiveOnDay(date) {
    let day = this.activityData.filter((val) => val.date === date)
    let reduced = day.reduce((acc, currDay) => {
      acc += currDay.minutesActive
      return acc;
    }, 0);
    
    return  Math.floor(reduced / day.length);
  }
  
  // eiffelTowerChallenge() {
  //   // iteration 5 
  // }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
};