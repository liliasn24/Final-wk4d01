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

// const gus = new Hamster('Gus'); //Argument is Gus


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
      const income = ageValue * 10;
      const newValue = this.bankAccount += income;
      console.log(`new age: ${newAge}, new height: ${newHeight}, new weight: ${newWeight} and current income: ${newValue}`);
    }

  buyHamster(hamster) {
    let newHamster = [];
    newHamster.push(hamster);
    const newMood = this.mood += 10;
    console.log(newMood)
    const newValue = this.bankAccount -= gus.getPrice();
    console.log(newValue);
    return newHamster;

  }
}


// 6. Create a hamster named "Gus"
// I had to move number 6 up here becuase I was getting undefined if I kept it in line 94.

const gus = new Hamster('Gus');

// console.log(timmy.eat(2, 5))
// console.log(timmy.exercise(5));
// console.log(timmy.ageUp(5));

// 1. Instantiate a new Person named Timmy
const timmy = new Person('Timmy');

// 2. Age Timmy five years
console.log(timmy.ageUp(5));


// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
 console.log(timmy.eat(5, 5));

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times

console.log(timmy.exercise(5));
// 5. Age Timmy 9 years

console.log(timmy.ageUp(9));



// 7. Set Gus's owner to the string "Timmy"

console.log(gus.owner = 'Timmy');

// 8. Have Timmy "buy" Gus

console.log(timmy.buyHamster(gus));

// 9. Age Timmy 15 years

console.log(timmy.ageUp(15));

// 10. Have Timmy eat twice
console.log(timmy.eat(2, 2));

// 11. Have Timmy exercise twice

console.log(timmy.exercise(2));
