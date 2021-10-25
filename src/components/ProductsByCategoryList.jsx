import { useState, useEffect } from "react";
import { ProductDetails } from "./ProductDetails";

export const ProductsByCategoryList = (props) => {
  const { productType } = props;
  const [productList, setProductList] = useState([]);
  const [productId, setProductId] = useState(0);

  const getproductDetails = (pId) => {
    setProductId(pId);
  };

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
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {productList &&
        productList.map((product) => (
          <div className="col" key={product.id}>
            <div className="card shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid card-img-top mt-4"
                onClick={() => getproductDetails(product.id) }
              />

              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <div className="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        ))}
      {productId && <ProductDetails productId={productId} />  }
    </div>
  );
};
