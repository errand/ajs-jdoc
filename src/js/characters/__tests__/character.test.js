import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Check Name errors', () => {
  expect(() => new Character(32, 'Fairy')).toThrow();
});

test('Check Type;', () => {
  expect(() => new Character('Diablo', 'Fairy')).toThrow();
});

test('Check Type for a string;', () => {
  expect(() => new Character('Diablo', 234)).toThrow();
});

test('Test Damage', () => {
  const expected = 92.5;

  const received = new Character('Sandro', 'Bowman');
  received.damage(10);

  expect(received.health).toEqual(expected);
});

test('Test Levelup', () => {
  const expected = 30;

  const received = new Character('Sandro', 'Bowman');
  received.levelUp();

  expect(received.defence).toEqual(expected);
});

test('Test Levelup for dead character', () => {
  expect(() => {
    const received = new Character('Sandro', 'Bowman');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});

test('Test Death', () => {
  const expected = 0;

  const received = new Character('Sandro', 'Bowman');
  received.health = 0;

  expect(received.health).toEqual(expected);
});

test('Test Bowman', () => {
  const expected = {
    name: 'Sandro',
    attack: 25,
    defence: 25,
    type: 'Bowman',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Bowman('Sandro', 'Bowman');

  expect(received).toEqual(expected);
});

test('Test Swordsman', () => {
  const expected = {
    name: 'Sandro',
    attack: 40,
    defence: 10,
    type: 'Swordsman',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Swordsman('Sandro', 'Swordsman');

  expect(received).toEqual(expected);
});

test('Test Magician', () => {
  const expected = {
    name: 'Sandro',
    attack: 10,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Magician('Sandro', 'Magician');

  expect(received).toEqual(expected);
});

test('Test Daemon', () => {
  const expected = {
    name: 'Sandro',
    attack: 10,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Daemon('Sandro', 'Daemon');

  expect(received).toEqual(expected);
});

test('Test Undead', () => {
  const expected = {
    name: 'Sandro',
    attack: 25,
    defence: 25,
    type: 'Undead',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Undead('Sandro', 'Undead');

  expect(received).toEqual(expected);
});

test('Test Zombie', () => {
  const expected = {
    name: 'Sandro',
    attack: 40,
    defence: 10,
    type: 'Zombie',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Zombie('Sandro', 'Zombie');

  expect(received).toEqual(expected);
});
