import React, { useEffect, useState } from "react";

export default function ProductImg({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  
  useEffect(() => {
    setActiveImage(images?.[0]);
  }, [images])

  return (
    <>
      <div className="text-center">
        <img src={activeImage} className="max-w-full max-h-200 rounded-full border-2 border-black" alt="" />
      </div>
      <div className="flex gap-10 mt-4">
        {images.map((image) => (
          <div
            key={image}
            className={`border-2 ${
              image === activeImage ? "border-black" : "border-transparent"
            } cursor-pointer rounded-full p-1`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} className="w-10 h-10 rounded-full border-2 border-black" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
