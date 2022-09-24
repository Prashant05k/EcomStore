import { useEffect } from "react";
import Items from "./Items";

function AddToCart(props) {
  const { data, addToCartHandler } = props;
  const { id } = data;

  useEffect(() => {
    const arrIds = [1, 3, 5];
    if (arrIds.includes(id)) {
      setTimeout(() => {
        let btn = document.getElementById(`sold-out${id}`);
        btn.innerText = "Sold Out";
        btn.disabled = true;
      }, 1000 * 60);
    }
  }, []);

  return <Items value={[data, addToCartHandler, "Add To Cart: "]} />;
}

export default AddToCart;
