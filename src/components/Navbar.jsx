import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router';

const Navbar = ({ token, settoken }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'synthwave' : 'light'));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    settoken('');
    closeDropdown();
    navigate('/');
  };

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute('open');
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown" ref={dropdownRef}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
            {token ? (
              <li><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <>
                <li><Link to="/" onClick={closeDropdown}>Login</Link></li>
                <li><Link to="/signup" onClick={closeDropdown}>Signup</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Brand Name */}
        <a className="btn btn-ghost hidden md:block text-xl">EmployWise Assignment  </a>
        <a className="btn btn-ghost  sm:block md:hidden text-xl">EmployWise  </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
          {token ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <>
              <li><Link to="/" onClick={closeDropdown}>Login</Link></li>
              <li><Link to="/signup" onClick={closeDropdown}>Signup</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" checked={theme === 'synthwave'} onChange={toggleTheme} />
          <svg className="swap-off h-5 w-5 lg:h-8 lg:w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg className="swap-on h-5 w-5 lg:h-8 lg:w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
