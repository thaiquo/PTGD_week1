import React from 'react';
import RecipeSection from './RecipeSection';

function SummerRecipes() {
  const summerRecipes = [
    { title: 'Italian-style tomato', image: 'HinhAnh/f1.png' },
    { title: 'Spaghetti with vegetables', image: 'HinhAnh/f2.png' },
    { title: 'Lotus delight salad', image: 'HinhAnh/f3.png' },
    { title: 'Snack cakes', image: 'HinhAnh/f4.png' },
  ];

  const videoRecipes = [
    { title: 'Salad with cabbage and shrimp', image: 'HinhAnh/f5.png', prepTime: '32 minutes' },
    { title: 'Salad of corn beans, shrimp and potatoes', image: 'HinhAnh/f6.png', prepTime: '20 minutes' },
    { title: 'Sunny-side up fried egg', image: 'HinhAnh/f7.png', prepTime: '15 minutes' },
    { title: 'Lotus delight salad', image: 'HinhAnh/f8.png', prepTime: '20 minutes' },
  ];

  return (
    <div style={{ padding: '40px 20px' }}>
      <RecipeSection
        title="This Summer Recipes"
        description="We have all your Independence Day sweets covered."
        recipes={summerRecipes}
        isVideoSection={false}
        showDetails={false}
      />
      <RecipeSection
        title="Recipes With Videos"
        description="Cooking Up Culinary Creations with Step-by-Step Videos"
        recipes={videoRecipes}
        isVideoSection={true}
        showDetails={false}
      />
    </div>
  );
}

export default SummerRecipes;