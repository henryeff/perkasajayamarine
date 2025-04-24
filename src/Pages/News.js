import { useEffect, useState } from "react";
import NewsContent from "../component/NewsContent";

function News({ news }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "./images/yamalube.jpg",
    "./images/yamalube2.jpg",
    "./images/yamalube3.jpg",
  ];
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
      <NewsContent news={news} />
    </div>
  );
}

export default News;
