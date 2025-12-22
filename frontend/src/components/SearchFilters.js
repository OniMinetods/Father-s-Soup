import React, { useState, useEffect } from 'react';

// Выносим константу наружу
const POPULAR_SEARCHES = ['борщ', 'паста', 'салат', 'суп', 'курица', 'десерт', 'пицца', 'суши'];

function SearchFilters({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    time: '',
    difficulty: '',
    calories: ''
  });

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filtered = POPULAR_SEARCHES.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // ... остальной код без изменений
  const handleSearch = () => {
    if (onSearch) {
      onSearch({ searchTerm, filters });
    }
    console.log('Поиск:', { searchTerm, filters });
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters({ category: '', time: '', difficulty: '', calories: '' });
    setSuggestions([]);
  };

  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      padding: '25px',
      borderRadius: '15px',
      marginBottom: '30px',
      boxShadow: '0 4px 20px rgba(62, 44, 28, 0.1)'
    }}>
      <h3 style={{ color: 'var(--accent)', marginBottom: '20px', textAlign: 'center' }}>
        🔍 Умный поиск рецептов
      </h3>

      {/* Поле поиска с автодополнением */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Начните вводить название или ингредиент..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            border: '2px solid var(--border-light)',
            borderRadius: '10px',
            fontSize: '16px',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--accent)';
            e.target.style.boxShadow = '0 0 0 3px rgba(166, 75, 42, 0.1)';
          }}
          onBlur={(e) => {
            setTimeout(() => setSuggestions([]), 200);
            e.target.style.borderColor = 'var(--border-light)';
            e.target.style.boxShadow = 'none';
          }}
        />
        
        {/* Автодополнение */}
        {suggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid var(--border-light)',
            borderRadius: '0 0 10px 10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => {
                  setSearchTerm(suggestion);
                  setSuggestions([]);
                }}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-light)',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--background)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                🔍 {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Расширенные фильтры */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <select
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
          style={selectStyle}
        >
          <option value="">🍽️ Все категории</option>
          <option value="soups">🍲 Супы</option>
          <option value="main">🍝 Основные блюда</option>
          <option value="salads">🥗 Салаты</option>
          <option value="desserts">🍰 Десерты</option>
        </select>

        <select
          value={filters.time}
          onChange={(e) => setFilters({...filters, time: e.target.value})}
          style={selectStyle}
        >
          <option value="">⏱️ Любое время</option>
          <option value="fast">⚡ До 30 мин</option>
          <option value="medium">⏱️ 30-60 мин</option>
          <option value="slow">🍲 Более часа</option>
        </select>

        <select
          value={filters.difficulty}
          onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
          style={selectStyle}
        >
          <option value="">🎯 Любая сложность</option>
          <option value="easy">😊 Простой</option>
          <option value="medium">😐 Средний</option>
          <option value="hard">🧑‍🍳 Сложный</option>
        </select>

        <select
          value={filters.calories}
          onChange={(e) => setFilters({...filters, calories: e.target.value})}
          style={selectStyle}
        >
          <option value="">🔥 Любая калорийность</option>
          <option value="low">🥬 До 200 ккал</option>
          <option value="medium">🍽️ 200-400 ккал</option>
          <option value="high">🏋️ Более 400 ккал</option>
        </select>
      </div>

      {/* Кнопки действий */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          className="btn-primary" 
          onClick={handleSearch}
          style={{ minWidth: '140px' }}
        >
          🔍 Найти рецепты
        </button>
        <button 
          className="btn-primary"
          onClick={handleReset}
          style={{ 
            minWidth: '140px',
            backgroundColor: 'transparent',
            color: 'var(--accent)',
            border: '2px solid var(--accent)'
          }}
        >
          🗑️ Сбросить
        </button>
      </div>
    </div>
  );
}

const selectStyle = {
  width: '100%',
  padding: '12px',
  border: '2px solid var(--border-light)',
  borderRadius: '8px',
  fontSize: '14px',
  backgroundColor: 'white',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease'
};

export default SearchFilters;