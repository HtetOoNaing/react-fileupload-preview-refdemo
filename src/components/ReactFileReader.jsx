import React, { useState } from "react";
import FileReader from "react-file-reader";

const ReactFileReader = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const handleFiles = files => {
    console.log(images.concat(files.base64));
    setImages(images.concat(files.base64));
  };
  return (
    <React.Fragment>
      <FileReader handleFiles={handleFiles} base64={true} multipleFiles={true}>
        <button className="btn">Upload</button>
      </FileReader>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setImages(
                  images.filter(image => images.indexOf(image) !== index)
                )
              }
            >
              X
            </button>
            <br />
            <img src={image} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ReactFileReader;
