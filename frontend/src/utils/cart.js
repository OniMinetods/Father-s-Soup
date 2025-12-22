// Управление корзиной
export const getCart = () => {
  const saved = localStorage.getItem('batin-cart');
  return saved ? JSON.parse(saved) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('batin-cart', JSON.stringify(cart));
};

// Добавить ингредиенты рецепта в корзину
export const addRecipeToCart = (ingredients) => {
  const cart = getCart();
  
  ingredients.forEach(ingredient => {
    const existing = cart.find(item => item.name === ingredient.name);
    if (existing) {
      existing.quantity += ingredient.quantity;
    } else {
      cart.push({ ...ingredient, id: Date.now() + Math.random() });
    }
  });
  
  saveCart(cart);
  return cart;
};

// Удалить ингредиент из корзины
export const removeFromCart = (itemId) => {
  const cart = getCart().filter(item => item.id !== itemId);
  saveCart(cart);
  return cart;
};

// Обновить количество ингредиента
export const updateCartItem = (itemId, newQuantity) => {
  const cart = getCart();
  const item = cart.find(item => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
    saveCart(cart);
  }
  return cart;
};

// Очистить корзину
export const clearCart = () => {
  saveCart([]);
  return [];
};