import React, { useEffect } from 'react'
import { Message, TypeMessage } from '../Message';
import { Box } from '@material-ui/core';


interface NoUserProps {
    confirmAction(): void,
    logoutAfterTime(timeInMileseconds: number): void
}

export const NoUserData: React.FC<NoUserProps> = ({ confirmAction, logoutAfterTime }) => {
    useEffect(() => {
        logoutAfterTime(4000)
        return () => {

        }
    }, [])
    return (
        <Message
            title={'Brak danych użytkownika'}
            typeMessage={TypeMessage.ERROR}
            textButtonConfirm={'OK'}
            confirmAction={confirmAction}
        >
            <Box p={5}>
                Ups coś poszło nie tak zapraszam później...
            </Box>
        </Message>
    )
}
