import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore";

const Productos = () => {
    const [productos, setProductos] = useState([]); 

    useEffect(() => {
        const obtenerProductos = async () => {
            const productosQuery = query(collection(db, "productos"));
            const productosSnapshot = await getDocs(productosQuery);
            const productosData = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosData);
        }

        obtenerProductos();
    }, []);

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        let nuevoStock = producto.stock - 1; 

        await updateDoc(productoRef, { stock: nuevoStock });

        // Actualizamos el estado solo después de la actualización exitosa en Firestore
        const productosActualizados = productos.map(p => {
            if (p.id === producto.id) {
                return { ...p, stock: nuevoStock };
            }
            return p;
        });

        setProductos(productosActualizados);
    }

    return (
        <div>
            <h2>Mis Productos</h2>
            <div className="contenedor">
                {productos.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.nombre} />
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        <p>Stock: {item.stock}</p>
                        <button onClick={() => descontarStock(item)}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos;
