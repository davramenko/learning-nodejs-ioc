import { injectable } from 'inversify';
import { Weapon } from './interfaces';

@injectable()
export class Sword implements Weapon {
    public constructor() {
        console.log('Sword created');
    }

    public hit() {
        return "sword:cut!";
    }
}
