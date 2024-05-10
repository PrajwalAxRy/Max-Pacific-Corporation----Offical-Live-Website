import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text = 'Request Quote', link = '/getQuote' }) => {
  const navigate = useNavigate();

  // Responsive style adjustments
  const buttonStyle = {
    width: 'auto', // Allow button width to grow with the text or specify max-width
    minWidth: '164px', // Ensure the button does not become too small
    height: 'auto', // Use auto height to adjust with padding
    paddingTop: '18px', // Adjusted for simplicity
    paddingBottom: '18px',
    paddingLeft: '24px',
    paddingRight: '24px',
    background: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
    cursor: 'pointer',
    boxSizing: 'border-box', // Ensures padding is included in width calculation
    borderRadius: '4px', // Optional: for rounded corners
    border: '1px solid transparent' // Optional: for better button definition
  };

  const textStyle = {
    textAlign: 'center',
    color: '#23212A',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '21.60px',
    wordWrap: 'break-word'
  };

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div style={buttonStyle} onClick={handleClick}>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default Button;
