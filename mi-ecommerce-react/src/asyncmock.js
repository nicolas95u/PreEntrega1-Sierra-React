const productos = [
    { id: "1", nombre: "Yerba", precio: 500, img: "../img/BFXARCMX.jpeg", idCat: "2" },
    { id: "2", nombre: "Fideos", precio: 600, img: "../img/bfxccmbb.jpeg", idCat: "2" },
    { id: "3", nombre: "Arroz", precio: 700, img: "../img/bfxccmbr.jpeg", idCat: "3" },
    { id: "4", nombre: "Aceite", precio: 800, img: "../img/BFXWM2.jpeg", idCat: "3" },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100);
    });
};

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id === id);
            resolve(producto);
        }, 100);
    });
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter((prod) => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100);
    });
};
