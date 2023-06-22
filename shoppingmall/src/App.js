import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WomenProductPage from './pages/WomenProductPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WomenProductPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
