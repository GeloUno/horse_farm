import React from 'react';
import Gallery from '../components/Gallery/Images';
import TitleSection from '../Layout/TitleSection';
import { DevImagesData, IDataImage } from '../DevUtility/imagesGalery';

interface IGalleryScreenProps {
    userID: number,
    setDataGalleryImageModal(data: IDataImage): void,
    galleryImageModalToggle(e: React.MouseEvent<Element, MouseEvent>): void,
    isGalleryImageModalShow: any,
    isScrollToAddComment: any,
    setisScrollToAddComment(): void,
    isAuth: boolean,
}

const GalleryScreen: React.FC<IGalleryScreenProps> = ({
    userID,
    setDataGalleryImageModal,
    galleryImageModalToggle,
    isGalleryImageModalShow,
    // isScrollToAddComment,
    setisScrollToAddComment,
    isAuth
}) => {
    return (
        <>
            <TitleSection title="Galeria" />
            <Gallery
                setDataGalleryImageModal={setDataGalleryImageModal}
                galleryImageModalToggle={galleryImageModalToggle}
                isGalleryImageModalShow={isGalleryImageModalShow}
                userID={userID}
                // isScrollToAddComment={isScrollToAddComment}
                setisScrollToAddComment={setisScrollToAddComment}
                isAuth={isAuth}
                imagesGallery={DevImagesData}
            />
        </>
    );
};

export default GalleryScreen