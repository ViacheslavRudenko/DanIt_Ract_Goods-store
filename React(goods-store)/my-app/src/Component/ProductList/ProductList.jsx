import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard.jsx";
//import "./productList.scss";
import PropTypes from "prop-types";
import setModal from "../../store/actions/modal/modal";
import setPageData from "../../store/actions/pageData/pageData";
import { useEffect, useContext } from "react";
import styles from "./ProductList.module.scss";
import { Context } from "../../App.js";

export const getProductIncludes = (products, product) =>
  products.some((element) => element.article === product.article);

export default function ProductList() {
  const products = useSelector((store) => store.productsLoad.products);
  const pageData = useSelector((store) => store.pageData);
  const modal = useSelector((store) => store.modal);
  const wishList = useSelector((store) => store.wishList);
  const cartList = useSelector((store) => store.cartList);
  const { productsDisplay } = useContext(Context);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setPageData({
        isMainList: true,
        productOnClick: {},
        isInWishList: false,
      })
    );
  }, []);

  const modalAction = (e) => {
    const productOnClick = products
      .filter((product) => product.article === e.target.getAttribute("data-id"))
      .shift();

    !modal.isOpen &&
      dispatch(
        setPageData({
          ...pageData,
          productOnClick: productOnClick,
        })
      );

    dispatch(
      setModal({
        isOpen: true,
        title: "Confirm the order",
        isBtnClose: true,
        btn: [{ id: 1, text: "Add to cart" }],
        content: (
          <div className="main__text goods">
            <img className="goods__img" src={productOnClick.img} alt="" />
            <div className="goods__info info">
              <p className="info__title">{productOnClick.Title}</p>

              <p className="info__price">
                <span>Article: {productOnClick.article}</span> Price:{" "}
                {productOnClick.price}
              </p>
            </div>
          </div>
        ),
      })
    );
  };

  const productCard = products.map((product) => {
    let isInWishList = getProductIncludes(wishList, product);
    let isInCartList = getProductIncludes(cartList, product);

    return (
      <li key={product.article} className={styles.cart}>
        <ProductCard
          actionOpenModal={modalAction}
          product={product}
          isInWishList={isInWishList}
          isInCartList={isInCartList}
        />
      </li>
    );
  });

  return (
    <div className="product-box">
      <ul
        className={`${styles.product}
         ${productsDisplay === "grid" ? styles.grid : styles.inline}`}
      >
        {productCard}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  objItems: PropTypes.array,
};
