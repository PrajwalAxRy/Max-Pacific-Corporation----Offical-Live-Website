import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import logo from '../assests/Logo.png';

const HeaderBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? "whitespace-nowrap text-sm font-medium text-orange-500 hover:text-orange-500"
      : "whitespace-nowrap text-sm font-normal text-white hover:text-orange-500";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-customBlack shadow fixed top-0 w-full z-10">
      <div className="mx-auto px-10 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className={getNavLinkClass}>
              <img className="w-auto h-12" src={logo} alt="Your Company Logo" />
            </NavLink>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-10">
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className={getNavLinkClass({isActive: isDropdownOpen})}>
                Company
              </button>
              {isDropdownOpen && (
                <div className="absolute flex flex-col bg-customBlack mt-2 shadow-lg rounded-sm pl-4 pr-12 py-6 z-20">
                  <div className="flex-1 pb-2"><NavLink to="/company/about" className={getNavLinkClass}>About Us</NavLink></div>
                  <div className="flex-1 pb-2"><NavLink to="/company/team" className={getNavLinkClass}>Our Team</NavLink></div>
                  <div className="flex-1"><NavLink to="/company/gallery" className={getNavLinkClass}>Gallery</NavLink></div>
                </div>
              )}
            </div>


            <NavLink to="/blogs" className={getNavLinkClass}>Blogs</NavLink>
            <NavLink to="/services" className={getNavLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
            <Button text="Track Shipment" link='/TrackShipment' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
