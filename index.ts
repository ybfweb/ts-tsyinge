import { of, map } from 'rxjs';
import 'reflect-metadata';
import { injectable, container } from 'tsyringe';
import { createStore, select, withProps } from '@ngneat/elf';

import { singleton } from 'tsyringe';
const log = console.log;

@singleton()
class User {
  print() {
    log('User print');
  }
}

@singleton()
class Foo {
  // user: User;
  constructor(public user: User) {}
  print() {
    log('Foo print');
  }
}

const instance = container.resolve(Foo);

console.log(instance.user.print());

@singleton()
export class TsyringeLogger {
  constructor() {
    console.log('TsyringeLogger');
  }
}

@singleton()
export class TsyringeFileSystem {
  constructor() {
    console.log('TsyringeFileSystem');
  }
}

@singleton()
export class Configurator {
  constructor(
    protected logger: TsyringeLogger // protected fileSystem: TsyringeFileSystem,
  ) {
    console.log('Configurator');
  }
}

const instance2 = container.resolve(Configurator);

console.log(instance2);
