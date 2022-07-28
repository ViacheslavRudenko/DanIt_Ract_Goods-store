import "./productCard.scss";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, removeProducts } from "../../store/actions/cart/cart";
import {
  addProductsToWish,
  removeProductsFromWish,
} from "../../store/actions/wishList/wishList";
import setModal from "../../store/actions/modal/modal";

export default function ProductCard({
  isInWishList,
  isInCartList,
  product,
  actionOpenModal,
}) {
  const modal = useSelector((store) => store.modal);
  const pageData = useSelector((store) => store.pageData);

  const dispatch = useDispatch();

  const toggleModal = () =>
    dispatch(
      setModal({
        ...modal,
        isOpen: !modal.isOpen,
      })
    );

  const setWishList = () => {
    !isInWishList
      ? dispatch(addProductsToWish(product))
      : dispatch(removeProductsFromWish(product));
  };

  const setShopingList = () => {
    pageData.isMainList
      ? dispatch(addProducts(pageData.productOnClick))
      : dispatch(removeProducts(pageData.productOnClick));
    toggleModal();
  };

  return (
    <>
      {modal.isOpen && (
        <Modal
          modal={modal}
          product={pageData.productOnClick}
          actionWithModal={setShopingList}
          closeModal={toggleModal}
        />
      )}

      <div className="card__item">
        <a className="card__link" href={product.Url}>
          <img className="card__img" src={product.img} alt={product.Id} />
        </a>
      </div>
      <div className="card__item">
        <div className="card__title title">
          <h6 className="title__item">{product.Title}</h6>
          <a className="title__link" href={product.Url}>
            <span>{product.Maker}</span>
          </a>
        </div>

        <p className="card__descript">{product.Description}</p>
        <p className="card__color">Color: {product.color}</p>
        <div className="card__info info">
          <p className="info__acticle">Article: {product.article}</p>
          <p className="info__price">Price: {product.price} UAH</p>
        </div>
        {pageData.isMainList && (
          <button
            className="card__btn"
            onClick={actionOpenModal}
            data-id={product.article}
            disabled={isInCartList}
          >
            {!isInCartList ? "Add to cart" : "In Cart!"}
          </button>
        )}

        <button onClick={setWishList} className="card__like">
          {(pageData.isMainList || pageData.isWishListPage) &&
            (isInWishList ? "★" : "☆")}
        </button>

        {pageData.isInCartPage && (
          <button
            onClick={actionOpenModal}
            className="card__like"
            data-id={product.article}
          >
            X
          </button>
        )}
      </div>
    </>
  );
}

ProductCard.propTypes = {
  objItems: PropTypes.object,
  dataId: PropTypes.string,
  getLengthFromLocalStorage: PropTypes.func,
};
