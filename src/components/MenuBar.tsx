// src/components/MenuBar.tsx
import React from 'react';

const MenuBar: React.FC = () => {
  return (
    <nav className="menu-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </nav>
  );
}

export default MenuBar;