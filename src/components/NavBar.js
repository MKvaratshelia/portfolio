import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";
export const NavBar = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <p className="header__logo">Портфолио</p>
        <ul className="header__nav-list">
          <li className="header__list-item">
            <NavLink exact to="/" className="header__nav-link">
              Главная
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/about" className="header__nav-link">
              Обо мне
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
