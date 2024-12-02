// // src/components/ImageGenerator.jsx
// import React, { useRef, useEffect, useState } from "react";
// import html2canvas from "html2canvas";
// import "./ImageGenerator.css"; // Import your CSS file for ImageGenerator styling
// import bgImage from "../assets/images/bg.jpg"; // Import your background image

// const ImageGenerator = ({ data }) => {
//   const contentRef = useRef(null);
//   const [imageDataURL, setImageDataURL] = useState(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       const canvas = contentRef.current;
//       const ctx = canvas.getContext("2d");

//       const bg = new Image();
//       bg.crossOrigin = "Anonymous";
//       bg.src = bgImage;

//       bg.onload = function () {
//         ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // Draw background image
//         drawContent(ctx); // Draw content on top of the background image
//         setImageDataURL(canvas.toDataURL("image/png")); // Save image data URL
//       };
//     }
//   }, [data]);

//   const drawContent = (ctx) => {
//     // Set font and text alignment
//     ctx.font = '25px Arial'; // Example font
//     // ctx.textAlign = 'center'; // Center text horizontally

//     // Example table-like content
//     const startX = 140;
//     let startY = 90;
//     const lineHeight = 20; // Reduced line height
//     const columnWidth = 1; // Reduced column width

//     // Set transparent background for the table-like content
//     ctx.fillStyle = 'rgba(255, 255, 255, 0)'; // Example table background color with 100% transparency

//     // Coin/Pair text with bold style
//     ctx.fillStyle = '#001ED1'; // Example text color
//     ctx.fillText(` ${data.coinPair}`, startX + columnWidth / 2, startY + lineHeight * 2);

//     // Reset font and text color for other fields
//     ctx.font = '25px Arial'; // Reset font size and style
//     ctx.fillStyle = '#B2BEB5'; // Reset text color

//     // Position text with conditional color
//     ctx.fillStyle = data.position === 'LONG/BUY' ? '#00ff20' : '#ff0000'; // Green for LONG, Red for SHORT
//     ctx.fillText(` ${data.position}`, startX + columnWidth / 2, startY + lineHeight * 4);

//     // Entry Point text
//     ctx.fillStyle = '#000'; // Reset text color
//     ctx.fillText(` ${data.entryPoint}`, startX + columnWidth / 2, startY + lineHeight * 6);

//     // Leverage text
//     ctx.fillText(` ${data.leverage}x`, startX + columnWidth / 2, startY + lineHeight * 8);

//     // Stop Loss text
//     ctx.fillText(` ${data.stopLoss}`, startX + columnWidth / 2, startY + lineHeight * 10);

//     // Take Profit text
//     ctx.fillText(` ${data.takeProfit}`, startX + columnWidth / 2, startY + lineHeight * 12);
//   };

//   const downloadImage = () => {
//     if (imageDataURL) {
//       const link = document.createElement("a");
//       link.href = imageDataURL;
//       link.download = "signal.png";
//       link.click();
//     }
//   };

//   return (
//     <div className="image-generator-container">
//       <center>
//         <button onClick={downloadImage} className="download-button">
//           Download Signal
//         </button>
//         <button onClick={downloadImage} className="download-button">
//           Copy
//         </button>
//       </center>
//       <br />
//       <canvas
//         ref={contentRef}
//         width={400}
//         height={400}
//         className="image-content"
//       ></canvas>
//       {imageDataURL && (
//         <div className="image-preview">
//           <img src={imageDataURL} alt="Generated" className="preview-image" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGenerator;

// src/components/ImageGenerator.jsx
import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import "./ImageGenerator.css"; // Import your CSS file for ImageGenerator styling
import bgImage from "../assets/images/bg.jpg"; // Import your background image

const ImageGenerator = ({ data }) => {
  const contentRef = useRef(null);
  const [imageDataURL, setImageDataURL] = useState(null);

  useEffect(() => {
    if (contentRef.current) {
      const canvas = contentRef.current;
      const ctx = canvas.getContext("2d");

      const bg = new Image();
      bg.crossOrigin = "Anonymous";
      bg.src = bgImage;

      bg.onload = function () {
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // Draw background image
        drawContent(ctx); // Draw content on top of the background image
        setImageDataURL(canvas.toDataURL("image/png")); // Save image data URL
      };
    }
  }, [data]);

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return { date, time };
  };

  const drawContent = (ctx) => {
    // Get current date and time
    const { date, time } = getCurrentDateTime();

    // Set font and text alignment
    ctx.font = '20px Arial'; // Example font, reduced to 30px for clarity

    // Example table-like content
    const startX = 140;
    let startY = 80;
    const lineHeight = 20; // Reduced line height
    const columnWidth = 1; // Reduced column width

[P0O9I A]    ctx.fillStyle = 'rgba(255, 255, 255, 0)'; // Example table background color with 100% transparency

    // Coin/Pair text with bold style
    ctx.fillStyle = '#001ED1'; // Example text color
    ctx.fillText(` ${data.coinPair}`, startX + columnWidth / 2, startY + lineHeight * 2);

    // Reset font and text color for other fields
    ctx.font = '23px Arial'; // Reset font size and style
    ctx.fillStyle = '#B2BEB5'; // Reset text color

    // Position text with conditional color
    ctx.fillStyle = data.position === 'LONG/BUY' ? '#00ff20' : '#ff0000'; // Green for LONG, Red for SHORT
    ctx.fillText(` ${data.position}`, startX + columnWidth / 2, startY + lineHeight * 4);

    // Entry Point text
    ctx.fillStyle = '#000'; // Reset text color
    ctx.fillText(` ${data.entryPoint}`, startX + columnWidth / 2, startY + lineHeight * 6);
//     // Take Profit text
     ctx.fillText(` ${data.takeProfit}`, startX + columnWidth / 2, startY + lineHeight * 8);
    // Leverage text
    ctx.fillText(` ${data.leverage}x`, startX + columnWidth / 2, startY + lineHeight * 10);

    // Stop Loss text
    ctx.fillText(` ${data.stopLoss}`, startX + columnWidth / 2, startY + lineHeight * 12);

    // Date and Time
    ctx.fillStyle = '#000'; // Example text color for date and time
    ctx.font = '15px Arial'; // Font size for date and time
    ctx.fillText(`Date: ${date} Time: ${time}`, startX + columnWidth / 2, startY + lineHeight * 14);
  };

  const downloadImage = () => {
    if (imageDataURL) {
      const link = document.createElement("a");
      link.href = imageDataURL;
      link.download = "signal.png";
      link.click();
    }
  };

  return (
    <div className="image-generator-container">
      <center>
        <button onClick={downloadImage} className="download-button">
          Download Signal
        </button>
        <button onClick={downloadImage} className="download-button">
          Copy
        </button>
      </center>
      <br />

      <canvas
        ref={contentRef}
        width={400}
        height={400}
        className="image-content"
      ></canvas>
      {imageDataURL && (
        <div className="image-preview">
          <img src={imageDataURL} alt="Generated" className="preview-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
