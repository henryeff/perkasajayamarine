import { Typography } from "@mui/material";

function About() {
  return (
    <>
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <img
          src={"./images/yamaha-outboard.gif"}
          style={{
            paddingTop: "2%",
            margin: "auto",
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Outboard Image"
        />
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: 2,
            marginBottom: 2,
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            margin: "auto", // Add text shadow
          }}
        >
          About Us
        </Typography>
      </div>
      <div
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          textAlign: "justify", // Align text justified for a clean look
          paddingTop: "20px", // Add some top padding for space
          paddingBottom: "20px", // Add some bottom padding for space
          lineHeight: "2", // Increase line height for better readability
        }}
      >
        <Typography variant="body1" gutterBottom>
          Welcome to PERKASA JAYA MARINE, your premier destination for all
          things Yamaha Marine in West Sumatra. <br />
          As an esteemed Yamaha Marine 3S Main Dealer, we proudly stand as a
          testament to excellence in the marine industry. <br />
          Specializing as an Authorized Dealer of Yamaha Outboard Motors,
          Genuine Parts, and Accessories, along with offering the finest in
          Yamalube Yamaha and Water Vehicles, we are your go-to source for
          unrivaled quality and performance.
          <br /> We boast an extensive inventory featuring a diverse range of
          Yamaha Outboard models, ensuring that our customers have access to the
          latest innovations and reliable choices. <br />
          What sets us apart is our commitment to providing a comprehensive
          service – from offering complete Genuine Parts to employing highly
          skilled technicians with years of expertise.
          <br /> Your marine experience is in capable hands with us. With a
          legacy built on years of experience and dedication, we take pride in
          being your trusted partner in all things Yamaha Marine.
          <br /> Our mission is clear: to prioritize customer satisfaction above
          all else. As a customer-centric establishment, we go the extra mile to
          ensure that every interaction with us is a seamless and enjoyable
          experience. Our team is not just here to sell products; we're here to
          build lasting relationships with our valued customers.
          <br /> Discover the epitome of marine excellence with us. <br />
          <br />
          <center>
            Your adventure with Yamaha begins here, where quality meets passion,
            and customer satisfaction is not just a goal – it's our promise.{" "}
          </center>
        </Typography>
      </div>
    </>
  );
}

export default About;
