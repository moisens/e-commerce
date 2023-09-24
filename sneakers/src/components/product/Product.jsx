import "./product.scss";
import plus from "/images/plus.svg";
import minus from "/images/minus.svg";
import iconcart from "/images/iconcart.svg";
import Imageproduct from "./Imageproduct";
import Description from "./Description";

const Product = ({ addTocart, removeProduct, prodNumber, cart }) => {
  return (
    <header className="product-detail">
      <Imageproduct />
      <section className="product-description">
        <Description
          addTocart={addTocart}
          removeProduct={removeProduct}
          prodNumber={prodNumber}
        />
      </section>
    </header>
  );
};

export default Product;
