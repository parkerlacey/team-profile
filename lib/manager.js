const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this._officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager'
  }
};

modle.exports = Manager;