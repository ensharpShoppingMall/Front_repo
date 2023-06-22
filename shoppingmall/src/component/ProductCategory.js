import '../css/WomenProductPage.css';

const ProductCategory = () => {
    return (
        <div className="product-category">
            <div className="inner">
                <div className="category">
                    <ul>
                        <li>
                            <a>View All</a>
                        </li>
                        <li>
                            <a>Summer Acc Collection</a>
                        </li>
                        <li>
                            <a>OutWears</a>
                        </li>
                        <li>
                            <a>Tops</a>
                        </li>
                        <li>
                            <a>Bottoms</a>
                        </li>
                        <li>
                            <a>Dresses</a>
                        </li>
                        <li>
                            <a>Shoes</a>
                        </li>
                        <li>
                            <a>Bags</a>
                        </li>
                        <li>
                            <a>Accessories</a>
                        </li>
                    </ul>
                </div>
                <div className="filter">Filter</div>
            </div>
        </div>
    );
};

export default ProductCategory;
