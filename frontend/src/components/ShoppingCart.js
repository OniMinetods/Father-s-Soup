import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShoppingCart({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Кнопка корзины с количеством */}
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
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        🛒
        {totalItems > 0 && (
        <span style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          backgroundColor: '#ff4757',
          color: 'white',
          borderRadius: '10px',
          minWidth: '18px',
          height: '18px',
          fontSize: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          padding: '0 4px',
          border: '3px solid white'
        }}>
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
      </button>

      {/* Боковая панель корзины */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          right: '20px',
          top: '170px',
          width: '320px',
          maxHeight: '500px',
          backgroundColor: 'var(--card-bg)',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 25px rgba(62, 44, 28, 0.2)',
          zIndex: 999,
          border: '2px solid var(--accent)',
          overflowY: 'auto'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <h3 style={{ color: 'var(--accent)', margin: 0 }}>🛒 Корзина</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              ✕
            </button>
          </div>
          
          {cart.length === 0 ? (
            <p style={{ 
              textAlign: 'center', 
              color: 'var(--text-primary)',
              padding: '20px 0'
            }}>
              Корзина пуста
            </p>
          ) : (
            <>
              {cart.slice(0, 5).map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  margin: '5px 0',
                  backgroundColor: 'var(--background)',
                  borderRadius: '6px'
                }}>
                  <span style={{ flex: 1, fontSize: '14px' }}>
                    {item.name}
                  </span>
                  <span style={{ 
                    color: 'var(--accent)', 
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    {item.quantity} {item.unit}
                  </span>
                </div>
              ))}
              
              {cart.length > 5 && (
                <p style={{ 
                  textAlign: 'center', 
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  margin: '10px 0'
                }}>
                  ...и ещё {cart.length - 5} товаров
                </p>
              )}
              
              <Link 
                to="/cart" 
                className="btn-primary" 
                style={{ 
                  width: '100%', 
                  marginTop: '15px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block'
                }}
                onClick={() => setIsOpen(false)}
              >
                📦 Перейти в корзину
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ShoppingCart;