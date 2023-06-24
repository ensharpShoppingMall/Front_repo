import DrawHeader from "../components/Header.js";
import Footer from "../components/footer.js";
import ProductCategory from "../components/productCategory.js";
import ProductList from "../components/productList.js";
import "../css/ProductListPage.css";

const ProductListPage = () => {
  return (
    <div>
      <DrawHeader />
      <ProductCategory />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ProductListPage;
