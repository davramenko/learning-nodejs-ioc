import { injectable } from 'inversify';
import { Weapon } from './interfaces';

@injectable()
export class Katana implements Weapon {
    public constructor() {
        console.log('Katana created');
    }

    public hit() {
        return "katana:cut!";
    }
}
