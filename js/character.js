 export class Character {
  constructor(name){
    this.name = name;
    this.health = 10;
    this.dex = 0;
    this.str = 0;
    this.int = 0;
    this.cha = 0;
    this.inventory = [];
    this.exp = 0;
    this.lvl = 0;
    this.isDead = false;
  }

  setDead(){
    this.isDead = true;
  }

  takeDamage(amount){
    this.health -= amount;
    if (this.health < 1){
      this.isDead = true;
    }
  }

  attack(){

  }
}

export class Nerd extends Character {
  constructor(name){
    super(name);
    this.int = 3;
    this.inventory=["protractor"];

  }
}

export class Jock extends Character {
//strength
}

export class Goth extends Character {
//char
}
