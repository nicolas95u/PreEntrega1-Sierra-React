const productos = [
    {id:"1", nombre: "Yerba", precio: 500, img:}
    {id:"2", nombre: "Fideos", precio: 600, img:}
    {id:"3", nombre: "Arroz", precio: 700, img:}
    {id:"4", nombre: "Aceite", precio: 800, img:}
]

export const getProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout ( ()=> {
        resolve(productos);
    }, 100)
})
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {}
    })
}