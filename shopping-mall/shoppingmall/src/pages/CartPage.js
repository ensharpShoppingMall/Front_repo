import DrawHeader from '../component/Header';
import AddedProduct from '../component/CartPageComponent/AddedProduct';
import CartOption from '../component/CartPageComponent/CartOption';
import '../css/CartPage.css';

const CartPage = () => {
    return (
        <div>
            <DrawHeader />
            <div className="cart-container">
                <AddedProduct />
                <CartOption />
            </div>
        </div>
    );
};

export default CartPage;
