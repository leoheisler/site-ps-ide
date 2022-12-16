import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Sobre from "./components/Sobre";
import Jogadores from "./components/Jogadores";
import Footer from './components/Footer';
import Banner from './components/Banner';
import Jogos from "./components/Jogos";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Sobre />
    <Jogadores />
    <Jogos />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
