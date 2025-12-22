import React from 'react';

function BackgroundLogo() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',          // Оптимальный размер
        height: '70vh',
        backgroundImage: 'url("/logo.jpeg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.2,          // Увеличили видимость
        filter: 'blur(1px) brightness(1.1)', // Меньше блюра + ярче
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

export default BackgroundLogo;