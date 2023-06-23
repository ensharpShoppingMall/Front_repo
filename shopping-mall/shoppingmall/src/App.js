import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
