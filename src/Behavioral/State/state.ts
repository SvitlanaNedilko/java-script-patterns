interface OrderState {
  processOrder(): void;
  shipOrder(): void;
  deliverOrder(): void;
}

// Implement Concrete States

class NewOrderState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log('Processing the new order...');
    this.order.setState(this.order.processingState);
  }

  shipOrder(): void {
    console.log('Cannot ship an order that hasn’t been processed.');
  }

  deliverOrder(): void {
    console.log('Cannot deliver an order that hasn’t been shipped.');
  }
}

class ProcessingOrderState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log('The order is already being processed.');
  }

  shipOrder(): void {
    console.log('Shipping the order...');
    this.order.setState(this.order.shippedState);
  }

  deliverOrder(): void {
    console.log('Cannot deliver an order that hasn’t been shipped.');
  }
}

class ShippedOrderState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log('Cannot process an order that has already been shipped.');
  }

  shipOrder(): void {
    console.log('The order is already shipped.');
  }

  deliverOrder(): void {
    console.log('Delivering the order...');
    this.order.setState(this.order.deliveredState);
  }
}

class DeliveredOrderState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log('Cannot process an order that has already been delivered.');
  }

  shipOrder(): void {
    console.log('Cannot ship an order that has already been delivered.');
  }

  deliverOrder(): void {
    console.log('The order has already been delivered.');
  }
}

// Implement the Context Class

class Order {
  public newState: OrderState;
  public processingState: OrderState;
  public shippedState: OrderState;
  public deliveredState: OrderState;

  private currentState: OrderState;

  constructor() {
    this.newState = new NewOrderState(this);
    this.processingState = new ProcessingOrderState(this);
    this.shippedState = new ShippedOrderState(this);
    this.deliveredState = new DeliveredOrderState(this);

    this.currentState = this.newState; // Initial state
  }

  setState(state: OrderState): void {
    this.currentState = state;
  }

  processOrder(): void {
    this.currentState.processOrder();
  }

  shipOrder(): void {
    this.currentState.shipOrder();
  }

  deliverOrder(): void {
    this.currentState.deliverOrder();
  }
}

// Use the State Pattern
const order = new Order();

order.processOrder(); // Output: Processing the new order...
order.shipOrder(); // Output: Shipping the order...
order.deliverOrder(); // Output: Delivering the order...

// Trying to process or ship a delivered order
order.processOrder(); // Output: Cannot process an order that has already been delivered.
order.shipOrder(); // Output: Cannot ship an order that has already been delivered.
order.deliverOrder(); // Output: The order has already been delivered.
