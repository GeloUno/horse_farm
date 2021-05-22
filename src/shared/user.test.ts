import { isUserNeedConfirmEmail, isUserCanSetTokenInCookie, isUserCanBeCreateByPassword, isUserCanUpdateDataFromMongoDB, isUserGetErrorFromDataMongoDB, isUserGetCorrectDataAndCanCloseModal, isNeedToShowRegisterUserForm, setTokenInCookies, isUserCanLoginByPassword, isUserCanLoginBySocialMedia, isUserCanCreateBySocialMedia } from './user';
import Cookies from 'universal-cookie';


describe(`isUserNeedConfirmEmail`, () => {
    test(`should isUserNeedConfirmEmail return FALSE if user email is undefined no error and emailVerificed is false`, () => {
        const result = isUserNeedConfirmEmail(undefined, false, false)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if get error`, () => {
        const result = isUserNeedConfirmEmail(undefined, true, false)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user email is undefined no error and email is verified`, () => {
        const result = isUserNeedConfirmEmail(undefined, false, true)
        expect(result).toBe(false)
    });
    test(`should isUserNeedConfirmEmail return FALSE if get error`, () => {
        const result = isUserNeedConfirmEmail(undefined, true, undefined)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user email is undefined no error and email is undefined`, () => {
        const result = isUserNeedConfirmEmail(undefined, false, undefined)
        expect(result).toBe(false)
    });
    test(`should isUserNeedConfirmEmail return TRUE if user have email no error and emailVerificed is false`, () => {
        const result = isUserNeedConfirmEmail(`josh@gmail.com`, false, false)
        expect(result).toBe(true)
    });

    test(`should isUserNeedConfirmEmail return FALSE if get error`, () => {
        const result = isUserNeedConfirmEmail(`josh@gmail.com`, true, false)
        expect(result).toBe(false)
    });
    test(`should isUserNeedConfirmEmail return TRUE if user have email no error and emailVerificed is undefined`, () => {
        const result = isUserNeedConfirmEmail(`josh@gmail.com`, false, undefined)
        expect(result).toBe(true)
    });

    test(`should isUserNeedConfirmEmail return FALSE if get error, get email and veryficed is undefined`, () => {
        const result = isUserNeedConfirmEmail(`josh@gmail.com`, true, undefined)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user have email no error and email is verified`, () => {
        const result = isUserNeedConfirmEmail(`josh@gmail.com`, false, true)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email no error and emailVerificed is false`, () => {
        const result = isUserNeedConfirmEmail("", false, false)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email no error and email is Verificed`, () => {
        const result = isUserNeedConfirmEmail("", false, true)
        expect(result).toBe(false)
    });

    test(`should isUserNeedConfirmEmail return FALSE if user don't have email is error and email is Verificed`, () => {
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
        const result = isUserCanSetTokenInCookie(`josh@gmail.com`, false)
        expect(result).toBe(false)
    });
    test(`should isUserCanSetTokenInCookie return FALSE if user have email and email verified is undefined`, () => {
        const result = isUserCanSetTokenInCookie(`josh@gmail.com`, undefined)
        expect(result).toBe(false)
    });
    test(`should isUserCanSetTokenInCookie return FALSE if user email is undefined and don't have email verified`, () => {
        const result = isUserCanSetTokenInCookie(undefined, false)
        expect(result).toBe(false)
    });

    test(`should isUserCanSetTokenInCookie return FALSE if user email is empty and don't have email verified`, () => {
        const result = isUserCanSetTokenInCookie(``, false)
        expect(result).toBe(false)
    });
    test(`should isUserCanSetTokenInCookie return FALSE if user email is empty and email verified is undefined`, () => {
        const result = isUserCanSetTokenInCookie(``, undefined)
        expect(result).toBe(false)
    });

    test(`should isUserCanSetTokenInCookie return FALSE if user don't have email and have email verified`, () => {
        const result = isUserCanSetTokenInCookie(`josh@gmail.com`, false)
        expect(result).toBe(false)
    });
    test(`should isUserCanSetTokenInCookie return TRUE if user have email and have email verified`, () => {
        const result = isUserCanSetTokenInCookie(`josh@gmail.com`, true)
        expect(result).toBe(true)
    });
});

describe('isUserCanBeCreateByPassword', () => {

    test(`should return false if user don't have email`, () => {
        const result = isUserCanBeCreateByPassword('', false, false, true, true, 'password')
        expect(result).toBe(false)
    });

    test(`should return false if user have error`, () => {
        const result = isUserCanBeCreateByPassword('josh@gmail.com', false, true, false, true, 'password')
        expect(result).toBe(false)
    });
    test(`should return false if is loading`, () => {
        const result = isUserCanBeCreateByPassword('josh@gmail.com', true, false, false, true, 'password')
        expect(result).toBe(false)
    });
    test(`should return false if user in not new`, () => {
        const result = isUserCanBeCreateByPassword('josh@gmail.com', false, false, false, false, 'password')
        expect(result).toBe(false)
    });

    test(`should return true if user have email, no error, no loading, no data response from mongoDB, is new user in firebase, provaider is by password`, () => {
        const result = isUserCanBeCreateByPassword('josh@gmail.com', false, false, false, true, 'password')
        expect(result).toBe(true)
    });
});

describe('isUserCanUpdateDataFromMongoDB', () => {

    test('should return false is loading', () => {
        const result = isUserCanUpdateDataFromMongoDB(true, false, false, true)
        expect(result).toBe(false)
    });
    test('should return false is loading', () => {
        const result = isUserCanUpdateDataFromMongoDB(true, false, undefined, true)
        expect(result).toBe(false)
    });

    test('should return false is get error', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, true, false, true)
        expect(result).toBe(false)
    });
    test('should return false is get error', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, true, undefined, true)
        expect(result).toBe(false)
    });

    test('should return false if email is not verified', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, false, false, true)
        expect(result).toBe(false)
    });
    test('should return false if email is not verified', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, false, undefined, true)
        expect(result).toBe(false)
    });

    test('should return false if not get data form mongoDB', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, false, false, false)
        expect(result).toBe(false)
    });
    test('should return false if not get data form mongoDB', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, false, undefined, false)
        expect(result).toBe(false)
    });
    test('should return true if no error, no loading, email is verified and get data from mongoDB ', () => {
        const result = isUserCanUpdateDataFromMongoDB(false, false, true, true)
        expect(result).toBe(true)
    });
});

