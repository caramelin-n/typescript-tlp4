interface Equipo {
    nombre: string
    tipo: string
    estado: "disponible" | "en reparación"
}
class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo[] = []
    private constructor() {
        this.equipos = [];
    }

    public static obtenerInstancia(): Inventario {
        if(!Inventario.instancia){
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }
    public agregarEquipo(equipo: [nombre: string, tipo: string, estado: "disponible" | "en reparación"]): void {
        const [nombre, tipo, estado] = equipo;
        this.equipos.push({ nombre, tipo, estado });
    }

    public listarEquipos(): Equipo[] {
        return this.equipos;
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo(["Notebook HP", "Portátil", "disponible"]);
console.log(inventario.listarEquipos());