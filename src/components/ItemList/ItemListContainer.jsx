import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../back";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((response) => {
        setItems(response);
      })
      .catch(() => {
        console.error("Algo salió mal");
      });
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
