const mockUserData = require('../data/mock-user')

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  findUser(id) {
    return this.sleepData.filter((data) => data.userID === id);
  }

  dailyAvgNumHoursSlept(id) {
    let findAvg = this.findUser(id).reduce((totalSleep, sleep) => {
      totalSleep += sleep.hoursSlept;
      return totalSleep;
    }, 0);

    return Math.floor(findAvg / this.findUser(id).length);
  }

  avgQualityPerDayAllTime(id) {
    let qualitySleep = this.findUser(id).reduce((totalQuality, quality) => {
      totalQuality += quality.sleepQuality;
      return totalQuality;
    }, 0);

    return Math.floor(qualitySleep / this.findUser(id).length);
  }

  hoursSleptOnDay(id, date) {
    return this.findUser(id).find((user) => user.date === date).hoursSlept;
  }

  qualitySleptOnDay(id, date) {
    return this.findUser(id).find((user) => user.date === date).sleepQuality;
  }
 
  hoursSleptWeekly(id) {
    return this.findUser(id).map((user) => user.hoursSlept).slice(-7);
  }

  qualitySleptWeekly(id) {
    return this.findUser(id).map((user) => user.sleepQuality).slice(-7);
  }

  avgSleepQualityAllUsers() {
    let sleepQualityList = this.sleepData.map((data) => data.sleepQuality)
      .reduce((totalQuality, quality) => {
        return totalQuality += quality;
      }, 0)

    return Math.floor(sleepQualityList / this.sleepData.length);
  }

  qualitySleptAboveThreeWeekly() {

  }
  
  mostSleptHoursPerDay(date) {
    let highestSleeper = this.sleepData.filter((hrSleep) => hrSleep.date === date)
      .sort((a, b) => b.hoursSlept - a.hoursSlept)[0];

    return mockUserData.find((user) => user.id === highestSleeper.userID).name;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}