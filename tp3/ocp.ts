interface PaymentMethod {
    pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Pago con tarjeta: $${amount}`);
    }
}

class CashPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Pago en efectivo: $${amount}`);
    }
}

class TransferPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Transferencia bancaria: $${amount}`);
    }
}

class PaymentProcessor {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount: number): void {
        this.paymentMethod.pay(amount);
    }
}

const cardProcessor = new PaymentProcessor(new CardPayment());
cardProcessor.processPayment(15000);

const cashProcessor = new PaymentProcessor(new CashPayment());
cashProcessor.processPayment(5000);

const transferProcessor = new PaymentProcessor(new TransferPayment());
transferProcessor.processPayment(20000);
