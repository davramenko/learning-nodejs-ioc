import { Container, interfaces } from 'inversify';
import SYMBOLS from './identifiers';
import { Ninja } from '../types/ninja';
import { Katana } from '../types/katana';
import { Shuriken } from '../types/shuriken';
import { ThrowableWeapon, Warrior, Weapon } from '../types/interfaces';
import { Sword } from '../types/sword';
import { ThrowKnife } from '../types/throwKnife';
import { Knight } from '../types/knight';
import { Battle } from '../types/battle';

var container = new Container();
container.bind<Warrior>(SYMBOLS.Ninja).to(Ninja).inSingletonScope();
container.bind<Weapon>(SYMBOLS.Katana).to(Katana).inSingletonScope();
container.bind<ThrowableWeapon>(SYMBOLS.Shuriken).to(Shuriken).inSingletonScope();

container.bind<Warrior>(SYMBOLS.Knight).to(Knight);
container.bind<Weapon>(SYMBOLS.Sword).to(Sword);
container.bind<ThrowableWeapon>(SYMBOLS.ThrowKnife).to(ThrowKnife);

container.bind<interfaces.Factory<Katana>>("Factory<Katana>").toFactory<Katana>((context: interfaces.Context) => {
    return () => {
        return context.container.get<Katana>(SYMBOLS.Katana);
    };
});

container.bind<Warrior>(SYMBOLS.Warrior).to(Ninja).whenTargetNamed("ninja");
container.bind<Warrior>(SYMBOLS.Warrior).to(Knight).whenTargetNamed("knight");
container.bind<interfaces.Factory<Warrior>>("Factory<Warrior>").toFactory<Warrior,[string]>((context: interfaces.Context) => {
    return (named: string) => {
        return context.container.getNamed<Warrior>(SYMBOLS.Warrior, named);
    };
});

container.bind<Battle>(Battle).toSelf();

export default container;
