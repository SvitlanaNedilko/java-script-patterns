interface User {
  name: string;
  age: number;
  send: (message: string, to?: User) => void;
  receive: (message: string, from: User) => void;
}

const user: User = {
  name: '',
  age: 0,
  send: (message: string, to?: User) => {
    console.log(`Sending message: "${message}" to ${to ? to.name : 'unknown recipient'}`);
  },
  receive: () => {
    console.log('Receiving...');
  },
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

const user2: User = {
  name: 'Alice',
  age: 30,
  send: (message: string, to?: User) => {
    console.log(`Sending message: "${message}" to ${to ? to.name : 'unknown recipient'}`);
  },
  receive: () => {
    console.log('Receiving...');
  },
};

userProxy.send('Hello', user2);
