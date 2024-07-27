class OrderService {
  processOrder(orderId: number) {
    console.log(`Processing order ${orderId}`);
  }
}

class PaymentService {
  processPayment(orderId: number, amount: number) {
    console.log(`Processing payment of ${amount} for order ${orderId}`);
  }
}

class ShippingService {
  shipOrder(orderId: number) {
    console.log(`Shipping order ${orderId}`);
  }
}

class ECommerceFacade {
  private orderService: OrderService;
  private paymentService: PaymentService;
  private shippingService: ShippingService;

  constructor() {
    this.orderService = new OrderService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }

  completeOrder(orderId: number, amount: number) {
    this.orderService.processOrder(orderId);
    this.paymentService.processPayment(orderId, amount);
    this.shippingService.shipOrder(orderId);
  }
}

const ecommerce = new ECommerceFacade();
ecommerce.completeOrder(123, 250);
