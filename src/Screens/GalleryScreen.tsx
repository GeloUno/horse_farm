import React from 'react';
import Gallery from '../components/Gallery/Images';
import TitleSection from '../Layout/TitleSection';

const GalleryScreen: React.FC = ({
    //@ts-ignore
    userID,
    //@ts-ignore
    setDataGalleryImageModal,
    //@ts-ignore
    galleryImageModalToggle,
    //@ts-ignore
    isGalleryImageModalShow,
    //@ts-ignore
    isScrollToAddComment,
    //@ts-ignore
    setisScrollToAddComment,

}) => {
    return (
        <>
            <TitleSection title="Galeria" />
            <Gallery
                setDataGalleryImageModal={setDataGalleryImageModal}
                galleryImageModalToggle={galleryImageModalToggle}
                isGalleryImageModalShow={isGalleryImageModalShow}
                userID={userID}
                //@ts-ignore
                isScrollToAddComment={isScrollToAddComment}
                setisScrollToAddComment={setisScrollToAddComment} />
        </>
    );
};

export default GalleryScreen