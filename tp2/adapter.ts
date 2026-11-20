interface Equipo {
    nombre: string;
    tipo: string;
    estado: string;
}

interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): Equipo[];
}

class InventarioViejo {
    private items: Equipo[] = [];

    agregarItem(equipo: Equipo): void {
        this.items.push(equipo);
    }

    listarItems(): Equipo[] {
        return this.items;
    }
}

class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem({ nombre, tipo, estado });
    }

    listarEquipos(): Equipo[] {
        return this.inventarioViejo.listarItems();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());