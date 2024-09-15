import React from 'react';
import './ImageEditor.scss';

interface ImagePreviewProps {
    src: string;
    width: number;
    height: number;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, width, height }) => (
    <div className="image-preview">
        <img src={src} alt="Preview" width={width} height={height} />
    </div>
);

export default ImagePreview;
