// ex1
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: '',
  age: 0,
};

const userProxy = new Proxy<User>(user, {
  set(target, property, value) {
    if (property === 'age' && (typeof value !== 'number' || value <= 0)) {
      throw new Error('Age must be a positive number');
    }
    (target as any)[property] = value;
    return true;
  },
});

// Ex2
interface Config {
  host: string;
  port?: string;
}

const config: Config = {
  host: 'localhost',
};

const defaultConfigProxy = new Proxy<Config>(config, {
  get(target, property) {
    return property in target ? target[property as keyof Config] : 'default';
  },
});

console.log(defaultConfigProxy.host); // Outputs: localhost
console.log(defaultConfigProxy.port); // Outputs: default

// ex3

const user1 = {
  name: '',
  age: 0,
};

const userProxy1 = new Proxy(user1, {
  set(target, property, value) {
    if (property === 'age' && (typeof value !== 'number' || value <= 0)) {
      throw new Error('Age must be a positive number');
    }
    target[property] = value;
    return true;
  },
});

userProxy1.age = 25;
userProxy1.age = -5;
