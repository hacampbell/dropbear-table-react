// Required Fonts for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './views/App';
import NavBar from './components/Nav/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreateRestaurant from './views/CreateRestaurant';
import Meal from './views/Meal';
import 'leaflet/dist/leaflet.css'
import ViewRestaurant from './views/ViewRestaurant';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/restaurant" element={<CreateRestaurant />}/>
        <Route path="/meal" element={<Meal />}/>
        <Route path="/viewrestaurant" element={<ViewRestaurant />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
