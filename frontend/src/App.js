import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Импорты компонентов
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";
import RecipeCard from "./components/RecipeCard";
import Categories from "./components/Categories";
import ShoppingCart from "./components/ShoppingCart";
import BackgroundLogo from "./components/BackgroundLogo";
import CategoryPage from "./pages/CategoryPage";

// Импорты утилит
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  isFavorite as checkIsFavorite,
} from "./utils/favorites";
import {
  getCart,
  addRecipeToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
} from "./utils/cart";

// Главный App компонент
function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);

  const sampleRecipes = [
    {
      title: "🥣 Наваристый борщ",
      time: 60,
      calories: 210,
      ingredients:
        "500гр говядина, 2шт свекла, 300гр капуста, 3шт картофель, 2шт морковь, 200гр сметана",
      category: "Супы",
    },
    {
      title: "🍝 Спагетти Карбонара",
      time: 25,
      calories: 320,
      ingredients:
        "400гр спагетти, 200гр бекон, 3шт яйца, 100гр пармезан, 200мл сливки",
      category: "Основные блюда",
    },
    {
      title: "🥗 Цезарь с курицей",
      time: 20,
      calories: 180,
      ingredients:
        "200гр салат, 300гр курица, 100гр сухарики, 50гр пармезан, 100мл соус цезарь",
      category: "Салаты",
    },
  ];

  // Загружаем избранное и корзину при загрузке
  useEffect(() => {
    setFavorites(getFavorites());
    setCart(getCart());
  }, [forceUpdate]);

  // Функции для избранного
  const toggleFavorite = (recipe) => {
    if (checkIsFavorite(recipe.title)) {
      const newFavorites = removeFromFavorites(recipe.title);
      setFavorites(newFavorites);
    } else {
      const newFavorites = addToFavorites(recipe);
      setFavorites(newFavorites);
    }
    setForceUpdate((prev) => prev + 1);
  };

  // Функции для корзины
  const handleAddToCart = (ingredients, recipeTitle) => {
    const newCart = addRecipeToCart(ingredients);
    setCart(newCart);

    // Показываем уведомление (можно заменить на красивый toast)
    alert(`Ингредиенты из "${recipeTitle}" добавлены в корзину!`);
  };

  const handleRemoveFromCart = (itemId) => {
    const newCart = removeFromCart(itemId);
    setCart(newCart);
  };

  const handleUpdateCart = (itemId, newQuantity) => {
    const newCart = updateCartItem(itemId, newQuantity);
    setCart(newCart);
  };

  const handleClearCart = () => {
    const newCart = clearCart();
    setCart(newCart);
  };

  // Компонент главной страницы
  function HomePage() {
    return (
      <div className="container">
        <div className="hero-section">
          <h1>🍲 Батин Суп</h1>
          <p>Найди рецепт своей мечты. Быстро, вкусно, по-батиному.</p>
        </div>

        <Categories />
        <SearchFilters />

        <div className="recipes-grid">
          {sampleRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              time={recipe.time}
              calories={recipe.calories}
              ingredients={recipe.ingredients}
              category={recipe.category}
              isFavorite={checkIsFavorite(recipe.title)}
              onFavoriteToggle={() => toggleFavorite(recipe)}
              onAddToCart={(ingredients) =>
                handleAddToCart(ingredients, recipe.title)
              }
            />
          ))}
        </div>
      </div>
    );
  }

  // Компонент страницы избранного
  function FavoritesPage() {
    return (
      <div className="container">
        <div className="hero-section">
          <h1>❤️ Избранное</h1>
          <p>Ваши любимые рецепты собраны здесь</p>
        </div>

        {favorites.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "var(--text-primary)",
              backgroundColor: "transparent",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>😔</div>
            <h2>Пока пусто</h2>
            <p>
              Добавляйте рецепты в избранное, нажимая на сердечко на главной
              странице
            </p>
          </div>
        ) : (
          <div className="recipes-grid">
            {favorites.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        marginBottom: "10px",
                        color: "var(--accent)",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      📁 {recipe.category}
                    </p>

                    <h3
                      style={{ color: "var(--accent)", marginBottom: "10px" }}
                    >
                      {recipe.title}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginBottom: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>
                        ⏱️ <strong>{recipe.time} мин</strong>
                      </span>
                      <span>
                        🔥 <strong>{recipe.calories} ккал</strong>
                      </span>
                    </div>

                    <p
                      style={{
                        marginBottom: "15px",
                        color: "var(--text-primary)",
                      }}
                    >
                      <strong>Ингредиенты:</strong> {recipe.ingredients}
                    </p>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        className="btn-primary"
                        onClick={() => toggleFavorite(recipe)}
                        style={{
                          backgroundColor: "#ff4757",
                          transition: "all 0.3s ease",
                        }}
                      >
                        💔 Удалить
                      </button>
                      <button
                        className="btn-primary"
                        onClick={() =>
                          handleAddToCart(
                            recipe.ingredients.split(", ").map((ing) => ({
                              name: ing,
                              quantity: 1,
                              unit: "шт",
                            })),
                            recipe.title
                          )
                        }
                        style={{
                          backgroundColor: "transparent",
                          color: "var(--accent)",
                          border: "2px solid var(--accent)",
                        }}
                      >
                        🛒 В корзину
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Компонент страницы корзины
  function CartPage() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleQuantityChange = (itemId, newQuantity) => {
      if (newQuantity < 1) return;
      handleUpdateCart(itemId, newQuantity);
    };

    return (
      <div className="container">
        <div className="hero-section">
          <h1>🛒 Корзина</h1>
          <p>Проверьте список ингредиентов перед заказом</p>
        </div>

        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "var(--text-primary)",
              backgroundColor: "transparent",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🛒</div>
            <h2>Корзина пуста</h2>
            <p>Добавляйте ингредиенты в корзину из рецептов</p>
          </div>
        ) : (
          <div>
            {/* Статистика корзины */}
            <div
              style={{
                backgroundColor: "var(--card-bg)",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <div>
                <h3 style={{ color: "var(--accent)", margin: 0 }}>Итого:</h3>
                <p
                  style={{ margin: "5px 0 0 0", color: "var(--text-primary)" }}
                >
                  {totalItems} товаров
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className="btn-primary"
                  onClick={() => alert("Заказ оформлен! (это заглушка)")}
                  style={{ minWidth: "160px" }}
                >
                  📦 Оформить заказ
                </button>
                <button
                  className="btn-primary"
                  onClick={handleClearCart}
                  style={{
                    minWidth: "140px",
                    backgroundColor: "transparent",
                    color: "var(--accent)",
                    border: "2px solid var(--accent)",
                  }}
                >
                  🗑️ Очистить
                </button>
              </div>
            </div>

            {/* Список ингредиентов */}
            <div style={{ display: "grid", gap: "15px" }}>
              {cart.map((item) => (
                <div key={item.id} className="recipe-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          color: "var(--accent)",
                          margin: "0 0 8px 0",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.name}
                      </h4>

                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            Количество:
                          </span>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              backgroundColor: "var(--background)",
                              padding: "4px 12px",
                              borderRadius: "8px",
                            }}
                          >
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              style={{
                                background: "none",
                                border: "none",
                                fontSize: "18px",
                                cursor: "pointer",
                                color: "var(--accent)",
                                padding: "2px 8px",
                              }}
                            >
                              -
                            </button>
                            <span
                              style={{
                                fontWeight: "bold",
                                minWidth: "30px",
                                textAlign: "center",
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              style={{
                                background: "none",
                                border: "none",
                                fontSize: "18px",
                                cursor: "pointer",
                                color: "var(--accent)",
                                padding: "2px 8px",
                              }}
                            >
                              +
                            </button>
                          </div>
                          <span style={{ color: "var(--text-primary)" }}>
                            {item.unit}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#ff4757",
                        padding: "8px",
                      }}
                      title="Удалить из корзины"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <BackgroundLogo />
        <Header />
        <ShoppingCart cart={cart} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
