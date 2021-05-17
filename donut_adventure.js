class Hero {
  constructor(name){
    this.health = 100;
    this.weapons = {
    sprinkleSpray: 5,
    sugarShock: 10
  };
    this.catchPhrases = ['i\'m fresher than day old pizza',
 'you can\'t count my calories']
 }
  talkSass(){
    console.log(this.catchPhrases[0]);
  }
  announceHealth(){
    console.log(this.health);
  }
  fight(){
    console.log('i\'m ready to rumble');
  }
}

class Enemy {
  constructor(name) {
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = ['i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer']
  }

  talkSmack() {
    console.log(this.catchPhrases[1]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
  }
}
const pizzaRat = new Enemy('Pizza Rat');
