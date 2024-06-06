export class Orientador {
    id?: number;
    nombre: string | null;
    apellido: string | null;
    celular: string | null;
    email: string | null;
    password: string | null;
    estado: string | null;

    constructor(id: number, nombre: string, apellido: string, celular: string, email: string, password: string, estado: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.celular = celular;
        this.email = email;
        this.password = password;
        this.estado = estado;
    }
}

