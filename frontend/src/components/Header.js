import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--accent)',
      padding: '15px 20px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      boxShadow: '0 2px 10px rgba(62, 44, 28, 0.2)'
    }}>
      <img 
        src="/logo.jpeg"
        alt="Батин Суп" 
        style={{ 
          width: '50px', 
          height: '50px',
          borderRadius: '50%',
          border: '2px solid white'
        }}
      />
      
      <div>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Батин Суп</h1>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Рецепты на каждый день от бати</p>
      </div>
      
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Главная</Link>
        <Link to="/favorites" style={{color: 'white', textDecoration: 'none'}}>❤️ Избранное</Link>
        <Link to="/cart" style={{color: 'white', textDecoration: 'none'}}>🛒 Корзина</Link>
      </nav>
    </header>
  );
}

export default Header;