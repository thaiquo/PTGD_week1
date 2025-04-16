import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ color: '#eee', marginBottom: '15px' }}>About Us</h4>
          <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '10px',
                borderRadius: '5px 0 0 5px',
                border: 'none',
                fontSize: '14px',
                width: '200px',
              }}
            />
            <button
              style={{
                backgroundColor: '#ff69b4',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '0 5px 5px 0',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Send
            </button>
          </div>
        </div>

        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h4 style={{ color: '#eee', marginBottom: '15px' }}>Learn More</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Our Cooks
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                See Our Features
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h4 style={{ color: '#eee', marginBottom: '15px' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Gift Subscription
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h4 style={{ color: '#eee', marginBottom: '15px' }}>Recipes</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                What to Cook This Week
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Pasta
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Dinner
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Healthy
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Vegetarian
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Vegan
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '30px', borderTop: '1px solid #444', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="HinhAnh/footer.png" alt="Cheffy Logo" style={{ height: '30px', marginRight: '10px' }} />
         
        </div>
        <p style={{ fontSize: '12px', color: '#888' }}>
          © 2023 Cheffy Company. <a href="#" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a> | <a href="#" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;