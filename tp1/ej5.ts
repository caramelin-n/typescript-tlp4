class Persona {
    private readonly dni: string;
    nombre: string;
    private _edad: number;
    private _email: string;

    constructor(dni: string, nombre: string, edad: number, email: string){
        this.dni = dni;
        this.nombre = nombre;
        this._edad = edad;
        this._email = email;
    }

    get edad(): number{
        return this._edad;
    }

    set edad(valor: number){
        if(valor < 0 || valor > 120){
            throw new Error("La edad no puede ser negativa o mayor a 120.")
        } else {
        this._edad = valor;
        }
    }

    get email(): string{
        return this._email;
    }

    set email(valor: string){
        if(valor.includes("@")){
            this._email = valor;
        } else {
            throw new Error("El email es inválido.");
        }
    }

    get esMayorDeEdad(): boolean{
        if(this.edad >= 18){
            return true;
        } else {
            return false;
        }
    }

    get datosPublicos(): string{
        return `Persona ${this.nombre}, es mayor de edad: ${this.esMayorDeEdad}`
    }
}

const persona1 = new Persona("34986543", "Fátima Rossi", 30, "fatimarossi@gmail.com");

console.log(persona1.datosPublicos);
console.log("mayor de edad:", persona1.esMayorDeEdad);
console.log("Email actual:", persona1.email);

persona1.edad = 21;
console.log("Nueva edad:", persona1.edad);

try {
  persona1.edad = 150;
} catch (error: any) {
  console.log(error.message);
}

try {
  persona1.email = "correo_sin_arroba.com";
} catch (error: any) {
  console.log(error.message);
}