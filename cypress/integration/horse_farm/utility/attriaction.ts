import { Section, sectionToPolish } from "./Section";
import { ToggleVisibilty } from "./ToggleVisibilty";

interface NumberToSting {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
}

const numberAsString: NumberToSting = {
    0: "first",
    1: "second",
    2: 'third',
    3: 'fourth',
    4: 'fifth',
}

export const buttonsCaruselaShould = (visible: ToggleVisibilty) => {
    for (let index = 0; index < 5; index++) {

        it(`should ${numberAsString[index]} button carusela ${visible}`, () => {
            cy.get(`[data-testid=buttonNumberAtraction-${index}]`).should(visible)
        });
    }
}

export const firstDataAttractionLeftSection = () => {
    it('atraction should be visible', () => {
        cy.get('[data-cy=title-section-attractions]').should(`be.visible`)
    });

    it('title should be visible', () => {
        cy.get('[data-testid=attractionTitle]').should(`be.visible`)
    });

    it('title should have text atrakcje', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').contains('JazdaKonna')
    });


    it('description should be visible', () => {
        cy.get('[data-testid=attractionDescription]').should(`be.visible`)
    });

    it('description should have text', () => {
        cy.get('[data-testid=attractionDescription]').should('have.text', 'serdecznie zapraszamy na naukę jazdy konnej, zarówno tych dużych jak i najmniejszych, tych z doświadczonych, oraz tych którzy chcą się nauczyć tego pięknego sportu')
    });

    it('button next should be visible', () => {
        cy.get('[data-testid=attractionNextButton]').should(`be.visible`)
    });

    it('button should have text atrakcje', () => {
        cy.get('[data-testid=attractionNextButton]').should('have.text', 'Dalej ')
    });

    it('background text should be visible', () => {
        cy.get('.background-text').should(`be.visible`)
    });

    it('background text should have text atrakcje', () => {
        cy.get('.background-text').should('have.text', 'konie')
    });
}

export const firstDataAttractionRightSectionImage = (visible: ToggleVisibilty) => {
    it(`image carousel should ${visible}`, () => {
        cy.get('[data-testid=attractionImg]').should(visible)
    });

    it('image carousel should have img src', () => {
        cy.get('[data-testid=attractionImg]').should('have.attr', 'src', '/horse_farm/static/media/Stadnina-1_vmv1ek_c_scale,w_480.c3a936b7.png')
    });

}

export const secondDataAttractionLeftSection = () => {
    it('atraction should be visible', () => {
        cy.get('[data-cy=title-section-attractions]').should(`be.visible`)
    });

    it('title should be visible', () => {
        cy.get('[data-testid=attractionTitle]').should(`be.visible`)
    });

    it('title should have text Dla Juniora', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').should('have.text', 'DlaJuniora')
    });

    it('title should have text Dla Juniora', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').contains('DlaJuniora')
    });


    it('description should be visible', () => {
        cy.get('[data-testid=attractionDescription]').should(`be.visible`)
    });

    it('description should have text', () => {
        cy.get('[data-testid=attractionDescription]').should('have.text', 'z nami naukę jazdy konnej możesz już zacząć od najmłodszych lat')
    });


    it('button next should be visible', () => {
        cy.get('[data-testid=attractionNextButton]').should(`be.visible`)
    });

    it('button should have text Dalej', () => {
        cy.get('[data-testid=attractionNextButton]').should('have.text', 'Dalej ')
    });

    it('background text should be visible', () => {
        cy.get('.background-text').should(`be.visible`)
    });

    it('background text should have text to', () => {
        cy.get('.background-text').should('have.text', 'to')
    });

}

export const secondDataAttractionRightSectionImage = (visible: ToggleVisibilty) => {

    it(`image carousel should ${visible}`, () => {
        cy.get('[data-testid=attractionImg]').should(visible)
    });

    it('image carousel should have img src', () => {
        cy.get('[data-testid=attractionImg]').should('have.attr', 'src', '/horse_farm/static/media/Stadnina-2_zeheav_c_scale,w_480.b92546e8.png')
    });

}

export const thirdDataAttractionLeftSection = () => {


    it('atraction should be visible', () => {
        cy.get('[data-cy=title-section-attractions]').should(`be.visible`)
    });

    it('title should be visible', () => {
        cy.get('[data-testid=attractionTitle]').should(`be.visible`)
    });

    it('title should have text Kiedy Trenujemy', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').contains('KiedyTrenujemy')
    });


    it('description should be visible', () => {
        cy.get('[data-testid=attractionDescription]').should(`be.visible`)
    });

    it('description should have text', () => {
        cy.get('[data-testid=attractionDescription]').should('have.text', 'na wybiegu początkujacy uczą się zdobywać pierwsze szlify jazdy konnej jak również ci doświadczeni mogą trochę poszaleć')
    });


    it('button next should be visible', () => {
        cy.get('[data-testid=attractionNextButton]').should(`be.visible`)
    });

    it('button should have text dalej', () => {
        cy.get('[data-testid=attractionNextButton]').should('have.text', 'Dalej ')
    });

    it('background text should be visible', () => {
        cy.get('.background-text').should(`be.visible`)
    });

    it('background text should have text nasza', () => {
        cy.get('.background-text').should('have.text', 'Nasza')
    });

}


