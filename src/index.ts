import { FacturaController } from './controller/factura';
import minimist from 'minimist';

function requestData(params: any) {
    return FacturaController.createFactura(params);
}

function procesaRespuesta(data: any) {
    if (data.direccion) {
        return `Factura creada con éxito, ID: ${data.idFactura}\nTipo de pedido: ${data.tipo}\nDirección de entrega: ${data.direccion}\nTotal en Pesos: $${data.totalArg}\nTotal en Dólares: ${data.totalDolares} USD\n`
    }
    return `Factura creada con éxito, ID: ${data.idFactura}\nTipo de pedido: ${data.tipo}\nMesa N°: ${data.mesa}\nTotal en Pesos: $${data.totalArg}\nTotal en Dólares: ${data.totalDolares} USD\n`
}

function processParams(params: any) {
    const processedParams = minimist(params);
    const detalle = processedParams._;

    if (detalle.length === 0) return 'Factura sin items cargados';
    if (detalle.length % 2 != 0) return 'Error en detalle de items';

    if (processedParams.mesa) {
        return {
            tipo: 'mesa',
            dato: processedParams.mesa,
            detalle,
        }
    }

    if (processedParams.delivery) {
        return {
            tipo: 'delivery',
            dato: processedParams.delivery,
            detalle,
        }
    }

    return 'Error al cargar tipo de factura';
}

function main() {
    let idFacturaCapturado
    const params = process.argv.slice(2);
    const processedParams = processParams(params);
    const result = requestData(processedParams);
    result?.then((data) => {
        console.log(procesaRespuesta(data));
    });

};

main();