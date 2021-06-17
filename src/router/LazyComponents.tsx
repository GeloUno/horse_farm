import React from 'react';

export const GalleryFullScreenImage = React.lazy((): any => import('../components/Gallery/ImageModal'));
export const ConfirmBookingScreen = React.lazy((): any => import('../Screens/ConfirmBookingScreen'));
export const EditProfileScreen = React.lazy((): any => import('../Screens/EditProfileScreen'));
export const GalleryScreen = React.lazy((): any => import('../Screens/GalleryScreen'));
export const MakeBookingScreen = React.lazy((): any => import('../Screens/MakeBookingScreen'));
export const PlanBookingsScreen = React.lazy((): any => import('../Screens/PlanBookingsScreen'));
export const ProfileScreen = React.lazy((): any => import('../Screens/ProfileScreen'));
export const PageNotFound = React.lazy((): any => import('../Layout/PageNotFound'));
export const ConfirmDeleteUser = React.lazy((): any => import('../components/Users/ConfirmDeleteUser'));
