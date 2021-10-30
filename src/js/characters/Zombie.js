/**
 * Creates a new Zombie
 * @module Zombie
 * @class
 */

import Character from './Character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}
