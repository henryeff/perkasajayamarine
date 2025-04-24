import { Typography, useMediaQuery, useTheme } from "@mui/material";

function YamalubeContent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
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
        Pelumas Mesin Tempel Paling Unggul
      </Typography>
      <Typography variant="h5" sx={{ color: "#0F82CD" }}>
        Dibuat oleh Yamaha, untuk Yamaha Anda
      </Typography>
      <br />
      <Typography variant="body1">
        Yamalube Pelumas Mesin Tempel diciptakan untuk memberikan performa
        terbaik sesuai yang anda harapkan dari Mesin Tempel Yamaha anda dan pada
        saat yang sama juga memberikan perlindungan optimal pada investasi anda.
      </Typography>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          width={isSmallScreen ? "100%" : "750px"}
          height={isSmallScreen ? "auto" : "400px"}
          src={`https://www.youtube.com/embed/Bs7bmI6WlI0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Yamalube"
        />
      </div>
      <br />
      <Typography variant="body1">
        Berbagai variasi kemasan Yamalube Pelumas Mesin Tempel dikembangkan
        khusus untuk Mesin Tempel Yamaha. Para Ahli dari Yamaha telah
        mempertimbangkan segala situasi keadaan dilaut yang akan dihadapi oleh
        Mesin Tempel Yamaha di wilayah anda. Setiap komponen dalam Yamalube
        Pelumas Mesin Tempel telah melalui berbagai proses pemeriksaan dan
        pengujian yang ketat (mulai dari minyak dasar, aditif, anti korosi dan
        bahan pembersih anti karat) agar mencapai fungsi pelumas mesin tempel
        yang maksimal, diciptakan hanya untuk Mesin Tempel Yamaha. Dengan selalu
        menggunakan Yamalube Pelumas Mesin Tempel, kebersihan komponen mesin
        anda akan semakin baik dan menghambat pembentukan kotoran. Zat anti
        oksidan yang sangat kuat akan selalu melindungi dan menjaga kebersihan
        mesin.
      </Typography>
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "70%" }}>
          <Typography
            variant="h5"
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
            Minyak Pelumas Yamalube 2 Tak
          </Typography>
          <Typography variant="body1">
            ⭐Minyak Pelumas Yamalube 2-Tak merupakan pelumas dengan kualitas
            terbaik yang dirancang khusus untuk Mesin Tempel Yamaha
            <br />
            ⭐Minyak Pelumas Yamalube 2-Tak dilengkapi dengan kekentalan yang
            tepat untuk menjamin stabilitas cairan yang disebabkan oleh kondisi
            suhu yang berubah ubah
            <br /> ⭐Minyak Pelumas Yamalube 2-Tak ini memberikan perlindungan
            yang sempurna terhadap keausan dan scuffing piston serta cincin
            piston
          </Typography>
        </div>
        <div style={{ flex: "30%" }}>
          <img
            src="./images/yamalube-2tak-info.jpg"
            alt="yamalube 2 tak"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "70%" }}>
          <Typography
            variant="h5"
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
            Minyak Pelumas Yamalube 4 Tak
          </Typography>
          <Typography variant="body1">
            ⭐Minyak Pelumas Yamalube 4-Tak (10W-40, API SJ) merupakan pelumas
            murni yang diperkaya dengan formulasi unggul untuk meningkatkan
            efisiensi, memberikan pelumasan maksimum serta anti karat dan korosi
            bagi Mesin Tempel Yamaha
            <br />
            ⭐Zat aditif anti aus sangat membantu dalam melindungi bagian-bagian
            mesin yang penting dan zat pembersih juga membantu dalam menjaga
            kebersihan bagian dalam Mesin Tempel Yamaha anda.
            <br /> ⭐Menjamin kinerja tinggi dan daya tahan mesin yang lebih
            lama.
          </Typography>
        </div>
        <div style={{ flex: "30%" }}>
          <img
            src="./images/yamalube-4tak-info.jpg"
            alt="yamalube 4 tak"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "70%" }}>
          <Typography
            variant="h5"
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
            Yamalube Pelumas Roda Gigi SAE90 GL-4
          </Typography>
          <Typography variant="body1">
            ⭐Yamalube SAE90 GL-4 Outboard Engine Gear Oil sangat
            direkomendasikan untuk semua Mesin Tempel Yamaha.
            <br />
            ⭐Pelumas ini memiliki kekuatan gerak yang besar, sifat-sifat adhesi
            yang unggul dan memberikan perlindungan bagi roda gigi dan komponen
            lainnya di dalam mesin.
            <br /> ⭐Minyak pelumas roda gigi premium yang diciptakan khusus
            untuk gear case Mesin Tempel Yamaha.
          </Typography>
        </div>
        <div style={{ flex: "30%" }}>
          <img
            src="./images/yamalube-SAE90-GL-4.jpg"
            alt="yamalube 4 tak"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "70%" }}>
          <Typography
            variant="h5"
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
            Yamalube Pelumas Roda Gigi SAE90 GL-5
          </Typography>
          <Typography variant="body1">
            ⭐Yamalube SAE90 GL-5 Outboard Engine Gear Oil secara khusus dibuat
            untuk mesin-mesin dengan model sebagai berikut:
            <br />
            F200D, F225D, F250C, F225F, FL225F, F250D, FL250D, F300B, FL300B,
            F300A, FL300A, F350A, FL350A <br />
            ⭐Pelumas ini memiliki kekuatan gerak yang besar, sifat-sifat adhesi
            yang unggul dan memberikan perlindungan bagi roda gigi dan komponen
            lainnya di dalam mesin.
            <br /> ⭐Minyak pelumas roda gigi premium yang diciptakan khusus
            untuk gear case Mesin Tempel Yamaha.
          </Typography>
        </div>
        <div style={{ flex: "30%" }}>
          <img
            src="./images/yamalube-SAE90-GL-5.jpg"
            alt="yamalube 4 tak"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default YamalubeContent;
