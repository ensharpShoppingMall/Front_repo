import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage.js';
import ProductPage from './pages/ProductPage.js';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage />}></Route>
                    <Route path="/product" element={<ProductPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
