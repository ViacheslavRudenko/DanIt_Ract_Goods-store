import { useEffect } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import setModal from "../../store/actions/modal/modal";
import setPageData from "../../store/actions/pageData/pageData";
import FormsOrder from "../../Component/Form/FormOrder";

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageData({
        isInCartPage: true,
        productOnClick: {},
      })
    );
  }, []);

  const cartList = useSelector((store) => store.cartList);
  const modal = useSelector((store) => store.modal);
  const pageData = useSelector((store) => store.pageData);

  const modalAction = (e) => {
    dispatch(
      setModal({
        isOpen: true,
        title: "Are you sure you want to delete this product from the cart?",
        isBtnClose: true,
        btn: [{ id: 1, text: "Yes" }],
      })
    );

    !modal.isOpen &&
      dispatch(
        setPageData({
          ...pageData,
          productOnClick: cartList
            .filter((product) => product.id == e.currentTarget.id)
            .shift(),
        })
      );
  };

  const cartListRender = cartList.map((productInCart) => {
    return (
      <li key={productInCart.id} className={"cart__item"}>
        <ProductCard actionOpenModal={modalAction} product={productInCart} />
      </li>
    );
  });

  return (
    <>
      <div className="cart">
        <div>
          <div className="cart__header">
            {cartList.length
              ? "Your cart"
              : "Your cart is empty! Time to start shopping!"}
          </div>
          <ul className="cart__list">{cartListRender}</ul>
        </div>

        {cartList.length && (
          <div>
            <FormsOrder cartList={cartList} />
          </div>
        )}
      </div>
    </>
  );
}
