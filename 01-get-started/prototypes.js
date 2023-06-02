console.log("prototypes");

function CreateUserObject(name, city) { 
  this.name = name;
  this.city = city;

  this.getName = function () {
    console.log(this.name);
  };
}

CreateUserObject.prototype.getCity = function () {
  console.log(this.city);
};

const user1 = new CreateUserObject("Ali", "Cairo");
const user2 = new CreateUserObject("Taha", "Alex");

console.log(user1.getName === user2.getName);
console.log(user1.getCity === user2.getCity);
// The output of the code snippet above will be:
// false
// true
// Explanation: The getName method is created for each instance of the CreateUserObject function, while the getCity method is created once and shared between all instances of the CreateUserObject function.
// The getCity method is created on the prototype of the CreateUserObject function, while the getName method is created on each instance of the CreateUserObject function.
// memory wise, the getCity method is created once and shared between all instances of the CreateUserObject function, while the getName method is created for each instance of the CreateUserObject function.
