import React from 'react';

function RecipeCard({ 
  title, 
  time, 
  calories, 
  ingredients, 
  category, 
  isFavorite, 
  onFavoriteToggle,
  onAddToCart 
}) {
  
  // Парсим ингредиенты из строки в массив объектов
  const parseIngredients = () => {
    return ingredients.split(', ').map(ingredient => {
      return {
        name: ingredient.trim(),
        quantity: 1,
        unit: 'шт'
      };
    });
  };

  const handleAddToCart = () => {
    const ingredientList = parseIngredients();
    onAddToCart(ingredientList, title);
  };

  return (
    <div className="recipe-card">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <p style={{ 
            marginBottom: '10px', 
            color: 'var(--accent)', 
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            📁 {category}
          </p>
          
          <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>{title}</h3>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              ⏱️ <strong>{time} мин</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              🔥 <strong>{calories} ккал</strong>
            </span>
          </div>
          
          <p style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>
            <strong>Ингредиенты:</strong> {ingredients}
          </p>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn-primary" 
              onClick={onFavoriteToggle}
              style={{ 
                backgroundColor: isFavorite ? '#ff4757' : 'var(--accent)',
                transition: 'all 0.3s ease'
              }}
            >
              {isFavorite ? '💔 Удалить' : '❤️ В избранное'}
            </button>
            <button 
              className="btn-primary" 
              onClick={handleAddToCart}
              style={{ 
                backgroundColor: 'transparent', 
                color: 'var(--accent)', 
                border: '2px solid var(--accent)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--accent)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--accent)';
              }}
            >
              🛒 В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;