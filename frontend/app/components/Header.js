export default function Header() {
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
      {/* Эмблема сайта */}
      <img 
        src="/logo.jpeg" 
        alt="Батин Суп" 
        style={{ 
          width: '50px', 
          height: '50px',
          borderRadius: '50%',
          border: '2px solid white',
          boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)'
        }}
      />
      <div>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>🍲 Батин Суп</h1>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Рецепты на каждый день от бати</p>
      </div>
      
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <a href="/" className="nav-link" style={{color: 'white', backgroundColor: 'rgba(255,255,255,0.2)'}}>Главная</a>
        <a href="/recipes" className="nav-link" style={{color: 'white'}}>Рецепты</a>
        <a href="/favorites" className="nav-link" style={{color: 'white'}}>Избранное</a>
        <a href="/cart" className="nav-link" style={{color: 'white'}}>🛒 Корзина</a>
        <a href="/profile" className="nav-link" style={{color: 'white'}}>👤 Профиль</a>
      </nav>
    </header>
  );
}