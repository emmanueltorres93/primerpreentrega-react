import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../back";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      });
  }, [id]);

  if (!item) {
    // Manejar el caso cuando no se encuentra el elemento
    return (
      <div>
        <p>El producto no se ha encontrado.</p>
      </div>
    );
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
