/**
 * Creates a new Daemon
 * @module Daemon
 * @class
 */

import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}
