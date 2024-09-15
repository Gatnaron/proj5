import { useState } from 'react';

const useImageUploader = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleFileUpload = (file: File) => {
        if (file) {
            setImage(file);
            const url = URL.createObjectURL(file);
            setImageURL(url);
        }
    };

    const removeImage = () => {
        setImage(null);
        setImageURL(null);
    };

    return {
        image,
        imageURL,
        handleFileUpload,
        removeImage,
    };
};

export default useImageUploader;
