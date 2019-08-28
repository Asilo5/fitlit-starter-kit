class User {
  constructor(user) {
    Object.assign( this, user );
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
