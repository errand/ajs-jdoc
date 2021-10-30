/**
 * Creates a new Undead
 * @module Undead
 * @class
 */

import Character from './Character';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}
