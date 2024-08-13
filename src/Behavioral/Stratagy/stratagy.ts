interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Cryptocurrency.`);
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

const amount = 100;

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const cryptoPayment = new CryptoPayment();

const paymentProcessor = new PaymentProcessor(creditCardPayment);
paymentProcessor.processPayment(amount); // Output: Paid 100 using Credit Card.

paymentProcessor.setStrategy(payPalPayment);
paymentProcessor.processPayment(amount); // Output: Paid 100 using PayPal.

paymentProcessor.setStrategy(cryptoPayment);
paymentProcessor.processPayment(amount);
