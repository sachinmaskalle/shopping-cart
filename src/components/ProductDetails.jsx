import { useState, useEffect } from "react";

export const ProductDetails = (props) => {
  const { productId } = props;
  const [productDetails, setProductDetails] = useState([]);

  const addToCart = () => {
    console.log("adding to cart")
  }

  useEffect(() => {
    async function fetchProductsById() {
      const URL = `https://fakestoreapi.com/products/${productId}`;

      try {
        const response = await window.fetch(URL);
        const productDetails = await response.json();
        setProductDetails(productDetails);
      } catch (error) {
        console.log(`Error fetching products details:: ${error}`);
      }
    }
    fetchProductsById();
  }, [productId]);

  return (
    <>
      {productDetails && (
        <div>
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="img-fluid card-img-top mt-4"
          />
          <p>{productDetails.title}</p>
          <button type="button" class="btn btn-outline-primary" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      )}
    </>
  );
};
