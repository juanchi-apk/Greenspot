
/*
-This is a hardcoded API Simulator, those are the data that we are going to bring from the backend.
Este es un simulador hardcodeado , estos datos son los que vamos a traer luego desde el backend.
*/

const PRODUCTS = [
    {
        id: 1 ,
        categoria:"fertilizantes",
        ciclo: "Vegetacion",
        name: 'Fertilizante para Vegetación Dr. Bannner 125 ml.',
        price: 800,
        image: require('../assets/products/fertilizante_vegetacion_drbanner.webp'),
        description: 'Dr Banner VEGE es un fertilizante biomineral/orgánico completo, formulado especialmente para las etapas de desarrollo vegetativo y prefloracion. Promueve el desarrollo radicular , el crecimiento de nuevos brotes, tallos más robustos y preparados para sostener racimos florales. En preflora actua como activador de floracion acortando el período de transición. Contiene extracto de Algas Ascophlym Noddossum, aporta micronutrientes , vitaminas y aminoácidos que mejoran la absorción de nutrientes y mejoran el sueldo'

    },
    {
        id: 2,
        name: 'Fertilizante Bloom de Floracion PK Dr. Bannner 125 ml.',
        price: 1000,
        image: require('../assets/products/fertilizante_bloom_drbanner.webp'),
        description: 'Dr Banner VEGE es un fertilizante biomineral, con la fórmula más explosiva y revienta cogollos del mercado, dando los mejores resultados desde hace 20 años. De uso profesional por su rápida disponibilidad de nutrientes , facil administracion y abundantes cosechas como resultado. Obtene flores más compactas ,sólidas y pesadas , bañadas de tricomas. Mayor cosecha con el mejor sabor y aroma. Es 100 % apto cultivo medicinal, no utiliza hormonas sintéticas ni quelatos.'   },
    {
        id: 3,
        name: 'Kit Completo Fertilizantes Dr Banner 125 ml.',
        price: 2400,
        image: require('../assets/products/fertilizante_kitcompleto_drbanner.webp'),
        description: 'El kit completo incluye VEGE, FLORA, GOLLO DULCE Y FLUSH. De esta manera te aseguras un ciclo completo con la mejor nutricion para tus plantas. Prepar tus plantas para soportar cosechas de gran rendimiento, aporta todos los nutrientes que necesitan para crecer sanas y fuertes, y obtener cogollos compactos y de gran tamaño'
    },
    {
        id: 4,
        name: 'Kit Hidroponia 20 lts',
        price: 4500,
        image: require('../assets/products/hidroponia_kitcompleto.webp'),
        description: 'Arranca tu cultivo hidropónico DWC. Este sistema trabaja a través de un bombeo de oxigeno, que mantiene la solucion nutritiva estable. A diferencia de otros sistemas , ante un corte de luz, la planta no sufrirà grandes daños, como puede suceder con la aspersion. El sistema está reforzado con una bomba de doble salida , para generar una mejor oxigenación. Cuenta con tapon a rosca para facilitar la adicion o sustraccion de agua  '
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
        return PRODUCTS.find((product) => (product.id == id));
}