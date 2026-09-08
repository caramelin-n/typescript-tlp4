interface Equipo {
    detalles():string
}

class Notebook implements Equipo {
    tipo: string = "notebook"
    nombre: string
    ram: string
    procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `nombre: ${this.nombre}, ram: ${this.ram}, procesador: ${this.procesador}`
    }
}

class Desktop implements Equipo{
    tipo: string = "desktop"
    nombre: string
    ram: string
    procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `nombre: ${this.nombre}, ram: ${this.ram}, procesador: ${this.procesador}`
    }
}

class Servidor implements Equipo {
    tipo: string = "servidor"
    nombre: string
    ram: string
    procesador: string

    constructor(nombre: string, ram: string, procesador: string){
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `nombre: ${this.nombre}, ram: ${this.ram}, procesador: ${this.procesador}`
    }
}

class EquipoFactory{
    crearEquipo(tipo: string, nombre:string, ram: string, procesador: string): Equipo {
        switch(tipo.toLowerCase()){
            case "notebook":
                return new Notebook(nombre, ram, procesador);
            case "desktop":
                return new Desktop(nombre, ram, procesador);
            case "servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error(`Tipo de equipo no válido.`)
        }

    }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7