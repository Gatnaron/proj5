import React, { useState } from 'react';
import { InputNumber, Checkbox } from 'antd';
import './ImageEditor.scss';

interface ResizerProps {
    width: number;
    height: number;
    onResize: (width: number, height: number) => void;
}

const Resizer: React.FC<ResizerProps> = ({ width, height, onResize }) => {
    const [keepAspectRatio, setKeepAspectRatio] = useState(true);
    const [currentWidth, setCurrentWidth] = useState(width);
    const [currentHeight, setCurrentHeight] = useState(height);

    const handleWidthChange = (value: number | null) => {
        if (value !== null) {
            setCurrentWidth(value);
            if (keepAspectRatio) {
                const ratio = height / width;
                setCurrentHeight(Math.round(value * ratio));
            }
            onResize(value, currentHeight);
        }
    };

    const handleHeightChange = (value: number | null) => {
        if (value !== null) {
            setCurrentHeight(value);
            if (keepAspectRatio) {
                const ratio = width / height;
                setCurrentWidth(Math.round(value * ratio));
            }
            onResize(currentWidth, value);
        }
    };

    return (
        <div className="resizer">
            <Checkbox
                checked={keepAspectRatio}
                onChange={(e) => setKeepAspectRatio(e.target.checked)}
            >
                Keep Aspect Ratio
            </Checkbox>
            <div>
                <label>Width:</label>
                <InputNumber min={1} value={currentWidth} onChange={handleWidthChange} />
            </div>
            <div>
                <label>Height:</label>
                <InputNumber min={1} value={currentHeight} onChange={handleHeightChange} />
            </div>
        </div>
    );
};

export default Resizer;
