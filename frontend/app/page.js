import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import RecipeCard from './components/RecipeCard';
import Categories from './components/Categories';
import ShoppingCart from './components/ShoppingCart';
import './globals.css';

export default function Home() {
    const sampleRecipes = [
        {
            title: "🥣 Наваристый борщ",
            time: 60,
            calories: 210,
            ingredients: "свекла, капуста, картофель, морковь, мясо, сметана",
            category: "Супы"
        },
        {
            title: "🍝 Спагетти Карбонара",
            time: 25,
            calories: 320,
            ingredients: "спагетти, бекон, яйца, пармезан, сливки",
            category: "Основные блюда"
        },
        {
            title: "🥗 Цезарь с курицей",
            time: 20,
            calories: 180,
            ingredients: "салат, курица, сухарики, пармезан, соус цезарь",
            category: "Салаты"
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)', position: 'relative' }}>
            {/* ФОН С ЛОГО - ХОРОШО ВИДИМЫЙ */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90vw',
                    height: '90vh',
                    backgroundImage: 'url("/logo.jpeg")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.3,        
                    filter: 'blur(0.5px)', 
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Header />
                <ShoppingCart />

                <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px', padding: '60px 20px' }}>
                        <h1 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '20px' }}>
                            🍲 Батин Суп
                        </h1>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-primary)', maxWidth: '600px', margin: '0 auto' }}>
                            Найди рецепт своей мечты. Быстро, вкусно, по-батиному.
                        </p>
                    </div>

                    <Categories />
                    <SearchFilters />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
                        {sampleRecipes.map((recipe, index) => (
                            <RecipeCard
                                key={index}
                                title={recipe.title}
                                time={recipe.time}
                                calories={recipe.calories}
                                ingredients={recipe.ingredients}
                                category={recipe.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}