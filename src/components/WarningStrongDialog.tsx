
import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Box, Button, Theme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface IWarningProps {
    readonly title: string,
    readonly children: React.ReactChild,
    cancelAction(): void,
    confirmAction(): void,
}



const customStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        }
    }));


export const WarningStrongDialog = ({ title, children, cancelAction, confirmAction }: IWarningProps) => {
    const classes = customStyles();
    return (
        <Box mt={10} >
            <Alert severity={'error'}>
                <Box p={1}>
                    <AlertTitle>Uwaga, {title}</AlertTitle>
                </Box>
                {children}
                <Box
                    display='flex'
                    mt={5}
                    justifyContent="flex-end">

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => cancelAction()}
                    >
                        Wstecz
                                </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        onClick={() => confirmAction}
                    >
                        Usuń konto
                                </Button>
                </Box>

            </Alert>
        </Box>
    )
}
