import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CategoryPage() {
  const { slug } = useParams();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`http://127.0.0.1:8000/api/categories/${slug}/recipes/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка загрузки рецептов");
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="container">
      <div className="hero-section">
        <h1>📂 {slug}</h1>
        <p>Рецепты выбранной категории</p>
      </div>

      {/* Загрузка */}
      {loading && <p>Загрузка рецептов...</p>}

      {/* Ошибка */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Нет рецептов */}
      {!loading && !error && recipes.length === 0 && <p>Рецептов пока нет</p>}

      {/* Список рецептов */}
      {!loading && !error && recipes.length > 0 && (
        <div
          className="recipes-grid"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>

              <div style={{ display: "flex", gap: "15px", marginLeft: "20px" }}>
                {recipe.description && <p>{recipe.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
