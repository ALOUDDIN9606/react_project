import React, { useState } from 'react';
import "./Header.scss";
import photo from "../../assets/Logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='header'>
        <div className="header__top">
            <div className="container">
                <nav className='navbar'>
                    <div className="navbar__left">
                        <ul className='navbar__link'>
                            <a className='link__a' href="#">Home</a>
                            <a className='link__a' href="#">About</a>
                            <a className='link__a' href="#">Menu</a>
                            <a className='link__a' href="#">Reservation</a>
                        </ul>
                    </div>
                    <div className="navbat__medium">
                        <img src={photo} alt="" />
                    </div>
                    <div className="icon">
                        <BsMenuButtonWideFill onClick={toggeMenu} style={{ cursor: 'pointer' }} className='search'/>
                        <FaSearch className='icons'/>
                        <FaBox className='icons'/>
                    </div>
                    <div className="navbar__rigth">
                        <div className="navbar__menu">
                            <a className='menu__a' href="#">Pages</a>
                            <a className='menu__a' href="#">Shop</a>
                            <a className='menu__a' href="#">Content</a>
                            <FaSearch style={{fontSize: "18px"}}/>
                            <FaBox/>
                        </div>
                    </div>
                    <div className={`menu__category ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#">About</a>
                        <a href="#">Reservation</a>
                        <a href="#">Pages</a>
                        <a href="#">Shop</a>
                        <a href="#">Content</a>
                    </div>
                </nav>
            </div>
        </div>
        <div className="header__bottom">
            <div className="container_2">
                <div className="bottom__box">
                    <div className="bottom__left">
                        <h1>Enjoy Your Morning Coffee.</h1>
                        <p>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
                        <button className='btn'>TEST COFFEE</button>
                    </div>
                    <div className="bottom__rigth"></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header




