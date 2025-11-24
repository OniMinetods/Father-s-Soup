'use client';

export default function Categories() {
  const categories = [
    { icon: '🍲', name: 'Супы', count: '45 рецептов' },
    { icon: '🍝', name: 'Основные блюда', count: '67 рецептов' },
    { icon: '🥗', name: 'Салаты', count: '32 рецепта' },
    { icon: '🍰', name: 'Десерты', count: '28 рецептов' },
    { icon: '🥤', name: 'Напитки', count: '15 рецептов' },
    { icon: '🥪', name: 'Завтраки', count: '38 рецептов' },
    { icon: '🍛', name: 'Гарниры', count: '24 рецепта' },
    { icon: '🍕', name: 'Выпечка', count: '41 рецепт' }
  ];

  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      padding: '30px',
      borderRadius: '15px',
      marginBottom: '30px'
    }}>
      <h2 style={{ color: 'var(--accent)', marginBottom: '25px', textAlign: 'center' }}>
        🍽️ Все категории блюд
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px'
      }}>
        {categories.map((category, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: 'var(--background)',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid var(--border-light)',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              {category.icon}
            </div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>
              {category.name}
            </h4>
            <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}