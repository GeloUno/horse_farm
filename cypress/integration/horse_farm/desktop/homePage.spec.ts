
import { secondDataAttractionLeftSection, secondDataAttractionRightSectionImage, thirdDataAttractionLeftSection, fourthDataAttractionLeftSection, fifthDataAttractionLeftSection, fifthDataAttractionRightSectionImage, thirdDataAttractionRightSectionImage, fourthDataAttractionRightSectionImage, firstDataAttractionLeftSection, firstDataAttractionRightSectionImage, buttonsCaruselaShould, checkTitleSection } from '../utility/attriaction';
import { Section } from "../utility/Section";
import { ToggleVisibilty } from "../utility/ToggleVisibilty";

describe('Home Screen horse farm no user', () => {
    beforeEach(() => {
        // cy.viewport('ipad-2', 'landscape')
        // cy.visit('/');
    })
    before(() => {
        Cypress.config({
            "viewportHeight": 720,
            'viewportWidth': 1280
        })
        cy.visit('/');
    })
    context('visit', () => {
        it('should open side', () => {
            // cy.viewport(1280, 720)
            cy.visit('/');
        });
    });
    context('navbar', () => {
        it('should be visible', () => {
            cy.get('.navbar').should('be.visible')
        })
        it('should have menu right and visibile', () => {
            cy.get('.menu-right').should('be.visible')
        })
        it('should have menu left not be visible', () => {
            cy.get('.menu-left').should('not.be.visible')
        })
        it('should have button link home', () => {
            cy.get('[data-cy=linkHomePage]').should('be.visible')
        });
        it('should have button link attractions', () => {
            cy.get('[data-cy=linkAttraction]').should('be.visible')
        });

        it('should have button link opinions', () => {
            cy.get('[data-cy=linkOpinions]').should('be.visible')
        });

        it('should have button link contact', () => {
            cy.get('[data-cy=linkContact]').should('be.visible')
        });

        it('should have button link galery', () => {
            cy.get('[data-cy=linkGalery]').should('be.visible')
        });
        it('should have button link login', () => {
            cy.get('[data-cy=linkLogin]').should('be.visible')
        });
    })
    context('navbar link content', () => {

        it('link button home should have text główna', () => {
            cy.get('[data-cy=linkHomePage]').contains('Główna')
        });
        it('link button attractions should have text atrakcje', () => {
            cy.get('[data-cy=linkAttraction]').contains('Atrakcje')
        });

        it('link button Opinions should have text opinie', () => {
            cy.get('[data-cy=linkOpinions]').contains('Opinia')
        });

        it('link button contact should have text contact', () => {
            cy.get('[data-cy=linkContact]').contains('Kontakt')
        });

        it('link button galery should have text galeria', () => {
            cy.get('[data-cy=linkGalery]').contains('Galeria')
        });
        it('link button login should have text zaloguj', () => {
            cy.get('[data-cy=linkLogin]').contains('Zaloguj')
        });
    })
    context('header background image', () => {

        it('image should be visible', () => {
            cy.get('[data-cy=headerBackgroundImage]').should('be.visible')
        });

        it('image should have class', () => {
            cy.get('[data-cy=headerBackgroundImage]').should('have.class', 'image-header')
        });

        it('image should have sytle and url', () => {
            cy.get('[data-cy=headerBackgroundImage]').should('have.css', 'background-image').and('include', `/horse_farm/static/media/HorseBackground_ttbpbw_c_scale,w_1613.06bd809a.png`)
        });
    });

    context('header welcome text', () => {

        it('image should be visible', () => {
            cy.get('[data-cy=headerText]').should(`be.visible`)
        });
        it('image should have class', () => {
            cy.get('[data-cy=headerText]').contains(`Nauka jazdy konnej`)
        });
    })
    context('attraction title', () => {

        checkTitleSection(Section.Attractions)

    })
    context('carousel check event button next first click', () => {

        it('click button next', () => {
            cy.get('[data-testid=attractionNextButton]').click()
        })

        secondDataAttractionLeftSection()
        secondDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);


    });
    context('carousel check event button next second click', () => {

        it('click button next', () => {
            cy.get('[data-testid=attractionNextButton]').click()
        })

        thirdDataAttractionLeftSection()
        thirdDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);


    });
    context('carousel check event button next third click', () => {

        it('click button next', () => {
            cy.get('[data-testid=attractionNextButton]').click()
        })

        fourthDataAttractionLeftSection()
        fourthDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);


    });
    context('carousel check event button next fourth click', () => {

        it('click button next', () => {
            cy.get('[data-testid=attractionNextButton]').click()
        })
        fifthDataAttractionLeftSection()
        fifthDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);


    });
    context('carousel check event button next fifth click back to firest data', () => {

        it('click button next', () => {
            cy.get('[data-testid=attractionNextButton]').click()
        })

        firstDataAttractionLeftSection()
        firstDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);


    });
    context('carousel check event press first button click', () => {
        it('click first button', () => {
            cy.get('[data-testid=buttonNumberAtraction-0]').click()
        })

        firstDataAttractionLeftSection()
        firstDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);

    })
    context('carousel check event press second button click', () => {
        it('click second button', () => {
            cy.get('[data-testid=buttonNumberAtraction-1]').click()
        })
        secondDataAttractionLeftSection()
        secondDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);

    })
    context('carousel check event press third button click', () => {
        it('click second button', () => {
            cy.get('[data-testid=buttonNumberAtraction-2]').click()
        })
        thirdDataAttractionLeftSection()
        thirdDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);

    });
    context('carousel check event press fourth button click', () => {
        it('click second button', () => {
            cy.get('[data-testid=buttonNumberAtraction-3]').click()
        })

        fourthDataAttractionLeftSection()
        fourthDataAttractionRightSectionImage(ToggleVisibilty.BeVisible)
        buttonsCaruselaShould(ToggleVisibilty.BeVisible);

    });
    context('opinion title', () => {
        checkTitleSection(Section.Opinions)
    });
    context('opinion section', () => {
        it('should have second title troche o nas', () => {
            cy.get('[data-cy=opinionHeader] >').should(`be.visible`).and('have.text', `Trochę oNAS`)
        });
        it('should section opinion be visible', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').should('be.visible')
        });
        it('should have four opinion user', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').find('[data-cy=opinionUserArticle]').should('have.length', '4')
        });

        it('should first user opinion be visible', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').find('[data-cy=opinionUserArticle]').eq(0).should('be.visible')
        });
        it('should second user opinion be visible', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').find('[data-cy=opinionUserArticle]').eq(1).should('be.visible')
        });
        it('should third user opinion be visible', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').find('[data-cy=opinionUserArticle]').eq(2).should('be.visible')
        });
        it('should fourth user opinion be visible', () => {
            cy.get('[data-cy=opinionSectionAllUsers]').find('[data-cy=opinionUserArticle]').eq(3).should('be.visible')
        });

    });
    context('contact title', () => {
        checkTitleSection(Section.Contact)
    })
    context('contact section', () => {

        it('should be visible', () => {
            cy.get('[data-cy=contactSection] >').should(`be.visible`)
        });
        it('should contact full name', () => {
            cy.get('[data-testid=contactFullName]').should(`be.visible`)
        });
        it('should contact full name have text', () => {
            cy.get('[data-testid=contactFullName]').should(`have.text`, `Aleksandra Rosińska`)
        });
        it('should contact have phone', () => {
            cy.get('[data-testid=contactPhone]').should(`be.visible`)
        });
        it('should contact phone have text', () => {
            cy.get('[data-testid=contactPhone]').should(`have.text`, `507 171 027`)
        });
        it('should contact have address', () => {
            cy.get('[data-testid=contactGoogleMapLocation]').should(`be.visible`)
        });
        it('should contact address have text', () => {
            cy.get('[data-testid=contactGoogleMapLocation]').should(`have.text`, `24-200 Bełżyce`)
        });
        it('should contact address link to google map', () => {
            cy.get('[data-testid=contactGoogleMapLocation]').should(`have.attr`, `href`, `https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a`)
        });
        it('should contact have social media', () => {
            cy.get('[data-testid=contactSocialmedia]').should(`be.visible`)
        });
        it('should contact social media icon map have link', () => {
            cy.get('[data-testid=contactGoogleMapLocation]').should(`have.attr`, `href`, `https://maps.google.com/maps?q=polska+belzyce+mikolaja+kopernika+165a`)
        });
    });
    context('footer', () => {
        it('should be visible', () => {
            cy.get('[data-testid=logo_developer]').should('be.visible')
        });
        it('should hve text', () => {
            cy.get('[data-testid=logo_developer]').should('have.text', 'HelloGello™')
        });
    })

});
