

describe('visit page horse farm', () => {
    it('visit https://gelouno.github.io/horse_farm', () => {
        cy.visit("/")
        // cy.visit("http://localhost:3000/")
        // cy.visit("https://gelouno.github.io/horse_farm")
    });
})
describe('open modal login', () => {
    it('should open login modal', () => {
        cy.get(':nth-child(6) > h2 > .sm-hiden').click()
    });

});
describe('check elements in login modal', () => {

    it('should login modal have socila media body', () => {
        cy.get('.socialLoginBody').should('be.visible')
        cy.get('.socialLoginText').should('be.visible')
        cy.get('.socialLoginText').contains('zaloguj przez:')
        cy.get('.socilaMediaLoginGrup').should('be.visible')
        cy.get('.socilaMediaLoginGrup > :nth-child(1)').should('be.visible')
        cy.get('.socilaMediaLoginGrup > :nth-child(2)').should('be.visible')
    });

    it('should social media button have font awesome icon', () => {
        cy.get('.socilaMediaLoginGrup > :nth-child(1)').children('.fab')
        cy.get('.socilaMediaLoginGrup > :nth-child(1)').children('.fa-google')
        cy.get('.socilaMediaLoginGrup > :nth-child(2)').children('.fab')
        cy.get('.socilaMediaLoginGrup > :nth-child(2)').children('.fa-facebook-f')
    });

    it('should login modal have login form by email and password', () => {
        cy.get('[for="email"]').should('be.visible')
        cy.get('[for="email"]').contains('e-mail:')
        cy.get('#email').should('be.visible')
        cy.get('[for="password"]').should('be.visible')
        cy.get('[for="password"]').contains('hasło')
        cy.get('#password').should('be.visible')
        cy.get('form > .btn').should('be.visible')
        cy.get('form > .btn').contains('zaloguj')
    });
    it('should input login form be empty ', () => {
        cy.get('#email').should('be.empty')
        cy.get('#password').should('be.empty')
    })
    it('should have buttons register and remember password', () => {
        cy.get('.btnSignInRemindPassword > :nth-child(1)').should('be.visible')
        cy.get('.btnSignInRemindPassword > :nth-child(2)').should('be.visible')
    })
    it('button register should have text Rejestracja', () => {
        cy.get('.btnSignInRemindPassword > :nth-child(1)').contains('Rejesteacja')

    })
    it('button remember password should have text Resetuj hasło', () => {
        cy.get('.btnSignInRemindPassword > :nth-child(2)').contains('Resetuj hasło')
    })
    it('should have back or close button', () => {
        cy.get('.inputModalContainer > .fas').should('be.visible')
    })
    it('should modal have image', () => {
        cy.get('.loginModal').find('img').should('be.visible')
        cy.get('.loginModal').find('img').should('have.attr', 'src', '/horse_farm/static/media/LoginHorse.70e56d4d.png')

    })
});

