import { useEffect, useState } from "react";
import { ProductsByCategoryList } from "./ProductsByCategoryList";

const CATEGORIES_BASE_URL = "https://fakestoreapi.com/products/categories";

export const CategoryItem = () => {
  const [categoryItem, setCategoryItem] = useState([]);
  const [productType, setProductType] = useState('');

  const getCategoryItmes = async () => {
    try {
      const response = await window.fetch(CATEGORIES_BASE_URL);
      const data = await response.json();
      setCategoryItem(data);
    } catch (error) {
      console.log(`Failed to fetch category item:: ${error}`);
    }
  };

  const handleClick = (e) => {
    setProductType(e.target.innerText)
  };

  useEffect(() => {
    getCategoryItmes();
  }, []);

  return (
    <div className="row mt-2">
      {categoryItem.map((listItem) => (
        <div className="col-lg-3" key={listItem}>
          <button
            className="btn btn-secondary my-2"
            onClick={(e) => handleClick(e)}
          >
            {listItem}
          </button>
        </div>
      ))}
      {productType !== '' && <ProductsByCategoryList productType={productType} /> }
    </div>
  );
};
