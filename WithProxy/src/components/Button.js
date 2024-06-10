import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ text = 'Request Quote', link = '/getQuote' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="Button" onClick={handleClick}>
      {text}
    </div>
  );
};

export default Button;
