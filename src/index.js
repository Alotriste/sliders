import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './fonts/AdobeBlank-Regular.ttf'
import './index.css'
import AppForm from './AppForm.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='appform' element={<AppForm/>}/>
    </Routes>
    <div className="devRuup"><p>Разработано: RU UP</p></div>
    </BrowserRouter>
    
    
);

