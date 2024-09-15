import React, { useState } from 'react';
import DragDropUpload from './DragDropUpload';
import Resizer from './Resizer';
import Cropper from './Cropper';
import './ImageEditor.scss';

const ImageEditor: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [imageWidth, setImageWidth] = useState<number>(0);
    const [imageHeight, setImageHeight] = useState<number>(0);

    const handleImageUpload = (file: File) => {
        setImage(file);
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            setImageWidth(img.width);
            setImageHeight(img.height);
        };
        img.src = url;
        setImageURL(url);
    };

    const handleResize = (width: number, height: number) => {
        setImageWidth(width);
        setImageHeight(height);
    };

    const handleCropComplete = (crop: any) => {
        // Логика завершения обрезки
    };

    return (
        <div className="image-editor">
            {!image && <DragDropUpload onFileUpload={handleImageUpload} />}
            {imageURL && (
                <>
                    <img src={imageURL} alt="uploaded" width={imageWidth} height={imageHeight} />
                    <Resizer width={imageWidth} height={imageHeight} onResize={handleResize} />
                    <Cropper src={imageURL} onCropComplete={handleCropComplete} />
                </>
            )}
        </div>
    );
};

export default ImageEditor;
