import React, { useState } from 'react';
import './Bottom.css';
import { ImageFile } from '../img.js';

const Bottom = () => {
  const [images, setImages] = useState(ImageFile);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3; 

  const handlePrevClick = (event) => {
    if (startIndex - itemsPerPage < 0) {
      blinkButton(event.target); 
    } else {
      setStartIndex((prevIndex) => prevIndex - itemsPerPage);
      changeButtonColor(event.target);
    }
  };

  const handleNextClick = (event) => {
    if (startIndex + itemsPerPage >= images.length) {
      blinkButton(event.target); 
    } else {
      setStartIndex((prevIndex) => prevIndex + itemsPerPage);
      changeButtonColor(event.target);
    }
  };

  const changeButtonColor = (element) => {
    const originalColor = element.style.backgroundColor;
    element.style.backgroundColor = "rgba(255, 255, 255, 0.278)"; 
    setTimeout(() => {
      element.style.backgroundColor = originalColor;
    }, 200);
  };

  const blinkButton = (element) => {
    const originalColor = element.style.backgroundColor;
    const className = element.className;
    const otherButtonSelector = className === "ri-arrow-left-line" ? ".ri-arrow-right-line" : ".ri-arrow-left-line";
    const otherButton = document.querySelector(otherButtonSelector);
    
    if (otherButton) {
      otherButton.style.backgroundColor = "rgba(255, 255, 255, 0.278)";
      setTimeout(() => {
        otherButton.style.backgroundColor = originalColor;
      }, 200);
    }
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const newImage = {
          id: images.length + 1,
          img: URL.createObjectURL(file),
        };
        setImages((prevImages) => [...prevImages, newImage]);
      }
    };
    input.click();
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='main-bottom'>
      <div className="topContent">
        <h5>Gallery</h5>
        <div className="bottomTopRight">
          <h5 onClick={handleAddImage}>+ ADD IMAGE</h5>
          <div className="arrow">
            <i className="ri-arrow-left-line" onClick={handlePrevClick}></i>
            <i className="ri-arrow-right-line" onClick={handleNextClick}></i>
          </div>
        </div>
      </div>
      <div className="bottomimage">
        {visibleImages.map((item) => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Bottom;
