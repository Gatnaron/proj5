import { useState } from 'react';
import { Crop, PixelCrop } from 'react-image-crop';

const useImageEditor = () => {
    const [crop, setCrop] = useState<Crop>({
        unit: 'px',
        width: 100,
        height: 100,
        x: 0,
        y: 0,
    });
    const [resizeDimensions, setResizeDimensions] = useState<{ width: number, height: number }>({ width: 100, height: 100 });

    const updateCrop = (newCrop: Crop) => {
        setCrop(newCrop);
    };

    const updateResize = (width: number, height: number) => {
        setResizeDimensions({ width, height });
    };

    const onCropComplete = (crop: PixelCrop) => {
        // Логика обработки завершения обрезки
    };

    return {
        crop,
        resizeDimensions,
        updateCrop,
        updateResize,
        onCropComplete,
    };
};

export default useImageEditor;