describe('isUserGetErrorFromDataMongoDB', () => {

    test('should return false is loading', () => {
        const result = isUserGetErrorFromDataMongoDB(true, false, true)
        expect(result).toBe(false)
    });

    test('should return true is get error', () => {
        const result = isUserGetErrorFromDataMongoDB(false, true, true)
        expect(result).toBe(true)
    });

    test('should return false if not get data', () => {
        const result = isUserGetErrorFromDataMongoDB(false, false, false)
        expect(result).toBe(false)
    });

    test('should return false if not get data and get error', () => {
        const result = isUserGetErrorFromDataMongoDB(false, true, false)
        expect(result).toBe(false)
    });
});

describe('isUserGetCorrectDataAndCanCloseModal', () => {

    test('should return false if user not have email', () => {
        const result = isUserGetCorrectDataAndCanCloseModal('', false, false, true, true)
        expect(result).toBe(false)
    });
    test('should return false if have email undefined', () => {
        const result = isUserGetCorrectDataAndCanCloseModal(undefined, false, false, true, true)
        expect(result).toBe(false)
    });



    test('should return false if user get error ', () => {
        const result = isUserGetCorrectDataAndCanCloseModal(`josh@gmail.com`, false, true, true, true)
        expect(result).toBe(false)
    });

    test(`should return false if user don't get data`, () => {
        const result = isUserGetCorrectDataAndCanCloseModal('josh@email.com', false, false, false, true)
        expect(result).toBe(false)
    });

    test(`should return false if user don't verified email`, () => {
        const result = isUserGetCorrectDataAndCanCloseModal('josh@email.com', false, false, true, false)
        expect(result).toBe(false)
    });
    test(`should return false if user email verified is undefined`, () => {
        const result = isUserGetCorrectDataAndCanCloseModal('josh@email.com', false, false, true, false)
        expect(result).toBe(false)
    });

    test(`should return true if user get data have email, no error, is not loading, and email is verified`, () => {
        const result = isUserGetCorrectDataAndCanCloseModal('josh@email.com', false, false, true, true)
        expect(result).toBe(true)
    });
});

