'use client';
import { useState } from 'react';

export default function SearchFilters() {
  const [search, setSearch] = useState('');
  
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '30px',
      boxShadow: '0 2px 10px rgba(62, 44, 28, 0.1)'
    }}>
      <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>🔍 Найди своё идеальное блюдо</h3>
      
      <input
        type="text"
        placeholder="Поиск по названию или ингредиентам..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field"
        style={{ marginBottom: '15px' }}
      />
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {/* ДОБАВЛЯЕМ ФИЛЬТР КАТЕГОРИЙ - ЭТОТ SELECT */}
        <select className="input-field" style={{ flex: 1, minWidth: '150px' }}>
          <option>Все категории</option>
          <option>🍲 Супы</option>
          <option>🍝 Основные блюда</option>
          <option>🥗 Салаты</option>
          <option>🍰 Десерты</option>
          <option>🥤 Напитки</option>
          <option>🥪 Завтраки</option>
          <option>🍛 Гарниры</option>
          <option>🍕 Выпечка</option>
        </select>
        
        <select className="input-field" style={{ flex: 1, minWidth: '150px' }}>
          <option>Любое время</option>
          <option>⚡ До 30 минут</option>
          <option>⏱️ 30-60 минут</option>
          <option>🍲 Более часа</option>
        </select>
        
        <select className="input-field" style={{ flex: 1, minWidth: '150px' }}>
          <option>Любая сложность</option>
          <option>😊 Простой</option>
          <option>😐 Средний</option>
          <option>🧑‍🍳 Сложный</option>
        </select>
        
        <button className="btn-primary" style={{ minWidth: '120px' }}>
          Найти
        </button>
      </div>
    </div>
  );
}