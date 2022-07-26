import { injectable } from 'inversify';
import { ThrowableWeapon } from './interfaces';

@injectable()
export class ThrowKnife implements ThrowableWeapon {
    public constructor() {
        console.log('ThrowKnife created');
    }

    public throw() {
        return "throwKnife:hit!";
    }
}
