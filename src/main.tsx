import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Socials from './pages/Socials';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="lore" element={<Lore />} />
                    <Route path="socials" element={<Socials />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
