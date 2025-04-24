/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import HomeNews from "../component/HomeNews";

function Home({ news }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "./images/home1.jpg",
    "./images/home2.jpg",
    "./images/home3.png",
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
      <HomeNews news={news} />
    </div>
  );
}

export default Home;
