import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="HinhAnh/brand.png"
          alt="Cheffy Logo"
          style={{ height: '50px', marginRight: '30px' }}
        />
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff69b4' }}>
          Cheffy
        </span>
      </div>
      <div>
        <input
          type="text"
          placeholder="What would you like to cook?"
          style={{
            padding: '8px',
            width: '300px',
            border: '1px solid #ddd',
            borderRadius: '20px',
            fontSize: '16px',
          }}
        />
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {['What to cook', 'Recipes', 'Ingredients', 'Occasion', 'About Us'].map((link) => (
          <a key={link} href="#" style={{ textDecoration: 'none', color: '#333' }}>
            {link}
          </a>
        ))}
        <a href="#" style={{ textDecoration: 'none', color: '#ff69b4' }}>
          Login
        </a>
        <button
          style={{
            backgroundColor: '#ff69b4',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
