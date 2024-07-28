interface User {
  age: number;
  name: string;
  send(message: string, to?: User): void;
  receive(message: string, from: User): void;
}
interface ChatRoom {
  showMessage(message: string, from: User, to?: User): void;
}

class ChatUser implements User {
  constructor(
    public age: number,
    public name: string,
    private chatRoom: ChatRoom
  ) {}

  send(message: string, to?: User): void {
    this.chatRoom.showMessage(message, this, to);
  }

  receive(message: string, from: User): void {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class ChatRoomMediator implements ChatRoom {
  showMessage(message: string, from: User, to?: User): void {
    if (to) {
      to.receive(message, from);
    } else {
      console.log(`${from.name}: ${message}`);
    }
  }
}

(() => {
  const chatRoom = new ChatRoomMediator();

  const user1 = new ChatUser(25, 'Alice', chatRoom);
  const user2 = new ChatUser(30, 'Bob', chatRoom);
  const user3 = new ChatUser(28, 'Charlie', chatRoom);

  user1.send('Hello everyone!');
  user2.send('Hi Alice!', user1);
  user3.send('Hey Bob!', user2);
})();
