interface Factura {
    nombreResto: string;
    idFactura: `${string}-${string}-${string}-${string}-${string}`;
    tipo: "mesa" | "delivery";
    mesa?: number; // Agregar mesa en caso de que el tipo sea "mesa"
    direccion?: string; // Agregar dirección en caso de que el tipo sea "delivery"
    detalle: [number];
    totalArg: number; 
    totalDolares: number; 
}

interface ApiDolar {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    fechaActualizacion: string;
}

export { Factura, ApiDolar}