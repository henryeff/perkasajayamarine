import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "react-router-dom";

function HomeNews({ news }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handleBack = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const reversedNews = [...news].reverse();
  const displayedNews = reversedNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div style={{ padding: "2%" }}>
      <Typography variant="h2" sx={{ paddingBottom: "1%" }}>
        Latest News
      </Typography>
      <Grid container spacing={2} minHeight={160}>
        {displayedNews.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ maxWidth: 400, minWidth: 400 }}>
              <CardMedia sx={{ height: 140 }} image={item.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Link to={`news/${item.idNews}`}>
                  <Button size="small">Continue Reading ▶️</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          textAlign: "center",
          marginTop: "1%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={handleBack} disabled={startIndex === 0}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= news.length}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default HomeNews;
