import { CSSProperties } from '@material-ui/styles';
import React from 'react';

const Footer: React.FC = () => {
  const footerStyleDiv: CSSProperties = {
    diplay: 'block',
  };
  const footerStyleLink: CSSProperties = {
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '1rem',
    margin: '1rem',
  };
  const footerStyleH2: CSSProperties = {
    display: 'block',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  return (
    <div style={footerStyleDiv}>
      <h2 style={footerStyleH2}>
        <a style={footerStyleLink}>
          Hello<strong>Gello&trade;</strong>
        </a>
      </h2>
    </div>
  );
}

export default Footer;
