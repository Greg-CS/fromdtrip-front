import React, { useEffect, useState } from "react";

export default function ProductImg({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  
  useEffect(() => {
    setActiveImage(images?.[0]);
  }, [images])

  return (
    <>
      <div className="text-center">
        <img src={activeImage} className="w-[16rem] lg:w-[32rem] h-[16rem] lg:h-[32rem] rounded-full border-2 border-black" alt="product image" />
      </div>
      <div className="flex gap-10 mt-4">
        {images.map((image) => (
          <div
            key={image}
            className={`border-2 ${
              image === activeImage ? "border-black" : "border-transparent"
            } cursor-pointer rounded-full p-1 h-fit`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} className="w-10 h-10 rounded-full border-2 border-black" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
