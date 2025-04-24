import { useEffect, useState } from "react";
import PartsContent from "../component/PartsContent";

function Parts() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["./images/parts1.jpg", "./images/parts2.jpg"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(${-imageIndex * 100}%)`,
        }}
      >
        {images.map((imgPath, idx) => (
          <img
            key={idx}
            src={imgPath}
            alt={`Home Image ${idx + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
      <PartsContent />
    </div>
  );
}

export default Parts;
