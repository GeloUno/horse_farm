import { isUserNeedConfirmEmail, isUserCanSetTokenInCookie, isUserCanBeCreateByPassword } from './user';


describe(`isUserNeedConfirmEmail`, () => {
    test(`should isUserNeedConfirmEmail return TRUE if user have email no error and emailVeryfication is false`, () => {
        const result = isUserNeedConfirmEmail(`jhon@gmail.com`, false, false)
        expect(result).toBe(true)
    });

    test(`should isUserNeedConfirmEmail return FALSE if get error`, () => {
        const result = isUserNeedConfirmEmail(`jhon@gmail.com`, true, false)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user have email no error and email is veryfied`, () => {
        const result = isUserNeedConfirmEmail(`jhon@gmail.com`, false, true)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email no error and emailVeryfication is false`, () => {
        const result = isUserNeedConfirmEmail("", false, false)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email no error and email is Veryfication`, () => {
        const result = isUserNeedConfirmEmail("", false, true)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email is error and email is Veryfication`, () => {
        const result = isUserNeedConfirmEmail("", true, true)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE don't have email and have error and email is not verified`, () => {
        const result = isUserNeedConfirmEmail("", true, false)
        expect(result).toBe(false)
    });
});

describe('isUserCanSetTokenInCookie', () => {
    test(`should isUserCanSetTokenInCookie return FALSE if user have email and don't have email verified`, () => {
        const result = isUserCanSetTokenInCookie(`jhon@gmail.com`, false)
        expect(result).toBe(false)
    });

    test(`should isUserCanSetTokenInCookie return FALSE if user don't have email and don't have email verified`, () => {
        const result = isUserCanSetTokenInCookie(``, false)
        expect(result).toBe(false)
    });

    test(`should isUserCanSetTokenInCookie return FALSE if user don't have email and have email verified`, () => {
        const result = isUserCanSetTokenInCookie(`jhon@gmail.com`, false)
        expect(result).toBe(false)
    });
});
describe('isUserCanBeCreateByPassword', () => {

    test(`should return false if user don't have email`, () => {
        const result = isUserCanBeCreateByPassword('', false, false, true, true, 'password')
        expect(result).toBe(false)
    });

    test(`should return true if user have email, no error, no loading, no data response from mongoDB, is new user in firebase, provaider is by password`, () => {
        const result = isUserCanBeCreateByPassword('jhon@gmail.com', false, false, false, true, 'password')
        expect(result).toBe(true)
    });
});