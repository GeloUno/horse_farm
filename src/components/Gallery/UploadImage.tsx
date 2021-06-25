import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const UploadImage: React.FC = () => {
  const [fileImage, setFileImage] = useState<File | null>();
  const [isErrorImageSelected, setIsErrorImageSelected] = useState(false);
  const TYPES_IMAGES_ACCEPT = ['image/jpeg', 'image/png', 'image/gif'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      setIsErrorImageSelected(false);
      const selectedImage = e.currentTarget.files[0];
      console.log('selected :>> ', selectedImage);
      if (selectedImage && TYPES_IMAGES_ACCEPT.includes(selectedImage.type)) {
        setFileImage(selectedImage);
      } else {
        setIsErrorImageSelected(true);
        setFileImage(null);
      }
    }
  };

  return (
    <div>
      <div className="containerImages">
        <div className="addImage">
          <label>
            <input
              className="inputImageGaleryHidden"
              type="file"
              name=""
              id=""
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>
              <FontAwesomeIcon icon={faPlusCircle} className='addImageButton' onMouseEnter={() => setIsErrorImageSelected(false)} />
            </span>
          </label>
        </div>
        {isErrorImageSelected && (
          <div className="errorMesaggeDownloadImage">
            <h3>Niepoprawny format pliku</h3>

            <h4>Proszę wybrać plik z rozszerzeniem png lub jpg</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
