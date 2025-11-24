'use client';
import { useState } from 'react';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Говядина', quantity: 500, unit: 'гр', checked: false },
    { id: 2, name: 'Свекла', quantity: 2, unit: 'шт', checked: true },
    { id: 3, name: 'Капуста', quantity: 300, unit: 'гр', checked: false }
  ]);

  return (
    <>
      {/* Кнопка корзины */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary"
        style={{
          position: 'fixed',
          right: '20px',
          top: '100px',
          zIndex: 1000,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '20px'
        }}
      >
        🛒
      </button>

      {/* Боковая панель корзины */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          right: '20px',
          top: '170px',
          width: '300px',
          backgroundColor: 'var(--card-bg)',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 25px rgba(62, 44, 28, 0.2)',
          zIndex: 999,
          border: '2px solid var(--accent)'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>🛒 Список покупок</h3>
          
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              margin: '5px 0',
              backgroundColor: item.checked ? 'var(--background)' : 'transparent',
              borderRadius: '6px',
              textDecoration: item.checked ? 'line-through' : 'none'
            }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => setCartItems(cartItems.map(i => 
                  i.id === item.id ? { ...i, checked: !i.checked } : i
                ))}
                style={{ marginRight: '10px' }}
              />
              <span style={{ flex: 1 }}>{item.name}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                {item.quantity} {item.unit}
              </span>
            </div>
          ))}
          
          <button className="btn-primary" style={{ width: '100%', marginTop: '15px' }}>
            📦 Заказать в магазине
          </button>
        </div>
      )}
    </>
  );
}