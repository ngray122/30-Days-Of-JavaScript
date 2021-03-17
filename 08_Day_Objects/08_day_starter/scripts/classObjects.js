//1.
let dog = {

}

//2.
console.log(dog);

//3.
let dog = {
    name: "Spot",
    legs: 4,
    color: "black",
    age: 7,
    bark: function(){
        return console.log("woof woof")
    }
};

//4.
dog.name;
dog.legs;
dog.color;
dog.age;
dog.bark;

//5.
dog.breed = "Poodle";
dog.getDogInfo = function() {
    return `I am a ${this.breed} and my name is ${this.name}! I have ${this.legs} legs and I am ${this.age} years old. I am all ${this.color}!`
  };