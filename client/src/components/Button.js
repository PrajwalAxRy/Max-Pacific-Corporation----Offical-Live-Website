import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text = 'Request Quote', link = '/getQuote' }) => {

  const navigate = useNavigate();

  const buttonStyle = {
    width: '164px',
    height: '100%',
    paddingTop: '18.26px',
    paddingBottom: '18.26px',
    paddingLeft: '23.48px',
    paddingRight: '24.48px',
    background: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
    cursor: 'pointer',
  };

  const textStyle = {
    textAlign: 'center',
    color: '#23212A',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '21.60px',
    wordWrap: 'break-word',
  };

  const handleClick = () => {
    navigate(link); // Navigate to the value of the 'link' prop
  };

  return (
    <div style={buttonStyle} onClick={handleClick}>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default Button;
