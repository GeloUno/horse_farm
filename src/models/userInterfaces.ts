// export type IUndefinedType<Type> = {
//     [Property in keyof Type]: undefined
// }
// export type IOptionalType<Type> = {
//     [Property in keyof Type]+?: Type[Property]
// }


// export interface IUserInitialState extends Omit<IUser, 'id' | 'uid' | 'credits' | 'isAccessToMakeBooking' | 'isManualOwnDataUser' | 'firstName' | 'lastName' | 'phone' | 'nick' | 'name'> {
// }


type OneOrMoreUser = IUser | IUser[]

// type NullOrOneOrMoreUsers = null | IUser | IUser[]
export type NullOrOneOrMoreUsers<T> = undefined | T | T[]
export type OneOrUndefined<T> = undefined | T

// export type IUserReloadConfirmEmail = boolean;
export interface IUserReloadConfirmEmail extends Pick<IUserBaseFirebase, 'emailVerified'> { }

export interface IUserRemove extends Pick<IUser, 'email' | 'nick'> {
}

export type WithNullType<Type> = {
    [Property in keyof Type]: Type[Property] | null
}

// export interface IUserInitialState extends Pick<IUser, 'email' | 'emailVerified' | 'isNewUser' | 'providerId'> {
// }

export interface IUserBaseFirebase {
    email: string,
    isNewUser?: boolean,
    emailVerified: boolean,
    providerId: string,
    uid: string,
}

export interface IUserBaseMongoBD extends IUserBaseFirebase {
    // id: ObjectId // as Oject id mongoDB
    id?: string
}

export interface IUser extends IUserBaseMongoBD {
    credits?: number,
    isAccessToMakeBooking?: boolean,
    isManualOwnDataUser?: boolean,
    firstName: string,
    lastName: string,
    phone?: string,
    nick?: string,
    // name: string,
    photoId: string,
    opinion?: string
}