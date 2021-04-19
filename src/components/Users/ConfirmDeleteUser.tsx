import React, { useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider, Container, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IconButtonConfirm, Message, TypeMessage } from '../Message';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { userRemoveAction, userSignOutAction, userRemoveCookieTokenAction } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store'

// import { useHistory as UseHistory } from 'react-router-dom';
import { IUserBaseMongoBD } from '../../models/userInterfaces';



enum ActionMessage {
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



    const goToHomePageHandle = () => {
        history.push('/')
    }

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

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'sm'} className={classes.container}>

                {actionMessage === ActionMessage.MESSAGE && (
                    <Message title={`Usuwanie konta`}
                        typeMessage={TypeMessage.ERROR} cancelAction={cancelRemoveUserHandle} confirmAction={confirmRemoveUserHandle}
                        textButtonConfirm={'Usuń konto'}
                        iconButtonConfirm={IconButtonConfirm.DELETE_ICON}
                    >
                        {<>
                            <Box p={5} minWidth={'60vh'}>
                                Usunięcie konta <strong>{`${user.email}`}</strong> skutkuje trwałym i nie odwracalnym wykasowniem użutkownika oraz wszelkich danych z jego kontem związanych, bez możliwości ich późniejszego odzyskania.
                            Jeśli nie chesz usunąć konta wciśnij wstecz.

                        </Box>
                        </>
                        }</Message>
                )}


                {/* <Message
                    title='Usuwanie konta'
                     typeMessage={TypeMessage.INFO} 
                     textButtonConfirm={'OK'}
                     iconButtonConfirm={IconButtonConfirm.NO_ICON}                                
                    >
                          {<>
                              <Box p={5} minWidth={'60vh'}>
                              <CircularProgress color="primary" />
                              </Box>
                          </>
                          }
                </Message>  */}

                {actionMessage === ActionMessage.LOADING && (
                    <Box height='60vh' display='flex' alignItems='center' justifyContent='center'>
                        <CircularProgress color="primary" />
                    </Box>)}

                {actionMessage === ActionMessage.ERROR && (<Message
                    title={`Usuwanie konta`}
                    typeMessage={TypeMessage.ERROR}
                    textButtonConfirm={'OK'}
                    iconButtonConfirm={IconButtonConfirm.NO_ICON}

                    confirmAction={() => { goToHomePageHandle() }}>
                    {<>
                        <Box p={5} minWidth={'60vh'}>
                            Coś poszło nie tak konto <strong>{`${user.email}`}</strong> nie zostało usunięte zapraszam później :-(
                        </Box>
                    </>
                    }</Message>
                )
                }


                {actionMessage === ActionMessage.SUCCESS && (
                    <Message
                        title={`Usuwanie konta`}
                        typeMessage={TypeMessage.SUCCESS}
                        textButtonConfirm={'OK'}
                        iconButtonConfirm={IconButtonConfirm.NO_ICON}
                        confirmAction={() => { logoutUserHandle() }}>
                        {<>
                            <Box p={5} minWidth={'60vh'}>
                                Konto <strong>{`${user.email}`}</strong> zostało usunięte :-(
                        </Box>
                        </>
                        }</Message>)}

            </Container>
        </ThemeProvider>
    )
}

export default ConfirmDeleteUser


