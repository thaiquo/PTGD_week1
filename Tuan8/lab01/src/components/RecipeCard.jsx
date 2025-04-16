import React from 'react';

function RecipeCard({ title, image, isVideo, prepTime, author, authorImage, description, showDetails }) {
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
        <h3 style={{ fontSize: '16px', color: '#333', margin: '0', marginBottom: showDetails ? '5px' : '0' }}>
          {title}
        </h3>
        {showDetails && (
          <>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 5px' }}>{prepTime}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <img
                src={authorImage || 'HinhAnh/authors/default-author.png'} // Use authorImage with a fallback
                alt={author}
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '5px' }}
              />
              <span style={{ fontSize: '12px', color: '#666' }}>{author}</span>
            </div>
            <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>{description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;