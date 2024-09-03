import React from 'react';
import { Link } from 'react-router-dom';


const Menu = ({ menuItems, language }) => {
  return (
    <div className="menu">
    <nav>
      <ul>
        <li>
          <Link to="/home">
            
            <span>{menuItems.Home}</span>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            
            <span>{menuItems.Movies}</span>
          </Link>
        </li>
        <li>
          <Link to="/tv-shows">
            
            <span>{menuItems['TV Shows']}</span>
          </Link>
        </li>
        <li>
          <Link to="/sports">
           
            <span>{menuItems.Sports}</span>
          </Link>
        </li>
        <li>
          <Link to="/live">
            
            <span>{menuItems.Live}</span>
          </Link>
        </li>
      </ul>
    
      </nav>
    </div>
  );
};

export default Menu;