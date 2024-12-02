// src/components/Html2CanvasTest.jsx
import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const Html2CanvasTest = () => {
    const contentRef = useRef(null);
    const [image, setImage] = useState(null);

    const generateImage = () => {
        if (contentRef.current) {
            html2canvas(contentRef.current).then((canvas) => {
                setImage(canvas.toDataURL('image/png'));
            });
        }
    };

    return (
        <div>
            <div ref={contentRef} style={{ background: '#ccc', padding: '20000px' }}>
                <h2>This is a test</h2>
            </div>
            <button onClick={generateImage}>Generate Image</button>
            {image && <img src={image} alt="Generated" />}
        </div>
    );
};

export default Html2CanvasTest;
