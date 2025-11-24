export default function RecipeCard({ title, time, calories, ingredients, category }) {
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
            <button className="btn-primary">
              ❤️ В избранное
            </button>
            <button className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)' }}>
              🛒 Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}