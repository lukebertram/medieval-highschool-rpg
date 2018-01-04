import {Character, Nerd, Jock, Goth } from './../js/character.js';

describe('Character', function() {

  let character;

  beforeEach(function() {
    character = new Character("Grimmond");
  })

  it('should have a name', function() {
    expect(character.name).toEqual("Grimmond");
    expect(character.name).not.toBeUndefined();
  });

  it('should reduce health when damaged', function() {
    const startingHealth = character.health;
    const dmgAmt = 5;
    character.takeDamage(5);
    expect(character.health).toEqual(startingHealth - dmgAmt);
  });

  it('should be dead when health drops below 0', function(){
    expect(character.health).toEqual(10);
    expect(character.isDead).toEqual(false);
    character.takeDamage(10);
    expect(character.isDead).toEqual(true);
  });


});

describe('Nerd', function() {

});
