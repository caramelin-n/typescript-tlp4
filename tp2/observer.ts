interface Observador  {
    notificar(nombreEquipo: string, nuevoEstado: string): void
}

class Soporte implements Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void {
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`)
    }
}

class Equipo {
    private nombre: string;
    private tipo: string;
    private estado: string;
    private observadores: Observador[] = [];

    constructor(nombre: string, tipo: string, estado: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado= estado;
    }

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    quitarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(
            (observadorActual) => observadorActual !== observador
        );
    }

    cambiarEstado(nuevoEstado: string): void {
        if (this.estado === nuevoEstado) {
            return;
        }

        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.notificar(this.nombre, this.estado);
        }
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");