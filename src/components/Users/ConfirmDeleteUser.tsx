import React, { useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRemoveAction, userSignOutAction, userRemoveCookieTokenAction } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store'
import { IUserBaseMongoBD } from '../../models/userInterfaces';
import ConfirmDeleteUserDetail from './ConfirmDeleteUserDetail';



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
    const { user, loading, error }: { user: IUserBaseMongoBD, loading: boolean, error: boolean, errorMessage: string } = userAuth;


    const logoutAfterTime = (time: number) => {
        setTimeout(() => {
            logoutUserHandle();
        }, time);
    }

    useEffect(() => {
        if (actionMessage !== ActionMessage.MESSAGE) {

            error && !loading && (setActionMessage((prevAction) => ActionMessage.ERROR))

            !error && !loading && (setActionMessage((prevAction) => ActionMessage.SUCCESS))

            !error && !loading && logoutAfterTime(4000)
        }

        return () => {
            // cleanup
        }
    }, [loading])


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
        dispatch(userRemoveAction(user))
    }

    const goToHomePageHandle = () => {
        history.push('/')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'sm'} className={classes.container}>

                <ConfirmDeleteUserDetail
                    actionMessage={actionMessage}
                    confirmAction={confirmRemoveUserHandle}
                    cancelAction={cancelRemoveUserHandle}
                    user={user}
                    goToHomePage={goToHomePageHandle}
                    logoutUser={logoutUserHandle}
                />

            </Container>
        </ThemeProvider>
    )
}

export default ConfirmDeleteUser


