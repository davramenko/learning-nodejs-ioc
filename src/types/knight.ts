import { inject, injectable } from 'inversify';
import SYMBOLS from '../ioc/identifiers';
import { ThrowableWeapon, Warrior, Weapon } from './interfaces';

@injectable()
export class Knight implements Warrior {

    private _sword: Weapon;
    private _throwKnife: ThrowableWeapon;

    public constructor(
        @inject(SYMBOLS.Sword) sword: Weapon,
        @inject(SYMBOLS.ThrowKnife) throwKnife: ThrowableWeapon
    ) {
        this._sword = sword;
        this._throwKnife = throwKnife;
        console.log('Knight created');
    }

    public fight() { return this._sword.hit(); };
    public sneak() { return this._throwKnife.throw(); };

}
