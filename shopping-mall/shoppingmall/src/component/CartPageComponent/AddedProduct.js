import { useState } from 'react';
import '../../css/CartPage.css';

const AddedProduct = () => {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="product-part">
            <ul>
                <li className="each-product-container">
                    <img
                        className="image"
                        src="https://amomento.co/web/product/medium/202306/589cd5b468afad06a453b15c83262ab4.jpg"
                    />
                    <div className="information">
                        <div className="information-top">
                            <div>
                                <p className="product-name">
                                    OV SUNGLASSES (BLACK)
                                </p>
                                <p className="product-color-size">
                                    BLACK/ONE SIZE
                                </p>
                            </div>
                            <div className="product-price">289,000</div>
                        </div>
                        <div className="information-middle">
                            <ul>
                                <li>{count}</li>
                                <li>
                                    <button onClick={increaseCount}>UP</button>
                                </li>
                                <li>
                                    <button onClick={decreaseCount}>
                                        DOWN
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="information-buttom">
                            <button>REMOVE</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AddedProduct;
