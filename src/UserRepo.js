class UserRepo {
  constructor(data) {
    this.user = data;
  }

  returnUserID(id) {
    return this.user.find((user) => user.id === id) 
  }

  returnAvgStepGoal() {
    let stepGoal = this.user.map((currUser) => currUser.dailyStepGoal )
      .reduce((acc, currElem) => {
        acc += currElem
        return acc
      }, 0);
    return Math.floor(stepGoal / this.user.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}

