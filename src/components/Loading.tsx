import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
import { Box } from '@material-ui/core';

export const Loading: React.FC = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='center' height='90vh' width="100%" >
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
        </Box>
    )
}
