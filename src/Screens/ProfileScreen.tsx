import React from 'react';
import Profile from '../components/Users/Profile';
import TitleSection from '../Layout/TitleSection';

const ProfileScreen = () => {
    return (
        <>
            <TitleSection
                title="Profil" />
            <Profile />
        </>
    );
};

export default ProfileScreen