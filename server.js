
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Middleware para analizar cuerpos de solicitudes en formato JSON
app.use(bodyParser.json());

// Simulación de un listado de productos
const products = [
    { id: 1, nombre: 'Televisor LED 4K', categoria: 'Electrónica', precio: 400, activo: true },
    { id: 2, nombre: 'Smartphone de última generación', categoria: 'Electrónica', precio: 800, activo: true },
    { id: 3, nombre: 'Portátil para gaming', categoria: 'Informática', precio: 1200, activo: true },
    { id: 4, nombre: 'Tablet con pantalla táctil', categoria: 'Electrónica', precio: 300, activo: false },
    { id: 5, nombre: 'Cámara fotográfica digital', categoria: 'Electrónica', precio: 600, activo: false },
    { id: 6, nombre: 'Auriculares inalámbricos', categoria: 'Accesorios', precio: 150, activo: false },
    { id: 7, nombre: 'Reloj inteligente (Smartwatch)', categoria: 'Accesorios', precio: 250, activo: false },
    { id: 8, nombre: 'Consola de videojuegos', categoria: 'Videojuegos', precio: 500, activo: false },
    { id: 9, nombre: 'Barra de sonido', categoria: 'Electrónica', precio: 200, activo: true },
    { id: 10, nombre: 'Altavoces Bluetooth', categoria: 'Accesorios', precio: 100, activo: false },
    { id: 11, nombre: 'Lavadora automática', categoria: 'Electrodomésticos', precio: 700, activo: false },
    { id: 12, nombre: 'Refrigerador con congelador', categoria: 'Electrodomésticos', precio: 1000, activo: true },
    { id: 13, nombre: 'Microondas con grill', categoria: 'Electrodomésticos', precio: 150, activo: true },
    { id: 14, nombre: 'Cafetera de cápsulas', categoria: 'Electrodomésticos', precio: 120, activo: true },
    { id: 15, nombre: 'Horno eléctrico', categoria: 'Electrodomésticos', precio: 250, activo: true },
    { id: 16, nombre: 'Aspiradora sin bolsa', categoria: 'Electrodomésticos', precio: 180, activo: true },
    { id: 17, nombre: 'Plancha de vapor', categoria: 'Electrodomésticos', precio: 50, activo: true },
    { id: 18, nombre: 'Ventilador de torre', categoria: 'Electrodomésticos', precio: 80, activo: true },
    { id: 19, nombre: 'Zapatos deportivos', categoria: 'Moda', precio: 100, activo: true },
    { id: 20, nombre: 'Zapatillas de running', categoria: 'Moda', precio: 120, activo: true },
    { id: 21, nombre: 'Camiseta de algodón', categoria: 'Moda', precio: 25, activo: true },
    { id: 22, nombre: 'Pantalón vaquero (Jeans)', categoria: 'Moda', precio: 60, activo: true },
    { id: 23, nombre: 'Sudadera con capucha', categoria: 'Moda', precio: 45, activo: false },
    { id: 24, nombre: 'Chaqueta impermeable', categoria: 'Moda', precio: 85, activo: false },
    { id: 25, nombre: 'Mochila escolar', categoria: 'Accesorios', precio: 70, activo: false },
    { id: 26, nombre: 'Bolso de mano', categoria: 'Accesorios', precio: 90, activo: true },
    { id: 27, nombre: 'Perfume de marca', categoria: 'Belleza', precio: 60, activo: true },
    { id: 28, nombre: 'Gafas de sol', categoria: 'Accesorios', precio: 110, activo: true },
    { id: 29, nombre: 'Collar de plata', categoria: 'Joyería', precio: 150, activo: true },
    { id: 30, nombre: 'Ropa interior cómoda', categoria: 'Moda', precio: 20, activo: true }
];

// Ruta POST que retorna productos filtrados
app.post('/api/products', (req, res) => {
    const filters = req.body; 

    // Si no hay filtros, devolvemos todos los productos
    if (Object.keys(filters).length === 0) {
        return res.json(products);
    }

    // Filtrar los productos según los criterios recibidos
    let filteredProducts = products;

    // Filtrar por categoría si se proporciona
    if (filters.categoria) {
        filteredProducts = filteredProducts.filter(product => product.categoria === filters.categoria);
    }

    // Filtrar por precio mínimo y máximo si se proporcionan
    if (filters.minprecio) {
        filteredProducts = filteredProducts.filter(product => product.precio >= filters.minprecio);
    }

    if (filters.maxprecio) {
        filteredProducts = filteredProducts.filter(product => product.precio <= filters.maxprecio);
    }

    // Filtrar por "activo" si se proporciona
    if (filters.activo !== undefined) {
        filteredProducts = filteredProducts.filter(product => product.activo === filters.activo);
    }

    // Devolver la lista de productos filtrados
    res.json(filteredProducts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
