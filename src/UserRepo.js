class UserRepo {
  constructor(users) {
    this.users = users;
    this.randomUser = {};
  }

  returnUserID(id) {
    return this.users.find((user) => user.id === id) 
  }

  getRandomUser() {
    const randomIndex = Math.round(Math.random() * (this.users.length - 1) + 1)
    this.randomUser = this.users[randomIndex];
    return this.returnUserID(randomIndex);
  }

  returnAvgStepGoal() {
    let stepGoal = this.users.map((currUser) => currUser.dailyStepGoal )
      .reduce((acc, currElem) => {
        acc += currElem
        return acc
      }, 0);
    return Math.floor(stepGoal / this.users.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}

