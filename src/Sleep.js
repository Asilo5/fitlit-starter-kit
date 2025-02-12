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

  findIndexOfData(weekDate) {
    return this.sleepData.findIndex((data) => data.date === weekDate);
  }
 
  hoursSleptWeekly(id, weekDate) {
    return this.findUser(id).slice(this.findIndexOfData(weekDate), this.findIndexOfData(weekDate) + 7)
      .map((user) => user.hoursSlept);
  }

  qualitySleptWeekly(id, weekDate) {
    return this.findUser(id).slice(this.findIndexOfData(weekDate), this.findIndexOfData(weekDate) + 7)
      .map((user) => user.sleepQuality);
  }

  avgSleepQualityAllUsers() {
    let sleepQualityList = this.sleepData.map((data) => data.sleepQuality)
      .reduce((totalQuality, quality) => {
        return totalQuality += quality;
      }, 0)

    return Math.floor(sleepQualityList / this.sleepData.length);
  }

  qualitySleptAboveThreeWeekly(userData, weekDate) {
    let findSleepQuality = this.sleepData.slice(this.findIndexOfData(weekDate), this.findIndexOfData(weekDate) + 6)
      .filter((data) => data.sleepQuality > 3);

    let findUserName = userData.reduce((foundUsers, user) => {
      findSleepQuality.forEach((quality) => {
        if (quality.userID === user.id) {
          foundUsers.push(user.name);
        }
      })
      return foundUsers;
    }, [])

    return Array.from(new Set(findUserName));
  } 
  
  mostSleptHoursPerDay(userData, date) {
    let highestSleeper = this.sleepData.filter((hrSleep) => hrSleep.date === date)
      .sort((a, b) => b.hoursSlept - a.hoursSlept)[0];

    return userData.find((user) => user.id === highestSleeper.userID).name;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}