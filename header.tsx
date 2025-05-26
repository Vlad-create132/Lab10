import React from 'react';
import './App.css'

export const Header: React.FC = () => (
  <header>
    <a href="index.html">
      <img src="img/logo.jpg" alt="Puma Logo" className="logo" />
    </a>
    <nav>
      <ul>
        <li><a href="index.html">Головна</a></li>
        <li><a href="men-sportswear.html">Спортивні товари для чоловіків</a></li>
        <li><a href="women-sportswear.html">Спортивні товари для жінок</a></li>
        <li><a href="about.html">Про компанію</a></li>
        <li><a href="news.html">Новини</a></li>
        <li className="search">
          <input type="text" placeholder="Пошук..." />
          <button type="submit">Пошук</button>
        </li>
      </ul>
    </nav>
  </header>
);