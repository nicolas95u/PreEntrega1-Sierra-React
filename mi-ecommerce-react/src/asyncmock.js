const productos = [
    { id: "1", nombre: "Pasta Termica", precio: 500, img: "../img/BFXARCMX.jpeg", idCat: "3" },
    { id: "2", nombre: "Cables Azules", precio: 600, img: "../img/bfxccmbb.jpeg", idCat: "2" },
    { id: "3", nombre: "Cables Rojos", precio: 700, img: "../img/bfxccmbr.jpeg", idCat: "2" },
    { id: "4", nombre: "Disco", precio: 800, img: "../img/BFXWM2.jpeg", idCat: "1" },
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
