import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Sun, Moon, Menu } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const changeTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar' ref={menuRef}>
      <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'open' : ''}`}>
        <Menu />
      </button>

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
        <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
        <Link to='/projects' onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
         <Link to='/register' onClick={() => setIsOpen(false)}>Register</Link>

      </div>
         <img src={logo} className='logo-img' alt="logo" />

      <button className="theme-btn" onClick={changeTheme}>
        {isDark ? <Moon /> : <Sun />}
      </button>

    </nav>
  );
};

export default NavBar;
