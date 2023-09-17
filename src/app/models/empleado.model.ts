import { Pais } from "./pais.model";

export class Empleado {

    idEmpleado?:number;
    nombres?:string;
    fechaNacimiento?:Date;
    estado?:number;
    fechaRegistro?:Date;
    pais?:Pais;

}
export interface AddEmpleados{
    nombres:string
    fechaNacimiento:string
    pais: Pais
}
