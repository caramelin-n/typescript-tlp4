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

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    valorHora: number;

    constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number){
        super(nombre, antiguedad);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora;
    }
}

class EmpleadoPorComision extends Empleado {
    ventasDelMes: number;
    porcentajeComision: number;

    constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number){
        super(nombre, antiguedad);
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    }

    calcularSueldo(): number {
        return this.ventasDelMes * (this.porcentajeComision/100);
    }
}

function calcularNomina(empleados: Empleado[]): number{
    let totalNomina = 0;
    for(const emp of empleados){
        totalNomina =+ emp.calcularSueldo();
    }
    return totalNomina;
}

const empleados: Empleado[] = [
    new EmpleadoFijo("Fabiana rossi", 3, 100000),
    new EmpleadoPorHoras("Fiama Rossi", 1, 160, 2000),
    new EmpleadoPorComision("Fabricio Rossi", 2, 500000, 10)
];

for (const emp of empleados){
    console.log(emp.describe());
}

const total = calcularNomina(empleados);
console.log(`Total nomina: $${total}`);