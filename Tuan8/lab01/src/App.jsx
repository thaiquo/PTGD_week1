import React from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import RecipePopup from './components/RecipePopup';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          <Header />
          <RecipePopup/>
          <MainSection/>
         
        </div>
      );
}

export default App
