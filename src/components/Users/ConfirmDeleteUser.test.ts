import { IUser, OneOrUndefined, IUserBaseMongoBD } from '../../models/users';
import { isUserHaveAllProperty, returnUserBaseMongoDBorUndefined } from './ConfirmDeleteUser';


describe('isUserHaveAllProperty function', () => {
    test('should return false if all propery string is empty ', () => {
        const result = isUserHaveAllProperty('', true, '', '')
        expect(result).toBe(false)
    });
    test('should return false if all propery string is empty ', () => {
        const result = isUserHaveAllProperty('', false, '', '')
        expect(result).toBe(false)
    });

    test('should return false if one propery string is empty -> email ', () => {
        const result = isUserHaveAllProperty('', true, 'google.com', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if one propery string is empty -> providerId ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if one propery string is empty -> userUid ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, 'google.com', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> userUid, email', () => {
        const result = isUserHaveAllProperty('', true, 'google.com', '')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> userUid, providerId   ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, '', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> email, providerId  ', () => {
        const result = isUserHaveAllProperty('', true, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> email, userUid ', () => {
        const result = isUserHaveAllProperty('', true, 'google.com', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> providerId, email  ', () => {
        const result = isUserHaveAllProperty('', true, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> providerId, userUid  ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, '', '')
        expect(result).toBe(false)
    });

    test('should return false if one propery string is empty -> email ', () => {
        const result = isUserHaveAllProperty('', true, 'google.com', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if one propery string is empty -> providerId ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if one propery string is empty -> userUid ', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, 'google.com', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> userUid, email', () => {
        const result = isUserHaveAllProperty('', false, 'google.com', '')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> userUid, providerId   ', () => {
        const result = isUserHaveAllProperty('example@com.uk', false, '', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> email, providerId  ', () => {
        const result = isUserHaveAllProperty('', false, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> email, userUid ', () => {
        const result = isUserHaveAllProperty('', false, 'google.com', '')
        expect(result).toBe(false)
    });


    test('should return false if two propery string is empty -> providerId, email  ', () => {
        const result = isUserHaveAllProperty('', false, '', '1234567890')
        expect(result).toBe(false)
    });
    test('should return false if two propery string is empty -> providerId, userUid  ', () => {
        const result = isUserHaveAllProperty('example@com.uk', false, '', '')
        expect(result).toBe(false)
    });

    test('should return false all property string is not empty and emailVerified is false', () => {
        const result = isUserHaveAllProperty('example@com.uk', false, 'google.com', '1234567890')
        expect(result).toBe(false)
    });
    test('should return true all property string is not empty and emailVerified is true', () => {
        const result = isUserHaveAllProperty('example@com.uk', true, 'google.com', '1234567890')
        expect(result).toBe(true)
    });
});
describe('returnUserBaseMongoDBorUndefined function', () => {
    test('should return undefined if user data are empty', () => {
        const userExample: Partial<IUser> = {
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have email`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            emailVerified: true,
            providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have emailVerified`, () => {
        const userExample: Partial<IUser> = {
            email: `johndoe@go.com`,
            // emailVerified: true,
            providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have providerId`, () => {
        const userExample: Partial<IUser> = {
            email: `johndoe@go.com`,
            emailVerified: true,
            // providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have uid`, () => {
        const userExample: Partial<IUser> = {
            email: `johndoe@go.com`,
            emailVerified: true,
            providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have email. emailVerified`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            // emailVerified: true,
            providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have email, providerId`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            emailVerified: true,
            // providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have email, uid`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            emailVerified: true,
            providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have email, emailVerified, providerId `, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            // emailVerified: true,
            // providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user have only email`, () => {
        const userExample: Partial<IUser> = {
            email: `johndoe@go.com`,
            // emailVerified: true,
            // providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user have only emailVerified`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            emailVerified: true,
            // providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user have only providerId`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            // emailVerified: true,
            providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user have only uid`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            // emailVerified: true,
            // providerId: 'google.com',
            uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return undefined if user don't have all data`, () => {
        const userExample: Partial<IUser> = {
            // email: `johndoe@go.com`,
            // emailVerified: true,
            // providerId: 'google.com',
            // uid: `1234567890qaz`
        }
        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)
        expect(user).toEqual(undefined)
    });
    test(`should return user if user don't have email`, (): void => {

        const userExample: Partial<IUser> = {
            email: `johndoe@go.com`,
            emailVerified: true,
            providerId: 'google.com',
            uid: `1234567890qaz`
        }

        const userExpect: IUserBaseMongoBD = {
            email: `johndoe@go.com`,
            emailVerified: true,
            providerId: 'google.com',
            uid: `1234567890qaz`
        }

        const user: OneOrUndefined<IUserBaseMongoBD> = returnUserBaseMongoDBorUndefined(userExample)

        expect(user).toEqual(userExpect)
    });
});