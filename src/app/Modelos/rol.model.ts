export class Rol {

    id? :number | null;
    nombre: string | null;

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
    
}
