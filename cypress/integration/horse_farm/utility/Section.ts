export enum Section {
    Attractions = `attractions`,
    Opinions = `opinions`,
    Contact = `contact`
}
interface SectionToPolish {
    attractions: string;
    opinions: string;
    contact: string;
}
export const sectionToPolish: SectionToPolish = {
    attractions: `Atrakcje`,
    opinions: `Opinia`,
    contact: `Kontakt`,
};