export const thirdDataAttractionRightSectionImage = (visible: ToggleVisibilty) => {

    it(`image carousel should ${visible}`, () => {
        cy.get('[data-testid=attractionImg]').should(visible)
    });

    it('image carousel should have img src', () => {
        cy.get('[data-testid=attractionImg]').should('have.attr', 'src', '/horse_farm/static/media/Stadnina-3_zdyjwn_c_scale,w_480.24a04979.png')
    });

}


export const fourthDataAttractionLeftSection = () => {

    it('atraction should be visible', () => {
        cy.get('[data-cy=title-section-attractions]').should(`be.visible`)
    });

    it('title should be visible', () => {
        cy.get('[data-testid=attractionTitle]').should(`be.visible`)
    });

    it('title should have text razem w teren', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').contains('Razem wTeren')
    });


    it('description should be visible', () => {
        cy.get('[data-testid=attractionDescription]').should(`be.visible`)
    });

    it('description should have text', () => {
        cy.get('[data-testid=attractionDescription]').should('have.text', 'jeśli pod okiem instruktora zdobędziesz odpowiednie doświadczenie ruszymy na jazdę konną w teren po malowniczym krajobrazie Lubelszczyzny')
    });

    it('button next should be visible', () => {
        cy.get('[data-testid=attractionNextButton]').should(`be.visible`)
    });

    it('button should have text dalej', () => {
        cy.get('[data-testid=attractionNextButton]').should('have.text', 'Dalej ')
    });

    it('background text should be visible', () => {
        cy.get('.background-text').should(`be.visible`)
    });

    it('background text should have text pasja', () => {
        cy.get('.background-text').should('have.text', 'pasja')
    });


}

export const fourthDataAttractionRightSectionImage = (visible: ToggleVisibilty) => {
    it(`image carousel should ${visible}`, () => {
        cy.get('[data-testid=attractionImg]').should(visible)
    });

    it('image carousel should have img src', () => {
        cy.get('[data-testid=attractionImg]').should('have.attr', 'src', '/horse_farm/static/media/Stadnina-4_ytymok_c_scale,w_480.569ad935.png')
    });

}



export const fifthDataAttractionLeftSection = () => {

    it('atraction should be visible', () => {
        cy.get('[data-cy=title-section-attractions]').should(`be.visible`)
    });

    it('title should be visible', () => {
        cy.get('[data-testid=attractionTitle]').should(`be.visible`)
    });

    it('title should have text po treningu', () => {
        cy.get('[data-testid=attractionTitle] > .title-regular').contains('PoTreningu')
    });


    it('description should be visible', () => {
        cy.get('[data-testid=attractionDescription]').should(`be.visible`)
    });

    it('description should have text', () => {
        cy.get('[data-testid=attractionDescription]').should('have.text', 'wieczorkiem usiądźmy razem przy ognisku by zregenerować siły na kolejną jazdę konną')
    });

    it('button next should be visible', () => {
        cy.get('[data-testid=attractionNextButton]').should(`be.visible`)
    });

    it('button should have text dalej', () => {
        cy.get('[data-testid=attractionNextButton]').should('have.text', 'Dalej ')
    });

    it('background text should be visible', () => {
        cy.get('.background-text').should(`be.visible`)
    });

    it('background text should have text życia', () => {
        cy.get('.background-text').should('have.text', 'życia')
    });

}

export const fifthDataAttractionRightSectionImage = (visible: ToggleVisibilty) => {
    it(`image carousel should ${visible}`, () => {
        cy.get('[data-testid=attractionImg]').should(visible)
    });

    it('image carousel should have img src', () => {
        cy.get('[data-testid=attractionImg]').should('have.attr', 'src', '/horse_farm/static/media/Stadnina-5_le20dx_c_scale,w_480.16d523e3.png')
    });
}
export const checkTitleSection = (section: Section) => {
    it(`should be visible  ${section}`, () => {
        cy.get(`[data-cy=title-section-${section}]`).should(`be.visible`)
    });
    it(`should have title ${section}`, () => {
        cy.get(`[data-cy=title-section-${section}]`).should(`have.text`, `${sectionToPolish[section]}`)
    });
}