import React from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import RecipePopup from './components/RecipePopup';
import SummerRecipes from './components/SummerRecipes';
import EditorsPick from './components/EditorsPick';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          <Header />
          <RecipePopup/>
          <MainSection/>
          <SummerRecipes/>
          <EditorsPick/>
          <Footer/>
         
        </div>
      );
}

export default App
