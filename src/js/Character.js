/**
 * Define Character constructor
 *
 * @param {Object} character - The Character who is having fun in dungeon while you're here.
 * @param {string} character.name - The name of the Character.
 * @param {string} character.type - The type of the Character.
 *
 * @throws Will throw an error if the name or type isn't a string or name is < 1 and > 11 symbols
 * @throws Will throw an error if the type isn't exist
 */

function Character(name, type) {
  if (typeof name === 'string' && name.length > 1 && name.length < 11) {
    this.name = name;
  } else {
    throw new Error('Name of the character must be a string > 1 and < 11 symbols.');
  }

  if (typeof type === 'string') {
    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      default:
        throw new Error('There is no such types. Check spelling.');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
  } else {
    throw new Error('Type must be a string.');
  }
}

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
  }
};

export default Character;
