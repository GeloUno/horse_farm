import Cookies from 'universal-cookie';

// T
export const isUserCanBeCreateByPassword = (email: string, isLoading: boolean, isErrors: boolean, dataResponse: unknown, isNewUser: boolean, providerId: string) => {
    return (!!email && providerId === 'password' && isNewUser && !dataResponse && !isLoading && !isErrors)
}
// T
export const isUserNeedConfirmEmail = (email: string, isErrors: boolean, emailVerified: boolean) => {
    return (!!email && !isErrors && !emailVerified)
}
// T
export const isUserCanSetTokenInCookie = (email: string, emailVerified: boolean) => {
    return (!!email && emailVerified)
}
// T
export const isUserCanUpdateDataFromMongoDB = (isLoading: boolean, isErrors: boolean, emailVerified: boolean, dataResponse: unknown) => {
    return (!isLoading && !isErrors && emailVerified && dataResponse)
}
// T
export const isUserGetErrorFromDataMongoDB = (isLoading: boolean, isErrors: boolean, dataResponse: unknown) => {
    return (!isLoading && isErrors && dataResponse)
}
// T
export const isUserGetCorrectDataAndCanCloseModal = (email: string, isLoading: boolean, isErrors: boolean, dataResponse: unknown, emailVerified: boolean) => {
    return (!!email && !isLoading && !isErrors && dataResponse && emailVerified)
}

// T
export const isNeedToShowUserBody = (email: string, emailVerified: boolean) => {
    return (!email && !emailVerified)
}

export const setTokenInCookies = (idToken: string) => {
    const cookies = new Cookies();
    cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
    });
}



export const isUserCanLoginByPassword = (isLoading: boolean, isErrors: boolean, dataResponse: unknown, isNewUser: boolean, providerId: string) => {
    return (!isLoading && !isErrors && !dataResponse && !isNewUser && providerId === "password")
}

export const isUserCanLoginBySocialMedia = (isLoading: boolean, isErrors: boolean, dataResponse: unknown, isNewUser: boolean, providerId: string) => {
    return (!isLoading && !isErrors && !dataResponse && !isNewUser && (providerId === "google.com" || providerId === "facebook.com"))
}

export const isUserCanCreateBySocialMedia = (isLoading: boolean, isErrors: boolean, dataResponse: unknown, isNewUser: boolean, providerId: string) => {
    return (!isLoading && !isErrors && !dataResponse && isNewUser && (providerId === "google.com" || providerId === "facebook.com"))
}