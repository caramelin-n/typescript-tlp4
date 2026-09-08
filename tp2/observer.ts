interface Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void;
}

class Equipo{
    private observadores: Observador[] = [];

    constructor(
        nombre: string,
        tipo: string,
        estado: string,
    ) {}
}