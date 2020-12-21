import React from 'react';

function Footer({ linkHelloGello }) {
  const footerStyleDiv = {
    diplay: 'block',
  };
  const footerStyleLink = {
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '1rem',
    margin: '1rem',
  };
  const footerStyleH2 = {
    display: 'block',
    fontWeight: '400',
    textAlign: 'center',
  };
  return (
    <div style={footerStyleDiv}>
      <h2 style={footerStyleH2}>
        <a href={linkHelloGello} style={footerStyleLink}>
          Hello<strong>Gello&trade;</strong>
        </a>
      </h2>
    </div>
  );
}

export default Footer;
