// Importar las dependencias
const express = require('express');
const bodyParser = require('body-parser');

// Inicializar la aplicación de Express
const app = express();

// Middleware para analizar cuerpos de solicitudes en formato JSON
app.use(bodyParser.json());

// Simulación de un listado de productos
const products = [
    { id: 1, name: 'Televisor LED 4K', category: 'Electrónica', price: 400 },
    { id: 2, name: 'Smartphone de última generación', category: 'Electrónica', price: 800 },
    { id: 3, name: 'Portátil para gaming', category: 'Informática', price: 1200 },
    { id: 4, name: 'Tablet con pantalla táctil', category: 'Electrónica', price: 300 },
    { id: 5, name: 'Cámara fotográfica digital', category: 'Electrónica', price: 600 },
    { id: 6, name: 'Auriculares inalámbricos', category: 'Accesorios', price: 150 },
    { id: 7, name: 'Reloj inteligente (Smartwatch)', category: 'Accesorios', price: 250 },
    { id: 8, name: 'Consola de videojuegos', category: 'Videojuegos', price: 500 },
    { id: 9, name: 'Barra de sonido', category: 'Electrónica', price: 200 },
    { id: 10, name: 'Altavoces Bluetooth', category: 'Accesorios', price: 100 },
    { id: 11, name: 'Lavadora automática', category: 'Electrodomésticos', price: 700 },
    { id: 12, name: 'Refrigerador con congelador', category: 'Electrodomésticos', price: 1000 },
    { id: 13, name: 'Microondas con grill', category: 'Electrodomésticos', price: 150 },
    { id: 14, name: 'Cafetera de cápsulas', category: 'Electrodomésticos', price: 120 },
    { id: 15, name: 'Horno eléctrico', category: 'Electrodomésticos', price: 250 },
    { id: 16, name: 'Aspiradora sin bolsa', category: 'Electrodomésticos', price: 180 },
    { id: 17, name: 'Plancha de vapor', category: 'Electrodomésticos', price: 50 },
    { id: 18, name: 'Ventilador de torre', category: 'Electrodomésticos', price: 80 },
    { id: 19, name: 'Zapatos deportivos', category: 'Moda', price: 100 },
    { id: 20, name: 'Zapatillas de running', category: 'Moda', price: 120 },
    { id: 21, name: 'Camiseta de algodón', category: 'Moda', price: 25 },
    { id: 22, name: 'Pantalón vaquero (Jeans)', category: 'Moda', price: 60 },
    { id: 23, name: 'Sudadera con capucha', category: 'Moda', price: 45 },
    { id: 24, name: 'Chaqueta impermeable', category: 'Moda', price: 85 },
    { id: 25, name: 'Mochila escolar', category: 'Accesorios', price: 70 },
    { id: 26, name: 'Bolso de mano', category: 'Accesorios', price: 90 },
    { id: 27, name: 'Perfume de marca', category: 'Belleza', price: 60 },
    { id: 28, name: 'Gafas de sol', category: 'Accesorios', price: 110 },
    { id: 29, name: 'Collar de plata', category: 'Joyería', price: 150 },
    { id: 30, name: 'Ropa interior cómoda', category: 'Moda', price: 20 }
];

// Ruta POST que retorna productos filtrados
app.post('/api/products', (req, res) => {
    const filters = req.body; // Los filtros se reciben en el cuerpo de la solicitud

    // Si no hay filtros, devolvemos todos los productos
    if (Object.keys(filters).length === 0) {
        return res.json(products);
    }

    // Filtrar los productos según los criterios recibidos
    let filteredProducts = products;

    // Filtrar por categoría si se proporciona
    if (filters.category) {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    // Filtrar por precio mínimo y máximo si se proporcionan
    if (filters.minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= filters.maxPrice);
    }

    // Devolver la lista de productos filtrados
    res.json(filteredProducts);
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
