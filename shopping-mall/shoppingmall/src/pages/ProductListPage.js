import Footer from '../component/Footer.js';
import ProductCategory from '../component/ProductCategory.js';
import ProductList from '../component/ProductList.js';
import '../css/ProductListPage.css';

const ProductListPage = () => {
    return (
        <div>
            {/* 헤더추가 */}
            <ProductCategory />
            <ProductList />
            <Footer />
        </div>
    );
};

export default ProductListPage;
