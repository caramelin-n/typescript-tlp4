abstract class Equipo {
    protected nombre: string;
    protected ram: string;
    protected procesador: string;

    abstract readonly tipo: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    abstract detalles(): string;
}

class Notebook extends Equipo {
    readonly tipo = "Notebook";

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop extends Equipo {
    readonly tipo = "Desktop";

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor extends Equipo {
    readonly tipo = "Servidor";

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    crearEquipo(
        tipo: string,
        nombre: string,
        ram: string,
        procesador: string
    ): Equipo {
        switch (tipo.toLowerCase()) {
            case "notebook":
                return new Notebook(nombre, ram, procesador);
            case "desktop":
                return new Desktop(nombre, ram, procesador);
            case "servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error(`Tipo de equipo no válido: ${tipo}`);
        }
    }
}

const factory = new EquipoFactory();

const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "32GB", "Ryzen 7");
const servidor = factory.crearEquipo("Servidor", "PowerEdge R740", "64GB", "Xeon Silver");

console.log(notebook.detalles());
console.log(desktop.detalles());
console.log(servidor.detalles());

try {
    factory.crearEquipo("Impresora", "HP LaserJet", "256MB", "ARM");
} catch (error) {
    console.error((error as Error).message);
}