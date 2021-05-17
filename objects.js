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

const gus = new Hamster('Gus'); //Argument is Gus

const somevar = 'somevalue';

// ------------------------

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
  eat(weight, mood){
    console.log(this.weight += weight);
    console.log(this.mood += mood);
    // I tried to return the new weigth and mood, but I'm not sure why it was just returning line 47 for weight but not line 48 for mood, so I just console logged them.
  }
  exercise(exerciseValue) {
    return this.weight -= exerciseValue;
  }
  ageUp(ageValue) {
      const newAge = this.age += ageValue;
      const newHeight = this.height += ageValue;
      const newWeight = this.weight += ageValue;
      console.log(newAge, newHeight, newWeight);
    }

  buyHamster() {
    let newHamster = [];
    newHamster.push(Gus);
    return newHamster;
  }
}
