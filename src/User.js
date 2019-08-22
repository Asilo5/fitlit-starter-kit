class User {
  constructor( {id, name, address, email, strideLength, dailyStepGoals, friends} ) {
    Object.assign( this, {id, name, address, email, strideLength, dailyStepGoals, friends} )
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
