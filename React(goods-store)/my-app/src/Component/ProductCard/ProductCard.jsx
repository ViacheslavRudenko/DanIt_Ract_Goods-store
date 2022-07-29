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
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

export default function ProductCard({
  isInWishList,
  isInCartList,
  product,
  actionOpenModal,
  isItemCard,
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
      <Link key={product.id} to={`/products/item/${product.id}`}>
        <div className="card__item">
          <img className="card__img" src={product.image} alt={product.id} />
        </div>
      </Link>
      <div className="card__item">
        <div className="card__title title">
          <h6 className="title__item">{product.title}</h6>
        </div>

        <p className="card__descript">{product.description}</p>
        <p className="card__color">
          Rating:{" "}
          <span>
            <Rating
              onClick={() => {}}
              ratingValue={+product.rating.rate * 20}
              size={20}
            />
          </span>
        </p>
        <div className="card__info info">
          <p className="info__acticle">Article: {product.id}</p>
          <p className="info__price">Price: {product.price} UAH</p>
        </div>
        {pageData.isMainList && !isItemCard && (
          <button
            className="card__btn"
            onClick={actionOpenModal}
            id={product.id}
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
            id={product.id}
          >
            X
          </button>
        )}
      </div>
    </>
  );
}

ProductCard.propTypes = {
  isInWishList: PropTypes.bool,
  isInCartList: PropTypes.bool,
  product: PropTypes.object,
  actionOpenModal: PropTypes.func,
  isItemCard: PropTypes.bool,
};
