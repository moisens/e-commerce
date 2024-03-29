import "./nav.scss";
import { links } from "../../utils/utils";
import { Link } from "react-router-dom";
import avatar from "/images/avatar.png";
import logo from "/images/logo.svg";
import iconcart from "/images/iconcart.svg";
import Cart from "../cart/Cart";

const Nav = ({
  activeCart,
  isCartActive,
  cart,
  prodNumber,
  deletePermentally,
}) => {
  return (
    <nav className="nav-container">
      <div className="logo-links-container">
        <div className="nav-logo">
          <img src={logo} alt="logo-sneakers" title="sneakers-logo" />
        </div>
        <div className="nav-content">
          <ul className="nav-content">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="nav-cart-avatar">
        <div className="nav-cart" onClick={activeCart}>
          <img src={iconcart} alt="icon-cart" />
          <div className="cart-number-art">{prodNumber}</div>
        </div>
        <div className="nav-avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <Cart
        isCartActive={isCartActive}
        cart={cart}
        deletePermentally={deletePermentally}
      />
    </nav>
  );
};

export default Nav;
