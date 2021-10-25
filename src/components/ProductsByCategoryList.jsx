import { useState, useEffect } from "react";

export const ProductsByCategoryList = (props) => {
  const { productType } = props;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProductsByCategory() {
      const URL = `https://fakestoreapi.com/products/category/${productType}`;

      try {
        const response = await window.fetch(URL);
        const productsList = await response.json();
        setProductList(productsList);
      } catch (error) {
        console.log(`Error fetching products by category:: ${error}`);
      }
    }
    fetchProductsByCategory();
  }, [productType]);

  return (
    <div className="row">
      {productList &&
        productList.map((product) => (
          <div className="col-lg-4" key={product.key}>
            ​
            <picture>
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid img-thumbnail"
              />
            </picture>
            <div>
              <h5>{product.title}</h5>
            </div>
          </div>
        ))}
    </div>
  );
};
