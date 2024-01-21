import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import itemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect ( () => {
        getUnProducto(2)
          .then(res => setProducto (res))
          }, [])

          return (
            <div>
                <itemDetail {...producto} />
            </div>
          )
          }

          export default ItemDetailContainer