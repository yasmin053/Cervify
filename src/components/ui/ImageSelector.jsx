import React from "react";
import pic1 from "/pic_upload.png";
import pic2 from "/pic_upload (2).png";

const ImageSelector = () => {
  return (
    <div className="bg-gray-50/20 backdrop-blur-lg shadow-lg p-4 rounded-xl">
      {/* Align items to the left */}
      <div className="flex gap-6 justify-start items-center">
        <button 
          className="bg-transparent border-2 border-dashed border-purple-500 w-24 h-24 rounded-xl flex items-center justify-center text-purple-500 text-4xl hover:bg-blue-200 transition-colors duration-200"
        >
          +
        </button>
        <img
          src={pic1}
          alt="Upload 1"
          className="w-24 h-24 rounded-xl object-cover"
        />
        <img
          src={pic2}
          alt="Upload 2"
          className="w-24 h-24 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSelector;
