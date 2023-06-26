import '../../css/CartPage.css';

const CartOption = () => {
    return (
        <div className="option-part">
            <div className="sub-total">
                <label>SUBTOTAL</label>
                <div>289,000</div>
            </div>
            <div className="shipping"></div>
            <div className="total"></div>
            <div className="check-out"></div>
            <div className="naver-pay">
                <button></button>
            </div>
        </div>
    );
};

export default CartOption;
