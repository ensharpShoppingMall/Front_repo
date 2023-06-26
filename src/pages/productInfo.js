import DrawHeader from "../components/Header.js";
import Footer from "../components/footer.js";
import ProductInformation from "../components/productInformation.js";

function Product() {
  return (
    <div className="total">
      <DrawHeader></DrawHeader>
      <ProductInformation></ProductInformation>
      <Footer></Footer>
    </div>
  );
}

export default Product;
