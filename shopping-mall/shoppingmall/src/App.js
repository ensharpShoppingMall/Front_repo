import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ProductListPage />}></Route>
                <Route path="/product" element={<ProductPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
