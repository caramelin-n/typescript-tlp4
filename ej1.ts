class Producto{
    nombre: string
    precio: number
    categoria: string
    stock: number

    constructor(nombre: string, precio: number, categoria: string, stock: number){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    
    }

    describe(): string {
        return `${this.nombre}, ${this.categoria}, ${this.precio}, - ${this.stock} unidades.`
    }

    hayStock(cantidad : number): boolean {
        if((this.stock - cantidad) < 0){
            return false;
        } else {
            return true;
        }
    }
    
    venderUnidades(cantidad:number) {
        if(this.hayStock(cantidad) === true){
            this.stock-= cantidad;
        } else {
            return console.log("Stock insuficiente.")
            //aplico un mensaje para que sea mas amigable al usuario.
        }
    }

    aplicarDescuento(porcentaje: number): number {
        const descuento = (this.precio * porcentaje) / 100;
        return this.precio - descuento;
    
    }
}

const teclado = new Producto("Teclado Gamer", 10000, "electrónica", 5);

console.log(teclado.describe()); 

// Probar método hayStock()
console.log("Hay stock para 3 unidades?:", teclado.hayStock(3));
console.log("Hay stock para 10 unidades?:", teclado.hayStock(10));

const precioConDescuento = teclado.aplicarDescuento(10);
console.log(`Precio con 10% OFF: $${precioConDescuento}`);

teclado.venderUnidades(2);
console.log(teclado.describe());

teclado.venderUnidades(5);