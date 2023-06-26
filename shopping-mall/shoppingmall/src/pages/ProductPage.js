import DrawHeader from '../component/Header.js';
import ProductInformation from '../component/ProductPageComponent/ProductInformation.js';
import Footer from '../component/Footer.js';

const ProductPage = () => {
    return (
        <div>
            <DrawHeader />
            <ProductInformation />
            <Footer />
        </div>
    );
};

export default ProductPage;
