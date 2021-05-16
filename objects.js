class Hamster {
  constructor(name){ //name is the parameter
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price;
  }
}

const Gus = new Hamster('Gus'); //Argument is Gus


// ==========================================================

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(){
    console.log();
  }
  eat(){
    let newAge = this.age + 1;
    let newMood = this.mood + 1;
    console.log(newAge);
    console.log(newMood);
    return newAge;
    return newMood;
  }
  exercise() {
    let newExercise = this.exercise +1;
    console.log(newExercise);
    return newExercise;
  }
  ageUp() {
    let newAge = this.age + 1;
    let newHeight = this.height + 1;
    let newMood = this.mood - 1;
    let newBankAcct = this. bankAccount + 10;
    console.log(newBankAcct);
    console.log(newMood);
    return newAge;
    return newHeight;
    return newMood;
    return newBankAcct;
  }
  buyHamster() {
    let newHamster = [];
    newHamster.push(Gus);
    return newHamster;
  }
}
