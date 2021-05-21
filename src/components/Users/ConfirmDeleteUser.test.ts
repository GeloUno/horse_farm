import { isUserHaveAllProperty } from './ConfirmDeleteUser';


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
