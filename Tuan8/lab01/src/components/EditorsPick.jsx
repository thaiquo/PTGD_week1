import React from 'react';
import RecipeSection from './RecipeSection';

function EditorsPick() {
  const editorsRecipes = [
    {
      title: 'Stuffed sticky rice ball',
      image: 'HinhAnh/f9.png',
      prepTime: '30 minutes',
      author: 'Jennifer King',
      authorImage: 'HinhAnh/user1.png',
      description: 'Stuffed sticky rice balls: a delightful Asian treat with chewy, glutinous rice and a flavorful, surprise filling.',
    },
    {
      title: 'Strawberry smoothie',
      image: 'HinhAnh/f10.png',
      prepTime: '40 minutes',
      author: 'Matthew Martinez',
      authorImage: 'HinhAnh/user2.png',
      description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy treat offers.',
    },
    {
      title: 'Latte Art',
      image: 'HinhAnh/f11.png',
      prepTime: '11 minutes',
      author: 'Sarah Hill',
      authorImage: 'HinhAnh/user3.png',
      description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte.',
    },
    {
      title: 'Butter fried noodles',
      image: 'HinhAnh/f12.png',
      prepTime: '18 minutes',
      author: 'Julia Lopez',
      authorImage: 'HinhAnh/user.png',
      description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.',
    },
  ];

  return (
    <div style={{ padding: '40px 20px' }}>
      <RecipeSection
        title="Editor's Pick"
        description="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
        recipes={editorsRecipes}
        isVideoSection={false}
        showDetails={true}
      />
    </div>
  );
}

export default EditorsPick;