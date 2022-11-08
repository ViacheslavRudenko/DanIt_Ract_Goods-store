import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartList = useSelector((store) => store.cartList);
  const wishList = useSelector((store) => store.wishList);
  return (
    <div className="header">
      <Link className="header__link" to="/products/">
        <p>Home</p>
      </Link>
      <Link className="header__link" to="/products/cart">
        <div className="header__item">
          <p>
            Cart &#128722;
            <span>{cartList.length ? "(" + cartList.length + ")" : ""}</span>
          </p>
        </div>
      </Link>
      <Link className="header__link" to="/products/wish-list">
        <div className="header__item">
          <p>
            Wish List ★
            <span>{wishList.length ? "(" + wishList.length + ")" : ""}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
