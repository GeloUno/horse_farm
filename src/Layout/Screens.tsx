import React, { useMemo } from 'react';
import Attractions from './Attractions';
import Contact from './Contact';
import Header from './Header';
import Opinions from './Opinions';
import TitleSection from './TitleSection';

export const HomeScreen: React.FC = () => {


  const renderOnlyOnceHomeScreen = useMemo(() =>
    <>
      <Header />
      <AttractionsScreen />
      <OpinionsScreen />
      <ContactScreen />
    </>
    ,
    [])

  return (
    <>
      {renderOnlyOnceHomeScreen}
    </>
  );
};

export const AttractionsScreen = () => {
  return (
    <>
      <TitleSection
        title="Atrakcje"
        addClassPage="attractions" />
      <Attractions />
    </>
  );
};

export const OpinionsScreen = () => {
  return (
    <>
      <TitleSection
        title="Opinia"
        addClassPage="opinions" />
      <Opinions
      />
    </>
  );
};

export const ContactScreen = () => {
  return (
    <>
      <TitleSection
        title="Kontakt"
        addClassPage="contact" />
      <Contact />
    </>
  );
};


