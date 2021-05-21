import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container container-contact">
      <section className="body-section contact-section" data-cy='contactSection'>
        <div>
          <h2 data-testid='contactFullName'>Aleksandra Rosińska</h2>
          <p>
            <span>tel: </span>
            <a data-testid='contactPhone' href="tel:507171027">507 171 027</a>
          </p>
        </div>
        <div>
          <address data-testid='contactAddress'>
            <span>adres: </span>
            <a data-testid='contactGoogleMapLocation'
              href="https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a"
              target="_blank"
              rel="noopener noreferrer"
            >
              24-200 Bełżyce
            </a>
          </address>
          <address>
            <a
              href="https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mikołaja Kopernika 165A
            </a>
          </address>
        </div>
        <div data-testid='contactSocialmedia' className="socialMedia">
          <i className="fab fa-whatsapp-square"></i>
          <a
            href="https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <i className="fab fa-facebook-messenger"></i>
        </div>
      </section>
      <section className="right-section"></section>
    </div>
  );
};

export default Contact;
