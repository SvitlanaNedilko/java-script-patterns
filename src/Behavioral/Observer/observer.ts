// Observer interface
interface Observer {
  update(event: string): void;
}

// Subject
class EventManager {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(event: string): void {
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}

// ConcreteObserver
class EventListener implements Observer {
  constructor(private name: string) {}

  update(event: string): void {
    console.log(`${this.name} received event: ${event}`);
  }
}

// Usage
const eventManager = new EventManager();

const listener1 = new EventListener('Listener 1');
const listener2 = new EventListener('Listener 2');

eventManager.subscribe(listener1);
eventManager.subscribe(listener2);

eventManager.notify('Event 1');
eventManager.notify('Event 2');

// Outputs:
// Listener 1 received event: Event 1
// Listener 2 received event: Event 1
// Listener 1 received event: Event 2
// Listener 2 received event: Event 2
