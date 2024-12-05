import React from "react";

const InfiniteScroller = ({images}) => {
  return (
    <div className="overflow-hidden relative my-20 w-full">
      <div className="flex animate-scroll">
        {/* Images to display */}
        {images.map((image , index) => (
            <img src={image} alt={`Slide${index+1}`} className="w-20 filter grayscale h-auto mx-4" />
        ))}
        
        {/* Duplicate images for infinite scrolling */}
        {images.map((image , index) => (
            <img src={image} alt={`Slide${index+1}`} className="w-20 filter grayscale h-auto mx-4" />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
