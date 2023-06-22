import Footer from '../component/Footer';
import ProductCategory from '../component/ProductCategory';
import ProductList from '../component/ProductList';
import '../css/WomenProductPage.css';

const WomenProductPage = () => {
    return (
        <div>
            {/* 헤더추가 */}
            <ProductCategory />
            <ProductList />
            <Footer />
        </div>
    );
};

export default WomenProductPage;
