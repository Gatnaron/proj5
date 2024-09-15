import React, { useRef, useState, useEffect } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageEditor.scss';

interface CropperProps {
    src: string;
    onCropComplete: (crop: PixelCrop) => void;
}

const Cropper: React.FC<CropperProps> = ({ src, onCropComplete }) => {
    const [crop, setCrop] = useState<Crop>({
        unit: 'px',
        width: 100,
        height: 100,
        x: 0,
        y: 0,
    });

    const [brightness, setBrightness] = useState<number>(100); // Brightness state
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleAspectChange = (aspectRatio: number) => {
        setCrop((prevCrop) => ({
            ...prevCrop,
            aspect: aspectRatio,
        }));
    };

    const handleCropChange = (newCrop: Crop) => {
        setCrop(newCrop);
    };

    const handleBrightnessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrightness(parseInt(event.target.value));
    };

    const handleDownload = () => {
        if (!canvasRef.current || !imgRef.current) return;
        const canvas = canvasRef.current;
        const img = imgRef.current;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.filter = `brightness(${brightness}%)`;
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Create a download link
            const link = document.createElement('a');
            link.download = 'edited-image.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    useEffect(() => {
        if (imgRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const img = imgRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.filter = `brightness(${brightness}%)`;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            }
        }
    }, [brightness]);

    return (
        <div className="cropper">
            <div className="image-container">
                <ReactCrop
                    crop={crop}
                    onChange={handleCropChange}
                    onComplete={(newCrop) => onCropComplete(newCrop)}
                />
                <img ref={imgRef} src={src} alt="Source" style={{ display: 'none' }} />
                <canvas ref={canvasRef}></canvas>
            </div>

            <div className="crop-aspects">
                <button onClick={() => handleAspectChange(1 / 1)}>1:1</button>
                <button onClick={() => handleAspectChange(16 / 9)}>16:9</button>
                <button onClick={() => handleAspectChange(4 / 3)}>4:3</button>
            </div>

            <div className="brightness-control">
                <label htmlFor="brightness">Brightness:</label>
                <input
                    id="brightness"
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={handleBrightnessChange}
                />
            </div>

            <button className="download-btn" onClick={handleDownload}>
                Download Image
            </button>
        </div>
    );
};

export default Cropper;
