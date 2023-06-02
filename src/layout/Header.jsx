import React, { useState } from 'react';
import { TbCards } from 'react-icons/tb';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className='header'>
      <nav className='navbar'>
        <Link
          to='/'
          className='navbar__logo'
        >
          <TbCards
            size={26}
            style={{ color: 'fff9' }}
          />
          Movie Cards
        </Link>

        <div
          className='navbar__hamburger'
          onClick={handleClick}
        >
          {menu ? (
            <FaTimes
              size={24}
              style={{ color: 'ffffff' }}
            />
          ) : (
            <FaBars
              size={24}
              style={{ color: 'ffffff' }}
            />
          )}
        </div>

        <ul className={menu ? 'navbar__nav-menu active' : 'navbar__nav-menu'}>
          <li className='navbar__nav-item'>
            <Link
              to='/'
              // spy={true}
              // smooth={true}
              // offset={-50}
              // duration={700}
              onClick={closeMenu}
            >
              Hero
            </Link>
          </li>

          <li className='navbar__nav-item'>
            <Link
              to='about'
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Header };
