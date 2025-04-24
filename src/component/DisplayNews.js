import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function NewsArticle({ news }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const itemNews = news.find((n) => n.idNews === id);
    setItem(itemNews);
  }, [news, id]);

  if (!item) {
    return <div>Loading...</div>;
  }
  const formattedDetails = item.details.replace(/\/n/g, "<br />");
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Card sx={{ maxWidth: 1000, width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: "auto", width: "100%" }}
          image={`${process.env.PUBLIC_URL}/${item.image}`}
          alt="News Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: "20px" }}
            dangerouslySetInnerHTML={{ __html: formattedDetails }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <Button variant="contained" onClick={() => navigate("/news")}>
            ◀️ Back to News
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default NewsArticle;
