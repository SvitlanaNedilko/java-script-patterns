export enum characterTypeEnum {
  WARRIOR,
  MAGE,
  ARCHER,
}

const characterTypeMap = {
  [characterTypeEnum.WARRIOR]: 'Warrior',
  [characterTypeEnum.MAGE]: 'Mage',
  [characterTypeEnum.ARCHER]: 'Archer',
};

class Warrior {
  private character: string;
  private weapon: string;
  constructor(type: characterTypeEnum) {
    this.character = characterTypeMap[type];
    this.weapon = 'Sword';
  }
}
class Mage {
  private character: string;
  private weapon: string;
  constructor(type: characterTypeEnum) {
    this.character = characterTypeMap[type];
    this.weapon = 'Staff';
  }
}
class Archer {
  private character: string;
  private weapon: string;
  constructor(type: characterTypeEnum) {
    this.character = characterTypeMap[type];
    this.weapon = 'Archer';
  }
}

class CharacterFactory {
  static list = {
    [characterTypeEnum.WARRIOR]: Warrior,
    [characterTypeEnum.MAGE]: Mage,
    [characterTypeEnum.ARCHER]: Archer,
  };
  create(name, type) {
    const player = CharacterFactory.list[type];
    const member = new player(type);
    member.define = function () {
      console.log(`user:${name} type:${this.character} weapon:${this.weapon}`);
    };
    return member;
  }
}

const factory = new CharacterFactory();

const users = [
  factory.create('Olya', characterTypeEnum.ARCHER),
  factory.create('Dima', characterTypeEnum.MAGE),
  factory.create('Yana', characterTypeEnum.WARRIOR),
];

export const factoryMethod = () => {
  console.log('-----Factory Mathod----');

  users.forEach((m) => {
    m.define();
  });
};
