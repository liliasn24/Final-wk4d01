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
    const heroPhrase = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
    console.log(heroPhrase);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemyP) {
    // for (let key in this.weapons) {
    //   console.log(key);
    //   console.log(this.weapons[key]);
    let sprinkleSpray = this.weapons.sprinkleSpray;
    let sugarShock = this.weapons.sugarShock;
    console.log(sprinkleSpray);
    console.log(sugarShock);
    let dvsr = enemyP.health - sugarShock;
    console.log(dvsr);

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
    const enemyPhrase = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
    console.log(enemyPhrase);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemyD) {
    let pepperoniStars = this.weapons.pepperoniStars;
    let cheeseGrease = this.weapons.cheeseGrease;
    console.log(pepperoniStars);
    console.log(cheeseGrease);
    let rvsd = enemyD.health - pepperoniStars;
    console.log(rvsd);
    }
  }


const pizzaRat = new Enemy('Pizza Rat');

// Have Dougie talkSass
console.log(dougie.talkSass());

// Have Pizza Rat talkSmack
console.log(pizzaRat.talkSmack());

// Have Dougie announceHealth
console.log(dougie.announceHealth());

// Have Pizza Rat announceHealth
console.log(pizzaRat.announceHealth());

// Have Pizza Rat fightDougie
console.log(pizzaRat.fight(dougie));

// Have Dougie fightPizza Rat
console.log(dougie.fight(pizzaRat));

// Have Pizza Rat and Dougie both announceHealthto make sure their health has decreased!
console.log(dougie.health); /* how do I access the new 'health' after the fight? */
