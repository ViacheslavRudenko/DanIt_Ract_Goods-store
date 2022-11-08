import { useEffect, useContext } from "react";
import ProductList from "../../Component/ProductList/ProductList";
import { fetchProducts } from "../../store/actions/products/products";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.scss";
import { useState } from "react";
import Button from "../../Component/Button/Button";
import { Context } from "../../App";

export default function Home() {
  const productsLoad = useSelector((store) => store.productsLoad);
  const { isLoaded, hasError } = productsLoad;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { productsDisplay, setProductsDisplay } = useContext(Context);

  const [displayBtn, setDisplayBtn] = useState({
    inline: {
      id: "inline",
      text: "☰",
      isActive: productsDisplay === "inline",
    },
    grid: {
      id: "grid",
      text: "☷",
      isActive: productsDisplay === "grid",
    },
  });

  const toggleBtnDisplay = (e) => {
    let display = e.target.id;
    setDisplayBtn({
      inline: { ...displayBtn.inline, isActive: !displayBtn.inline.isActive },
      grid: { ...displayBtn.grid, isActive: !displayBtn.grid.isActive },
    });
    setProductsDisplay(display);
    localStorage.setItem("productsDisplay", display);
  };

  if (hasError.length) {
    return <div>Ошибка: {hasError.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <div className={styles.display}>
          <Button
            actionWithModal={toggleBtnDisplay}
            btn={Object.values(displayBtn)}
          />
        </div>
        <ProductList />
      </>
    );
  }
}
