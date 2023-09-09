import { FacturaModel } from "../model/factura";

export abstract class FacturaController {

    static async createFactura(facturaData: any) {
        const newFactura = await FacturaModel.createFactura(facturaData);
        return newFactura;
    }

    static  getById(id: any) {
        const factura =  FacturaModel.getById(id)
        return factura
    }
}
