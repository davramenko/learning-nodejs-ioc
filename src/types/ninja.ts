import { inject, injectable } from 'inversify';
import SYMBOLS from '../ioc/identifiers';
import { ThrowableWeapon, Warrior, Weapon } from './interfaces';
import { Katana } from './katana';

@injectable()
export class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        // @inject(SYMBOLS.Katana) katana: Weapon,
        @inject("Factory<Katana>") katanaFactory: () => Katana,
        @inject(SYMBOLS.Shuriken) shuriken: ThrowableWeapon
    ) {
        this._katana = katanaFactory();
        this._shuriken = shuriken;
        console.log('Ninja created');
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}
