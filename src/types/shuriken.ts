import { injectable } from 'inversify';
import { ThrowableWeapon } from './interfaces';

@injectable()
export class Shuriken implements ThrowableWeapon {
    public constructor() {
        console.log('Shuriken created');
    }

    public throw() {
        return "shuriken:hit!";
    }
}
