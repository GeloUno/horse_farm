import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader';

export const Loading: React.FC = () => {
    return (
        <div>
            <PulseLoader color={' hsla(94, 30%, 43%, 1)'} size={25} />
        </div>
    )
}
