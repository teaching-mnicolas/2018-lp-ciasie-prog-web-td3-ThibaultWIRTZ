describe ("Chain of prototypes", function() {
  let warrior, toto, Character, Warrior;

  beforeEach(function() {
    Character = function() {};
    warrior = new Character();

    Warrior = function() {};
    Warrior.prototype = warrior;
    toto = new Warrior();
  });

  it ("constructor of toto is Character, not Warrior", function() {
    expect(toto.constructor).not.toBe(Warrior);
    expect(toto.constructor).toBe(Character.prototype.constructor);
  });

  it ("__proto__ of toto is Warrior.prototype", function() {
    expect(toto.__proto__).toBe(Warrior.prototype);
    expect(toto.__proto__).toBe(warrior);    // there is another name for this object
  });

  it ("Character is the constructor of toto.__proto__", function() {
    expect(toto.__proto__.constructor).toBe(toto.constructor);
    expect(warrior.constructor).toBe(toto.constructor);
  });

  it ("toto.__proto__.__proto__ is NOT warrior", function() {
    expect(toto.__proto__.__proto__).not.toBe(warrior);
     expect(warrior.__proto__).not.toBe(toto.__proto__);
  });

  it ("Character is the constructor of toto.__proto__.__proto__", function() {
    expect(toto.__proto__.__proto__.constructor).toBe(Character);
  });

  it ("Character is the constructor of warrior.__proto__", function() {
    expect(warrior.__proto__.constructor).toBe(Character);
  });

});
