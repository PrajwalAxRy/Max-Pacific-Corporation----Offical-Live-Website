import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import logo from '../assests/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? "whitespace-nowrap text-sm font-medium text-orange-500 hover:text-orange-500"
      : "whitespace-nowrap text-sm font-normal text-white hover:text-orange-500";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-customBlack shadow top-0 w-full z-10">
      <div className="mx-auto px-10">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start w-0 flex-1">
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
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle}>
              <FontAwesomeIcon className='h-6 text-white' icon={faBars} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <div ref={mobileMenuRef} className="fixed inset-y-0 right-0 z-50 flex flex-col items-center gap-y-6 bg-customBlack w-[30%] min-w-52 md:hidden">
              <button onClick={handleMobileMenuToggle} className="self-end p-4 text-white">
                <FontAwesomeIcon className='h-6 mr-5 mb-6' icon={faTimes} />
              </button>
              <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
              <NavLink to="/company/about" className={getNavLinkClass}>About Us</NavLink>
              <NavLink to="/company/team" className={getNavLinkClass}>Our Team</NavLink>
              <NavLink to="/company/gallery" className={getNavLinkClass}>Gallery</NavLink>
              <NavLink to="/blogs" className={getNavLinkClass}>Blogs</NavLink>
              <NavLink to="/services" className={getNavLinkClass}>Services</NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
              <Button text="Track Shipment" link='/TrackShipment' />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
