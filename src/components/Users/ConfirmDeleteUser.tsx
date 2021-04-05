import React from 'react'
import { createMuiTheme, ThemeProvider, Container, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { WarningStrongDialog } from '../WarningStrongDialog'
import { useHistory } from 'react-router-dom';
// import { useHistory as UseHistory } from 'react-router-dom';

interface IUserProps {
    isNewUser: boolean,
    providerId: string,
    email: string,
    firstName: string,
    lastName: string,
    name: string,
    emailVerified: boolean,
    uid: boolean,
    id: boolean,
    isAccessToMakeBooking: boolean,
    isManualOwnDataUser: boolean,
    phone: string,
    nick: string,
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

const ConfirmDeleteUser: React.FC<IUserProps> = ({ }) => {
    
   
    const history = useHistory();
    const classes = useStyles();

    const cancelRemoveUserHandle = ()=>{
            history.goBack()
        }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'sm'} className={classes.container}>
                <WarningStrongDialog title='Czy na pewno chcesz usunąć konto?' cancelAction={cancelRemoveUserHandle} confirmAction={()=>{}}>
                    {<>
                        <Box p={5}>
                            Usunięcie konta skutkuje trwałym i nie odwracalnym wykasowniem użutkownika oraz wszelkich danych z jego kontem związanych, bez możliwości ich późniejszego odzyskania.
                            Jeśli nie chesz usunąć konta wciśnij wstecz.
                           
                        </Box>
                    </>
                    }</WarningStrongDialog>

            </Container>
        </ThemeProvider>
    )
}

export default ConfirmDeleteUser


