import "reflect-metadata";
import container from './ioc/container';
import SYMBOLS from './ioc/identifiers';
import { Warrior } from './types/interfaces';
import { Battle } from './types/battle';

const ninja1 = container.get<Warrior>(SYMBOLS.Ninja);
console.log(ninja1.fight());
console.log(ninja1.sneak());

const ninja2 = container.get<Warrior>(SYMBOLS.Ninja);
console.log(ninja2.fight());
console.log(ninja2.sneak());

const battle = container.get<Battle>(Battle);
battle.run();
console.log('The end');

// const knight = container.get<Warrior>(SYMBOLS.Warrior);
// console.log(knight.fight());
// console.log(knight.sneak());
