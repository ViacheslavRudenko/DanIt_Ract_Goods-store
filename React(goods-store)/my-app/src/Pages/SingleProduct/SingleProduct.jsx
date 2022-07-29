import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductItem } from "../../Api/api";
import FormsReview from "../../Component/Form/FormsReviews";
import FormLogIn from "../../Component/Form/LogIn";
import ProductCard from "../../Component/ProductCard/ProductCard";
import setModal from "../../store/actions/modal/modal";
import "./index.scss";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isItemCard, setIsItemCard] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isRevewAdded, setIsRevewAdded] = useState(false);

  useEffect(() => {
    getProductItem(id).then((resp) => {
      try {
        resp.status !== 200 && new Error(err);
        resp.status === 200 && setIsLoaded(true);
        setProduct(resp.data);
      } catch {
        console.error("Error: ", err.message);
      }
    });
    setIsLogin(localStorage.getItem("isLogin"));
  }, [id]);
  const dispatch = useDispatch();
  const setLogin = () => {
    dispatch(
      setModal({
        isOpen: true,
        title: "LogIn",
        isBtnClose: true,
        btn: [],
        content: <FormLogIn setIsLogin={setIsLogin} />,
      })
    );
  };

  return (
    isLoaded && (
      <div className="single-box">
        <div className="single-box__item">
          <ProductCard product={product} isItemCard={isItemCard} />
        </div>
        <div className="reviews">
          <h3 className="reviews__title">Reviews</h3>
          <div className="review__content">
            {!product.reviews ? (
              <p className="reviews__error">
                There are no reviews for this product
              </p>
            ) : (
              product.reviews.map((review) => {
                return (
                  <div>
                    <p>{review.userName}</p>
                    <p>{review.content}</p>
                  </div>
                );
              })
            )}
          </div>
          <div className="reviews__add">
            {isLogin ? (
              !isRevewAdded ? (
                <FormsReview setIsRevewAdded={setIsRevewAdded} />
              ) : (
                <p>
                  Your feedback is being checked by the operator and will be
                  available soon
                </p>
              )
            ) : (
              <>
                <p>If you want to add review, sign in:</p>
                <button className="btn btn__item" onClick={setLogin}>
                  SignIn
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
