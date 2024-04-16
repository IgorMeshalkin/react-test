import React from 'react';
import './App.scss';
import BestSellers from "./components/best-sellers/BestSellers";

function App() {
    return (
        <div className="App">
            <div className="pageContentContainer">
                <BestSellers/>
            </div>
        </div>
    );
}

export default App;
