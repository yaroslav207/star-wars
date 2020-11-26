import React from 'react';
import {Link} from "react-router-dom";

import './header.css';

function Header() {
  return (
    <div className="header">
      <h1>Star DB</h1>
      <ul className="header-nav">
        <li><Link to="/people">People</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/starships">Starships</Link></li>
      </ul>
    </div>
  );
}

export default Header;
