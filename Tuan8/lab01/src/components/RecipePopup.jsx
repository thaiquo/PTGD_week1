import React from 'react';

const RecipePopup = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '300px',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffd700',
          color: '#333',
          padding: '5px',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Recipe of the day
      </div>
     
      <h2 style={{ color: '#ff69b4', margin: '10px 0' }}>Salad Caprese</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and
        balsamic vinegar create a refreshing dish for lunch or appetizer.
      </p>
      <div style={{ color: '#999', fontSize: '12px', margin: '10px 0' }}>
      <img  src="HinhAnh/user.png" alt="" />
      <h4 style={{ color: 'black', margin: '10px 0' }}>Salad Caprese</h4></div>
      <button
        style={{
          backgroundColor: '#ff69b4',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        View now →
      </button>
    </div>
  );
};

export default RecipePopup;