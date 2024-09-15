import React from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageEditor.scss';

interface DragDropUploadProps {
    onFileUpload: (file: File) => void;
}

const DragDropUpload: React.FC<DragDropUploadProps> = ({ onFileUpload }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/jpeg': [], 'image/png': [] },
        onDrop: acceptedFiles => onFileUpload(acceptedFiles[0]),
    });

    return (
        <div className="drag-drop-upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select an image</p>
        </div>
    );
};

export default DragDropUpload;
