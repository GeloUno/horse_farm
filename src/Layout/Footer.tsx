import React from 'react';

const Footer: React.FC = () => {
  const footerStyleDiv: React.CSSProperties = {
    display: 'block',
  };
  const footerStyleLink: React.CSSProperties = {
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '1rem',
    margin: '1rem',
  };
  const footerStyleH2: React.CSSProperties = {
    display: 'block',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  return (
    <div
      style={footerStyleDiv}>
      <h2
        data-testid='logo_developer'
        style={footerStyleH2}>
        <a
          href="#"
          style={footerStyleLink}>
          Hello<strong>Gello&trade;</strong>
        </a>
      </h2>
    </div>
  );
}

export default Footer;
