import Footer from '../component/Footer.js';
import DrawHeader from '../component/Header.js';
import ProductCategory from '../component/ProductListPageComponent/ProductCategory.js';
import ProductList from '../component/ProductListPageComponent/ProductList.js';

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
