interface Notifier {
    send(to: string, message: string): void;
}

class EmailSender implements Notifier {
    send(to: string, message: string): void {
        console.log(`Correo para ${to}: ${message}`);
    }
}

class SmsSender implements Notifier {
    send(to: string, message: string): void {
        console.log(`SMS para ${to}: ${message}`);
    }
}

class OrderService {
    private notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    createOrder(customerContact: string): void {
        console.log("Pedido creado");
        this.notifier.send(customerContact, "Tu pedido fue creado");
    }
}

const emailOrderService = new OrderService(new EmailSender());
emailOrderService.createOrder("elin@example.com");

const smsOrderService = new OrderService(new SmsSender());
smsOrderService.createOrder("+54 11 5555-5555");
