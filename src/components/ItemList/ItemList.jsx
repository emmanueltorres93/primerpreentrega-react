import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  
  return (
    <div className="container mt-4">
      <ul className="col-12 row justify-content-center">
        {items.map((item) => (
          <li key={item.id} className="card col-3 border-0 p-1 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                className="text-decoration-none text-dark"
                to={`/item/${item.id}`}
              >
                <motion.img
                  src={`/${item.categoryId}/${item.imageId}`}
                  alt={item.title}
                  className={styles.list_image}
                />
                <div className="card-body text-center">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text text-danger fw-bold fs-1">
                    ${item.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};
ItemList.propTypes = {
  items: propTypes.array,
};

export default ItemList;