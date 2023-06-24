import DrawHeader from "../components/Header.js";
import Footer from "../components/footer.js";
import DrawOutfitPicture from "../components/outfitPicture.js";
import DrawActiveProductInfo from "../components/activeProductInfo.js";

function Product() {
  return (
    <div className="total">
      <DrawHeader></DrawHeader>
      <DrawOutfitPicture></DrawOutfitPicture>
      <DrawActiveProductInfo></DrawActiveProductInfo>
      <Footer></Footer>
    </div>
  );
}

export default Product;
