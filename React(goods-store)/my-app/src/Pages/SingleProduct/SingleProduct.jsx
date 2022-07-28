import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductItem } from "../../Api/api";
import ProductCard from "../../Component/ProductCard/ProductCard";
import "./index.scss";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isItemCard, setIsItemCard] = useState(true);

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
  }, [id]);
  console.log(product.reviews);
  return (
    isLoaded && (
      <div className="single-box">
        <div className="single-box__item">
          <ProductCard product={product} isItemCard={isItemCard} />
        </div>
        <div className="reviews">
          <h3 className="reviews__title">Reviews</h3>
          {!product.reviews && (
            <p className="reviews__error">
              There are no reviews for this product
            </p>
          )}
        </div>
      </div>
    )
  );
}
