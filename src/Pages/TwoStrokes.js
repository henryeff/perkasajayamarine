import { Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function TwoStrokes({ products, handleOpenModal }) {
  return (
    <>
      <Grid container spacing={2} sx={{ padding: "5%" }}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <Link to={product.id} key={product.id}>
              <img
                src={product.thumb}
                alt={product.id}
                onClick={() => handleOpenModal()}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: "8px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </Link>
            <br />
            <Typography
              sx={{
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
              }}
            >
              {product.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </>
  );
}

export default TwoStrokes;
