import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                      <Link to="/" className="navbar-logo" onClick={closeMenu}>
                          <i className='fab fa-btc' />
                      </Link>
                      <div className="menu-icon" onClick={handleClick}>
                          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                      </div>
                      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                          <li className="nav-item">
                              <Link to='/' className="nav-links" onClick={closeMenu}>
                                  Home
                              </Link>
                          </li>
                          <li className="nav-item">
                            <a target="_blank" className="nav-links" rel="noreferrer" href="https://github.com/bcourtney1029">
                                Github
                            </a>
                          </li>
                          <li className="nav-item">
                            <a target="_blank" className="nav-links" rel="noreferrer" href="https://www.linkedin.com/in/bryan-courtney-ab97561ab/">
                                LinkedIn
                            </a>
                          </li>
                      </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header
