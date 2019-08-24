class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  userDays(id) {
    return this.activityData.filter(val => val.userID === id); 
  }

  milesWalkedOnDay(id, date, strideLength) {
    let specificDate = this.userDays(id).find((data) => data.date === date);
    let result =  (specificDate.numSteps * (strideLength / 2) ) / 5280;
    return parseFloat(result.toString().slice(0, 3));
  }

  minsActiveOnDay(id, date) {
    return this.userDays(id).find((val) => val.date === date).minutesActive;
  }

  avgMinsActiveWeekly(id) {
    // add minsActive divide total num by 7
    let days = this.userDays(id);
    let result = days.map((day) => day.minutesActive);
    let weekDays = result.slice(0,7);
    let resultReduce = weekDays.reduce((acc, currMins) => {
      acc += currMins;
      return acc;
    }, 0); 
    return Math.floor(resultReduce / weekDays.length)
  }

  stepGoalOnDay(id, date, dailyStepGoal) {
    // match 
    let user = this.userDays(id);
    let specificDate = user.find((data) => data.date === date);
    if (specificDate.numSteps >= dailyStepGoal) {
      return true;
    } else {
      return false
    }
  }

  exceededStepGoal() {
    //find all the days that exceeded the users step goal
    //filter through dates that match a conditional of numSteps > user dailyGoal
  }

  allTimeClimbingRecord() {
    //find a users all time climbing record
  }

  
  avgNumOfStairsClimbedOnDay(date) {
    //filter by date to get flights of stairs climbed on that day by each user
    //add the data by using the reduce method 
    //divide that result by the length of the filtered array
  }
  
  avgStepsTakenOnDay(date) {
    //filter by date to get num of steps taken on a that day for all users
    // using reduce add num of steps return that result 
    // divide reduced result by the length of the filtered array
  }
  
  minsActiveOnDayAllUsers(date) {
    //filter by date to get mins active on a specific day for all users
    // using reduce add mins active return that result 
    // divide reduced result by the length of the filtered array
  }
  
  eiffelTowerChallenge() {
    // iteration 5 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
};