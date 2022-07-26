import { inject, injectable } from 'inversify';
import { Warrior } from './interfaces';
import SYMBOLS from '../ioc/identifiers';

@injectable()
export class Battle {
    private _knight: Warrior;

    public constructor(
        @inject("Factory<Warrior>") factory: (category: string) => Warrior,
        @inject(SYMBOLS.Knight) knight: Warrior,
    ) {
        this._knight = factory('knight');
        // this._knight = knight;
        console.log('Battle created');
    }

    public run() {
        console.log('battle:', this._knight.fight());
        console.log('battle:', this._knight.sneak());
    }
}
