import { useState } from 'react';
import { Link } from 'react-router';

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="login" onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;