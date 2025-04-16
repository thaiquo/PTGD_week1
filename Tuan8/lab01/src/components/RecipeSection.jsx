import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeSection({ title, description, recipes, isVideoSection, showDetails }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#ff69b4', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>
        {title}
      </h2>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px', textAlign: 'center' }}>
        {description}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          justifyItems: 'center',
        }}
      >
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            image={recipe.image}
            isVideo={isVideoSection}
            prepTime={recipe.prepTime}
            author={recipe.author}
            authorImage={recipe.authorImage}
            description={recipe.description}
            showDetails={showDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeSection;