import Cookies from 'universal-cookie';

export const isUserCanBeCreateByPassword = (email, isLoading, isErrors, dataResponse, isNewUser, providerId) => {
    return (email && providerId === 'password' && isNewUser && !dataResponse && !isLoading && !isErrors)
}

export const isUserNeedConfirmEmail = (email, isErrors, emailVerified) => {
    return (email && !isErrors && !emailVerified)
}

export const isUserCanSetTokenInCookie = (email, emailVerified) => {
    return (email && emailVerified)
}

export const isUserCanUpdateDataFromMongoDB = (isLoading, isErrors, emailVerified, dataResponse) => {
    return (!isLoading && !isErrors && emailVerified && dataResponse)
}

export const isUserGetErrorFromDataMongoDB = (isLoading, isErrors, dataResponse) => {
    return (!isLoading && isErrors && dataResponse)
}

export const isUserGetCorrectDataAndCanCloseModal = (email, isLoading, isErrors, dataResponse, emailVerified) => {
    return (email && !isLoading && !isErrors && dataResponse && emailVerified)
}

export const isNeedToShowUserBody = (email, emailVerified) => {
    return (!email && !emailVerified)
}

export const setTokenInCookies = (idToken) => {
    const cookies = new Cookies();
    cookies.set('idToken', idToken, {
        path: '/',
        maxAge: 5 * 60,
        // secure: true,
        // httpOnly: true,
    });
}



export const isUserCanLoginByPassword = (isLoading, isErrors, dataResponse, isNewUser, providerId) => {
    return (!isLoading && !isErrors && !dataResponse && !isNewUser && providerId === "password")
}

export const isUserCanLoginBySocialMedia = (isLoading, isErrors, dataResponse, isNewUser, providerId) => {
    return (!isLoading && !isErrors && !dataResponse && !isNewUser && (providerId === "google.com" || providerId === "facebook.com"))
}

export const isUserCanCreateBySocialMedia = (isLoading, isErrors, dataResponse, isNewUser, providerId) => {
    return (!isLoading && !isErrors && !dataResponse && isNewUser && (providerId === "google.com" || providerId === "facebook.com"))
}