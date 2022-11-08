import { useEffect } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import setPageData from "../../store/actions/pageData/pageData";
import "./wishList.scss";
import { getProductIncludes } from "../../Component/ProductList/ProductList";

export default function WishList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageData({
        isWishListPage: true,
      })
    );
  }, []);

  const wishList = useSelector((store) => store.wishList);

  const wishListRender = wishList.map((productInWishList) => {
    let isInWishList = getProductIncludes(wishList, productInWishList);

    return (
      <li key={productInWishList.id} className={"wish__item"}>
        <ProductCard product={productInWishList} isInWishList={isInWishList} />
      </li>
    );
  });

  return (
    <div className="wish">
      <div className="wish__header">
        {wishList.length ? "Your wish list" : "Your wish list is empty! "}
      </div>
      <ul className="wish__list">{wishListRender}</ul>
    </div>
  );
}
