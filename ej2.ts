class CuentaBancaria {
    titular: string;
    private saldo: number;
    private historial: string[];

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.historial = [];
    }

    depositar(monto : number){
        if (monto <= 0){
            throw new Error("Ingrese un monto válido.")
        } else {
            this.saldo += monto;
            this.historial.push(`¡Depósito de $${monto}`);
        }
    }

    retirar(monto : number){
        if (monto <= 0){
            throw new Error("Ingrese un monto válido.");
        } else if (monto > this.saldo){
            throw new Error("Saldo insuficiente.");
        } else {
            this.saldo -= monto;
            this.historial.push(`Retiro de $${monto}`);
        }
    }

    consultarSaldo():number{
        return this.saldo;
    }

    consultarHistorial(): string[]{
        return this.historial;
    }
}

const cuenta = new CuentaBancaria("Elin", 5000);
cuenta.depositar(2000);
//cuenta.retirar(88000);
cuenta.retirar(2000)
console.log(cuenta.consultarSaldo());
console.log(cuenta.consultarHistorial());
//cuenta.depositar(-300)