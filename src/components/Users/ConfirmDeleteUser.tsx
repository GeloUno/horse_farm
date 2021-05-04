import React, { useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRemoveAction, userSignOutAction, userRemoveCookieTokenAction } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store'
import { IUserBaseMongoBD, IUser, OneOrUndefined } from '../../models/userInterfaces';
import ConfirmDeleteUserDetail from './ConfirmDeleteUserDetail';
import { NoUserData } from './NoUserData';



export enum ActionMessage {
    MESSAGE,
    ERROR,
    SUCCESS,
    LOADING
}

const theme = createMuiTheme({

    // palette: {
    //     primary: green
    // }
})


const useStyles = makeStyles({
    container: {
        height: '91vh',
        padding: '3.75rem 0 0 0',
    },
    paper: {
        height: '80vh'
    },
    button: {
        margin: theme.spacing(1),
    }

});

const ConfirmDeleteUser: React.FC = () => {

    const [actionMessage, setActionMessage] = useState<ActionMessage>(ActionMessage.MESSAGE)
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch()

    const userAuth = useSelector((state: RootState) => state.userAction);
    const { user, isLoading, isError, errorMessage }: { user: Partial<IUser>, isLoading: boolean, isError: boolean, errorMessage: string | null } = userAuth;
    const userReq = user as IUser;

    let userMDB: OneOrUndefined<IUserBaseMongoBD>;
    if (user.email &&
        user.emailVerified &&
        user.providerId &&
        user.uid) {
        userMDB = {
            email: user.email,
            emailVerified: user.emailVerified,
            providerId: user.providerId,
            uid: user.uid
        };
    }
    else {
        userMDB = undefined;
    }

    const logoutAfterTime = (time: number) => {
        setTimeout(() => {
            logoutUserHandle();
        }, time);
    }

    useEffect(() => {
        if (actionMessage !== ActionMessage.MESSAGE) {

            isError && !isLoading && (setActionMessage((prevAction) => ActionMessage.ERROR))

            !isError && !isLoading && (setActionMessage((prevAction) => ActionMessage.SUCCESS))

            !isError && !isLoading && logoutAfterTime(4000)
        }

        return () => {
            // cleanup
        }
    }, [isLoading])


    const logoutUserHandle = () => {
        dispatch(userSignOutAction);
        dispatch(userRemoveCookieTokenAction);
        history.push('/')
    }

    const cancelRemoveUserHandle = () => {
        history.goBack()
    }

    const confirmRemoveUserHandle = () => {
        setActionMessage(ActionMessage.LOADING);
        dispatch(userRemoveAction(userReq))
    }

    const goToHomePageHandle = () => {
        history.push('/')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'sm'} className={classes.container}>

                {userMDB && (
                    <ConfirmDeleteUserDetail
                        actionMessage={actionMessage}
                        confirmAction={confirmRemoveUserHandle}
                        cancelAction={cancelRemoveUserHandle}
                        user={userMDB}
                        goToHomePage={goToHomePageHandle}
                        logoutUser={logoutUserHandle}
                    />
                )
                }
                {!userMDB && (<NoUserData
                    confirmAction={logoutUserHandle}
                    logoutAfterTime={logoutAfterTime}
                />)}

            </Container>
        </ThemeProvider>
    )
}

export default ConfirmDeleteUser


