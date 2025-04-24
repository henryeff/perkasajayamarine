import { Typography, Link, Grid, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
//import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Footer = () => {
  return (
    <Toolbar sx={{ background: "black" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography variant="body2" color={"white"}>
            Copyright © 2024 Perkasa Jaya Marine
          </Typography>
        </Grid>
        <Grid item xs={4} container justifyContent="center">
          <Link
            href="https://www.facebook.com/yamahamarine.padang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Grid item padding={"3px"}>
            <Typography variant="body2" color={"white"}>
              Follow us on social media for updates!
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end"></Grid>
      </Grid>
    </Toolbar>
  );
};

export default Footer;
