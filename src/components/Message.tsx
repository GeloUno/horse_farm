
import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Box, Button, Theme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface IWarningProps {
    readonly title: string,
    readonly children: React.ReactChild,
    cancelAction?(): void,
    confirmAction?(): void,
    readonly typeMessage: TypeMessage,
    readonly textButtonConfirm: string,
    readonly iconButtonConfirm?: IconButtonConfirm
}

export enum TypeMessage {
    ERROR = "error",
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success'
}

export enum IconButtonConfirm {
    NO_ICON,
    DELETE_ICON,
}


const customStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        }
    }));


export const Message = ({ title, children, cancelAction, confirmAction, typeMessage, textButtonConfirm, iconButtonConfirm }: IWarningProps) => {
    const classes = customStyles();
    return (

        <Box height='60vh' display='flex' alignItems='center'>
            <Alert severity={typeMessage} >
                <Box p={0.3}>
                    <AlertTitle>{title}</AlertTitle>
                </Box>
                <Box>
                    {children}
                </Box>
                <Box
                    display='flex'
                    mt={5}
                    justifyContent="flex-end"
                >
                    {cancelAction && (
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => cancelAction()}
                        >
                            Wstecz
                        </Button>
                    )
                    }

                    {confirmAction &&
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={iconButtonConfirm === IconButtonConfirm.DELETE_ICON && <DeleteIcon />}
                            className={classes.button}
                            onClick={() => confirmAction()}
                        >
                            {textButtonConfirm}
                        </Button>

                    }
                </Box>

            </Alert>
        </Box>

    )
}
