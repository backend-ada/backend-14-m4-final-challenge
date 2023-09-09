<h1 align="center"> Desafío Final - TypeScript </h1>
<h2 align="center"> Instrucciones de Uso de la Aplicación de Facturación </h2>

Esta aplicación te permite calcular el total de una factura. Puedes especificar si el tipo de pedido es para una mesa o para un delivery y proporcionar los detalles de los artículos, y la aplicación calculará el total en pesos y en dólares.
La aplicacion se conecta con una API que actualiza el precio del dolar blue, teniendo en cuenta el precio de compra del mismo, para beneficiar al Restó.

<h3>Uso</h3>
<h4>Para una Mesa:</h4>
Para calcular el total de una mesa, utiliza el siguiente comando:

npm run dev -- --mesa=[numero de mesa] [cantidad1] [precio1] [cantidad2] [precio2] ...

Ejemplo: npm run dev -- --mesa=31 1 3600 2 4600 1 2560

<h4>Para una Delivery:</h4>
Para calcular el total de un delivery, utiliza el siguiente comando, teniendo en cuenta que la dirección de entrega va entre comillas:

npm run dev -- --delivery=[direccion de entrega] [cantidad1] [precio1] [cantidad2] [precio2] ...

Ejemplo: npm run dev -- --delivery='San Martin 282' 1 3600 2 4600 1 2560

La aplicación calculará automáticamente el total en pesos y en dólares y mostrará los resultados en la consola.

<h3>Ejemplo de Resultado</h3>

Factura creada con éxito, ID: 2f4e8491-c862-4930-9d71-4decd403943e
Tipo de pedido: delivery
Dirección de entrega: San Martin 282
Total en Pesos: $15360.00
Total en Dólares: 21.79 USD
