import React from 'react'
import { Box } from '@material-ui/core';
import { IconButtonConfirm, Message, TypeMessage } from '../Message';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IUserBaseMongoBD } from '../../models/users';
import { ActionMessage } from './ConfirmDeleteUser';


interface ConfirmDeleteUserDetailProps {
    actionMessage: ActionMessage;
    cancelAction(): void;
    confirmAction(): void;
    user: IUserBaseMongoBD;
    goToHomePage(): void;
    logoutUser(): void
}



const ConfirmDeleteUserDetail: React.FC<ConfirmDeleteUserDetailProps> = ({
    actionMessage,
    cancelAction,
    confirmAction,
    user,
    goToHomePage,
    logoutUser
}) => {

    return (
        <>
            {actionMessage === ActionMessage.MESSAGE && (
                <Message title={`Usuwanie konta`}
                    typeMessage={TypeMessage.ERROR}
                    cancelAction={cancelAction}
                    confirmAction={confirmAction}
                    textButtonConfirm={'Usuń konto'}
                    iconButtonConfirm={IconButtonConfirm.DELETE_ICON}
                >
                    {<>
                        <Box p={5}>
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
                confirmAction={goToHomePage}>
                {<>
                    <Box p={5} >
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
                    confirmAction={logoutUser}>
                    {<>
                        <Box p={5} >
                            Konto <strong>{`${user.email}`}</strong> zostało usunięte :-(
                        </Box>
                    </>
                    }</Message>)}

        </>

    )
}

export default ConfirmDeleteUserDetail


