class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoals = user.dailyStepGoals;
    this.friends = user.friends; 
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
