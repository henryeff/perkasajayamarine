import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function PartsContent() {
  return (
    <>
      <div
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            marginTop: 2,
            marginBottom: 2,
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            margin: "auto",
            color: "#015CA7", // Add text shadow
          }}
        >
          Yamaha Marine Geniune Parts
        </Typography>
        <Typography variant="body1">
          Yamaha Genuine Parts atau Suku Cadang asli Yamaha, dibuat dengan
          spesifikasi yang persis sama dengan part asli seperti yang digunakan
          pada mesin motor tempel anda. Menggunakan suku cadang asli Yamaha
          adalah cara untuk menjamin mesin motor tempel anda selalu dalam
          kondisi prima salama bertahun tahun. Penggunaan suku cadang palsu atau
          imitasi dapat membuat garansi mesin tempel tidak berlaku dan
          memperpendek usia pakai mesin anda.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <ImageList
          sx={{ width: 1200, height: 250 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

const itemData = [
  {
    img: "./images/partContent/1.jpg",
    title: "Spare parts",
    rows: 2,
    cols: 2,
  },
  {
    img: "./images/partContent/2.jpg",
    title: "Spare Parts",
  },
  {
    img: "./images/partContent/3.jpg",
    title: "Spare Parts",
  },
  {
    img: "./images/partContent/4.jpg",
    title: "Spare Parts",
    cols: 2,
  },

  /*{
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  }, */
];

export default PartsContent;
