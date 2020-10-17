import React from 'react';

export const ShowMobileInfo = () => {
  return (
    <div>
      <h2>width: {window.screen.width}</h2>
      <h2>height: {window.screen.height}</h2>
      <h2>availWidth: {window.screen.availWidth}</h2>
      <h2>availHeight: {window.screen.availHeight}</h2>
      <h2>orientation: {window.screen.orientation.type}</h2>
      <h2>pixelDepth: {window.screen.pixelDepth}</h2>
    </div>
  );
};
