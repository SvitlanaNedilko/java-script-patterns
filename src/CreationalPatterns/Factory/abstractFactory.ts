class AbstractCharacterFactory {
  createCharacter() {}
  createWeapon() {}
}

class AbstractWarrior {}
class AbstractMage {}
class AbstractArcher {}

class AbstractSword {}
class AbstractStaff {}
class AbstractBow {}

class AbstractWarriorFactory extends AbstractCharacterFactory {
  createCharacter() {
    return new AbstractWarrior();
  }
  createWeapon() {
    return new AbstractSword();
  }
}

class AbstractMageFactory extends AbstractCharacterFactory {
  createCharacter() {
    return new AbstractMage();
  }
  createWeapon() {
    return new AbstractStaff();
  }
}

class AbstractArcherFactory extends AbstractCharacterFactory {
  createCharacter() {
    return new AbstractArcher();
  }
  createWeapon() {
    return new AbstractBow();
  }
}

const abstractWarriorFactory = new AbstractWarriorFactory();
const abstractWarrior = abstractWarriorFactory.createCharacter();
const abstractSword = abstractWarriorFactory.createWeapon();

const abstractMageFactory = new AbstractMageFactory();
const abstractMage = abstractMageFactory.createCharacter();
const abstractStaff = abstractMageFactory.createWeapon();

const abstractArcherFactory = new AbstractArcherFactory();
const abstractArcher = abstractArcherFactory.createCharacter();
const abstractBow = abstractArcherFactory.createWeapon();
export const abstractFactory = () => {
  console.log('-----Abstract Factory----');

  console.log(abstractWarrior, abstractSword);

  console.log(abstractMage, abstractStaff);

  console.log(abstractBow, abstractArcher);
};
