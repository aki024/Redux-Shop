import React from "react";
import styles from "../ShopList/ShopList.module.scss";

interface Props {
  cartActive: boolean;
  setCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopList = ({ cartActive, setCartActive }: Props) => {
  return (
    <div className={styles.backDrop} onClick={() => setCartActive(!cartActive)}>
      <div className={styles.sidebar}>content</div>
    </div>
  );
};

export default ShopList;
