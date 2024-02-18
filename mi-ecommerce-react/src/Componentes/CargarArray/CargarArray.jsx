import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarArray = () => {

    useEffect(() => {
        const cargarData = async () => {
            try {
                const productitos = [
                  { id: "1", nombre: "Pasta Termica", precio: 500, img: "../img/BFXARCMX.jpeg", idCat: "3" },
    { id: "2", nombre: "Cables Azules", precio: 600, img: "../img/bfxccmbb.jpeg", idCat: "2" },
    { id: "3", nombre: "Cables Rojos", precio: 700, img: "../img/bfxccmbr.jpeg", idCat: "2" },
    { id: "4", nombre: "Disco", precio: 800, img: "../img/BFXWM2.jpeg", idCat: "1" },
                ]

                const productosCollection = collection(db, "productitos");

                productitos.forEach(async (producto) => {
                    const productoDoc = doc(productosCollection, producto.id.toString());
                    await setDoc(productoDoc, producto);
                })
            } catch (error) {
                console.log(error => console.log("nos vamos a re morir ahh", error))
            }
        }

        cargarData();

    }, [])


    return (
        <div>CargarArray</div>
    )
}

export default CargarArray