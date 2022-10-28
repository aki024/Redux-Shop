import React from "react";
import styles from "../ShopList/ShopList.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  cartActive: boolean;
  setCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopList = ({ cartActive, setCartActive }: Props) => {
  return (
    <AnimatePresence>
      {cartActive && (
        <>
          <motion.div
            key="modal"
            className={styles.backDrop}
            onClick={() => setCartActive(!cartActive)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}></motion.div>
          <motion.div
            className={styles.sidebar}
            key="sidebar"
            transition={{ duration: 0.5 }}
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            exit={{ x: 2000 }}>
            <div className={styles.sideTop}>
              <h1>Your Shopping Bag</h1>
              <AiOutlineClose />
            </div>
            <div className={styles.sideProducts}>
              <div className={styles.products}></div>
              <div className={styles.price}>Subtotal: $0.00</div>
            </div>
            <div className={styles.link}>
              <div className={styles.linkText}>Checkout</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShopList;
