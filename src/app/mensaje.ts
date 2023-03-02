export interface Mensaje {
    titulo: string;
    description:string;
    tipo: "info" | "exito" | "aviso" | "error";
}