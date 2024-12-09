import { useState } from 'react';

const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  return (
    <div className="header">
      <div className="logo-container">
        <img 
          className='logo'
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2C-food%2C-logo%2C-cafe-logo%2C-design-template-052aadc58b9426a5b3e9e4a366c8deb3_screen.jpg?ts=1732776014" alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;