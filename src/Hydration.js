class Hydration {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  userId(id) {
    return this.hydroData.filter((data) => data.userID === id);
  }
  
  avgFluidOzPerDayAllTimes(id) {
      
    let result = this.userId(id).reduce((acc, currElement) => {
      acc += currElement.numOunces
      return acc;
    }, 0)

    return Math.floor(result / this.userId(id).length)
 
  }

  dayFluidOz(date) {
    return this.hydroData.find((data) => data.date === date).numOunces;
  }

  fluidOzWeekly(id) {
    return this.userId(id).map((user) => user.numOunces).slice(0, 7);
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}