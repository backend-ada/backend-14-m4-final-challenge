import facturasDB from '../database/facturas.json';
import { getPrecioCompra } from './api';
import { randomUUID } from 'node:crypto';
import { writeFile } from 'jsonfile';
import { Factura } from './types';

const FACTURAS_DB_PATH = './src/database/facturas.json';

function calcularTotal(dataDetalle: Array<number>): number {
    let sumatoria = 0;

    for (let i = 0; i < dataDetalle.length; i += 2) {
        const cantidad = dataDetalle[i];
        const precio = dataDetalle[i + 1];
        const subtotal = cantidad * precio;
        sumatoria += subtotal;
    }

    return sumatoria;
}

async function convertirADolar(total: number): Promise<number> {
    try {
        const precioDolar = await getPrecioCompra();
        const totalEnDolares = total / precioDolar;
        return parseFloat(totalEnDolares.toFixed(2));

    } catch (error) {
        throw new Error('Error al obtener el precio del dólar.');
    }
}

async function createFactura(data: any): Promise<Factura> {
    const { tipo, dato, detalle } = data;

    const totalArg = calcularTotal(detalle);
    const totalDolares = await convertirADolar(calcularTotal(detalle));
    const nuevaFactura: Factura = {
        nombreResto: "Jardin del Sushi",
        idFactura: randomUUID(),
        tipo,
        detalle,
        totalArg,
        totalDolares,
    };

    if (tipo === "mesa") {
        nuevaFactura.mesa = dato;
    } else {
        nuevaFactura.direccion = dato;
    }
    return nuevaFactura;
}

abstract class FacturaModel {
    static async createFactura(facturaData: any): Promise<any> {
        try {
            const database = facturasDB as Factura[];
            const newFactura = await createFactura(facturaData);
            database.push(newFactura);
            await writeFile(FACTURAS_DB_PATH, database);
            return newFactura;
        } catch (error) {
            throw new Error('Error al crear la factura.');
        }
    }
   
    static getById(id: any){
        const database = facturasDB as Factura[];
        return database.find((factura) => factura.idFactura === id);
    }
}

export { FacturaModel }