describe('isNeedToShowRegisterUserForm', () => {

    test('should return true if email is undefined  and email verified is undefind from firebase', () => {
        const result = isNeedToShowRegisterUserForm(undefined, undefined)
        expect(result).toBe(true)
    });
    test('should return true if email is empty  and email verified is undefind from firebase', () => {
        const result = isNeedToShowRegisterUserForm('', undefined)
        expect(result).toBe(true)
    });
    test('should return true if is email and email verified is undefind from firebase', () => {
        const result = isNeedToShowRegisterUserForm('johndoe@gmail.com', undefined)
        expect(result).toBe(true)
    });
    test('should return true if email is undefined  and email verified is true from firebase', () => {
        const result = isNeedToShowRegisterUserForm(undefined, true)
        expect(result).toBe(true)
    });
    test('should return true if email is undefined  and email verified is false from firebase', () => {
        const result = isNeedToShowRegisterUserForm(undefined, false)
        expect(result).toBe(true)
    });
    test('should return true if email is not verified and not get email from firebase', () => {
        const result = isNeedToShowRegisterUserForm('', false)
        expect(result).toBe(true)
    });

    test('should return flase if email is not verified and get email from firebase', () => {
        const result = isNeedToShowRegisterUserForm('josh@gmail.com', false)
        expect(result).toBe(false)
    });

    test(`should return false if email is  verified and get empty email from firebase`, () => {
        const result = isNeedToShowRegisterUserForm('', true)
        expect(result).toBe(false)
    });
});

describe('setTokenInCookies', () => {
    const cookies = new Cookies()
    test('should return true if set cookies is thesame with get cookie', () => {
        const TokenExampleToSet = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

        setTokenInCookies(TokenExampleToSet)
        const getTokenFromCookie = cookies.get('idToken')

        expect(TokenExampleToSet).toBe(getTokenFromCookie)
    });
});

describe('isUserCanLoginByPassword', () => {
    test('should return false if user is provider from google ', () => {
        const result = isUserCanLoginByPassword(false, false, false, false, 'google')
        expect(result).toBe(false)

    });
    test('should return false if user is provider from facebook ', () => {
        const result = isUserCanLoginByPassword(false, false, false, false, 'facebook')
        expect(result).toBe(false)
    });

    test('should return true if user is provider from password ', () => {
        const result = isUserCanLoginByPassword(false, false, false, false, 'password')
        expect(result).toBe(true)
    });

    test('should return false if user is new user and provider from password ', () => {
        const result = isUserCanLoginByPassword(false, false, false, true, 'password')
        expect(result).toBe(false)
    });

});

describe('isUserCanLoginBySocialMedia', () => {
    test('should return true if user is provider from google.com', () => {
        const result = isUserCanLoginBySocialMedia(false, false, false, false, 'google.com')
        expect(result).toBe(true)

    });
    test('should return true if user is provider from facebook.com ', () => {
        const result = isUserCanLoginBySocialMedia(false, false, false, false, 'facebook.com')
        expect(result).toBe(true)
    });

    test('should return false if user is provider from password ', () => {
        const result = isUserCanLoginBySocialMedia(false, false, false, false, 'password')
        expect(result).toBe(false)
    });

    test('should return false if user is new user and provider from facebook.com ', () => {
        const result = isUserCanLoginBySocialMedia(false, false, false, true, 'facebook.com')
        expect(result).toBe(false)
    });
    test('should return false if user is new user and provider from google.com ', () => {
        const result = isUserCanLoginBySocialMedia(false, false, false, true, 'google.com')
        expect(result).toBe(false)
    });


});

describe('isUserCanCreateBySocialMedia', () => {
    test('should return true if user is provider from google.com', () => {
        const result = isUserCanCreateBySocialMedia(false, false, false, true, 'google.com')
        expect(result).toBe(true)

    });
    test('should return true if user is provider from facebook.com ', () => {
        const result = isUserCanCreateBySocialMedia(false, false, false, true, 'facebook.com')
        expect(result).toBe(true)
    });

    test('should return false if user is provider from password ', () => {
        const result = isUserCanCreateBySocialMedia(false, false, false, true, 'password')
        expect(result).toBe(false)
    });

    test('should return false if user is not new user and provider is from facebook.com ', () => {
        const result = isUserCanCreateBySocialMedia(false, false, false, false, 'facebook.com')
        expect(result).toBe(false)
    });
    test('should return false if user is not new user and provider is from google.com ', () => {
        const result = isUserCanCreateBySocialMedia(false, false, false, false, 'google.com')
        expect(result).toBe(false)
    });


});