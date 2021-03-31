import React from 'react';

const TitleSection = ({ title, addClassPage = 0 }) => {
  return (
    <div className={`title-section ${addClassPage}`}>
      <h2 className="title-text">{title}</h2>
    </div>
  );
};

export default TitleSection;
