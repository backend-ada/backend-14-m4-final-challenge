const API_BASE_URL = new URL("https://dolarapi.com/v1/dolares/blue");

async function fetchData(url: URL) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

/* fetchData(API_BASE_URL)
    .then((data) => {

        console.log('Datos obtenidos:', data);
    })
    .catch((error) => {

        console.error('Error al obtener los datos:', error);
    }); */

export async function getPrecioCompra(): Promise<number> {
    const data = await fetchData(API_BASE_URL);
    return data.compra;
}

