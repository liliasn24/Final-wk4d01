class Hero {
  constructor(name) {
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
      'you can\'t count my calories']
  }
  talkSass() {
    const heroPhrase = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    console.log(heroPhrase);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m ready to rumble');
  }
}

const dougie = new Hero('Dougie');


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
    const enemyPhrase = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    console.log(enemyPhrase);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
  }
}

const pizzaRat = new Enemy('Pizza Rat');
