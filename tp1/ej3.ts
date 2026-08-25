class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number){
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    }

    calcularSueldo():number{
        return 0;
    }

    describe():string{
        return `${this.nombre}, (${this.antiguedad} años) -- sueldo: $${this.calcularSueldo()}`;
    }
}

class EmpleadoFijo extends Empleado {
    sueldoBase:number;

    constructor(nombre:string, antiguedad:number, sueldoBase:number){
        super(nombre, antiguedad);
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo():number{
        const bono = this.sueldoBase * 0.02 * this.antiguedad;
        return this.sueldoBase + bono;
    }

}

const nuevoEmpleado = new Empleado("Fabiana Rossi", 3)
console.log(nuevoEmpleado.describe());

const nuevoEmpleadoFijo = new EmpleadoFijo("Fiama Rossi", 6, 100000);
console.log(nuevoEmpleadoFijo.describe());