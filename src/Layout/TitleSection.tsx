import React from 'react';

interface TitleSectionProps {
  title: string,
  addClassPage?: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  addClassPage = 0 }) => {
  return (
    <div className={`title-section ${addClassPage}`}>
      <h2 className="title-text">{title}</h2>
    </div>
  );
};

export default TitleSection;
