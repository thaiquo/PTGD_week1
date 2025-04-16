import React from 'react';

function RecipeCard({ title, image, isVideo }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '200px',
        position: 'relative',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      {isVideo && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#ff69b4',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: '16px' }}>▶</span>
        </div>
      )}
      <div style={{ padding: '10px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '16px', color: '#333', margin: '0' }}>{title}</h3>
      </div>
    </div>
  );
}

export default RecipeCard;