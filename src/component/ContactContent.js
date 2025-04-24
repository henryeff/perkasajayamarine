import React from "react";
import { Typography, Grid } from "@mui/material";

function ContactContent() {
  return (
    <div>
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
            color: "#015CA7",
            paddingBottom: 1, // Add text shadow
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "black",
            paddingBottom: 8,
          }}
        >
          Get in touch and we'll get back to you as soon as we can. We look
          forward to hearing from you!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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
              TOKO TUNGGAL JAYA
            </Typography>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Email:
                <a href="mailto:harry@pjmcv.com"> harry@pjmcv.com</a>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Phone: +62 751 36628
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Fax: +62 751 26179
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Address:
              </Typography>
              <Typography variant="h6">
                Jalan M. Yamin SH No 144.
                <br />
                Padang, West Sumatera <br />
                Indonesia
              </Typography>
            </div>
            <div style={{ marginTop: 20, paddingBottom: 70 }}>
              <iframe
                title="Toko Tunggal Jaya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2682573356733!2d100.35342067552749!3d-0.951420006059945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94a495d8d3d%3A0x2b0f9201758b4d0a!2sTunggal%20jaya%20(Mesin%20Tempel%20Yamaha)!5e0!3m2!1sen!2sus!4v1715839884194!5m2!1sen!2sus"
                width="90%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
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
              PERKASA JAYA MARINE
            </Typography>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Email: <a href="mailto:harry@pjmcv.com"> harry@pjmcv.com</a>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Phone: +62 751 840010
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Fax: +62 751 26179
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                Address:
              </Typography>
              <Typography variant="h6">
                Jalan Imam Bonjol No. 27D
                <br />
                Padang, West Sumatera <br />
                Indonesia
              </Typography>
            </div>
            <div style={{ marginTop: 20 }}>
              <iframe
                title="Perkasa Jaya Marine"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.6318303022213!2d100.36156940017027!3d-0.9553872098235918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94565e985ed%3A0xf32c9c76b6fb39c1!2sCV.%20PERKASA%20JAYA%20MARINE!5e0!3m2!1sen!2sus!4v1715840042078!5m2!1sen!2sus"
                width="90%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ContactContent;
