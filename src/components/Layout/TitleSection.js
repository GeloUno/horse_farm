import React from 'react';

const TitleSection = ({ title, idPage = 0 }) => {
  return (
    <div className="title-section" id={idPage}>
      <h2 className="title-text">{title}</h2>
    </div>
  );
};

export default TitleSection;
