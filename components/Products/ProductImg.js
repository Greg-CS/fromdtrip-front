import React, { useState } from "react";

export default function ProductImg({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <div className="text-center">
        <img src={activeImage} className="max-w-full max-h-200" alt="" />
      </div>
      <div className="flex gap-10 mt-4">
        {images.map((image) => (
          <div
            key={image}
            className={`border-2 ${
              image === activeImage ? "border-gray-300" : "border-transparent"
            } cursor-pointer rounded-xl p-1 bg-gray-300`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} className="w-10 h-10" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
