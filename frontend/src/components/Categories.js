import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { icon: "🍲", name: "Супы", slug: "soups", count: "2 рецепта" },
    {
      icon: "🍝",
      name: "Основные блюда",
      slug: "main-dishes",
      count: "1 рецепт",
    },
    { icon: "🥗", name: "Салаты", slug: "salads", count: "1 рецепт" },
    { icon: "🍰", name: "Десерты", slug: "desserts", count: "Нет рецептов" },
    { icon: "🥤", name: "Напитки", slug: "drinks", count: "Нет рецептов" },
    { icon: "🥪", name: "Завтраки", slug: "breakfasts", count: "Нет рецептов" },
    { icon: "🍛", name: "Гарниры", slug: "side-dishes", count: "Нет рецептов" },
    { icon: "🍕", name: "Выпечка", slug: "bakery", count: "Нет рецептов" },
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--card-bg)",
        padding: "30px",
        borderRadius: "15px",
        marginBottom: "30px",
      }}
    >
      <h2
        style={{
          color: "var(--accent)",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        🍽️ Все категории блюд
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--background)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                border: "2px solid var(--border-light)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-light)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {category.icon}
              </div>

              <h4 style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
                {category.name}
              </h4>

              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                {category.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
