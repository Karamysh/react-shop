import React from 'react';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="reight hide-on-med-and-down">
          <li>
            <a
              href="https://bitvinus.github.io/react-shop/"
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
