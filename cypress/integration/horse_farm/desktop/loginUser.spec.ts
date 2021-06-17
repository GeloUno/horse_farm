
import { secondDataAttractionLeftSection, secondDataAttractionRightSectionImage, thirdDataAttractionLeftSection, fourthDataAttractionLeftSection, fifthDataAttractionLeftSection, fifthDataAttractionRightSectionImage, thirdDataAttractionRightSectionImage, fourthDataAttractionRightSectionImage, firstDataAttractionLeftSection, firstDataAttractionRightSectionImage, buttonsCaruselaShould, checkTitleSection } from '../utility/attriaction';
import { Section } from "../utility/Section";
import { ToggleVisibilty } from "../utility/ToggleVisibilty";

describe('Login to Horse Farm as User', () => {
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
    context('login', () => {
        it('should open modal', () => {
            cy.get('[data-cy=linkLogin]').should('be.visible')
            cy.get('[data-cy=linkLogin]').click()
        })
        it('input login form email and password should be empty', () => {
            cy.get('[data-testid=inputLoginFormEmail]').should('be.empty');
            cy.get('[data-testid=inputLoginFormPassword]').should('be.empty');

        });
        it('should type email in input form', () => {
            cy.get('[data-testid=inputLoginFormEmail]').type('hellogellotest@gmail.com');

        })
        it('should type password in input form', () => {
            cy.get('[data-testid=inputLoginFormPassword]').type('12345678')
        });
        it('should have value after type input form', () => {
            cy.get('[data-testid=inputLoginFormEmail]').should('have.value', 'hellogellotest@gmail.com');
            cy.get('[data-testid=inputLoginFormPassword]').should('have.value', '12345678')
        });
        it('should login after click zaloguj', () => {
            cy.get('[data-testid=inputLoginFormButton]').click()

        });

    })



});
