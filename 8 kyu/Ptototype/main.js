function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Khrystyna", 26);
const user2 = new User("Vitalii", 26);

User.prototype.showUserInfo = function () {
  return `Name: ${this.name}. Age: ${this.age}`;
};
