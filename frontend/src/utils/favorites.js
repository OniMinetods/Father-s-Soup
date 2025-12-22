// Простое управление избранным
export const getFavorites = () => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const addToFavorites = (recipe) => {
  const favorites = getFavorites();
  if (!favorites.find(fav => fav.title === recipe.title)) {
    const newFavorites = [...favorites, { ...recipe, id: Date.now() }];
    saveFavorites(newFavorites);
    return newFavorites;
  }
  return favorites;
};

export const removeFromFavorites = (recipeTitle) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter(fav => fav.title !== recipeTitle);
  saveFavorites(newFavorites);
  return newFavorites;
};

export const isFavorite = (recipeTitle) => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.title === recipeTitle);
};