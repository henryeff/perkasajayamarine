import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DisplayProduct({
  products,
  openModal,
  handleOpenModal,
  handleCloseModal,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Modal openModal={openModal}>
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          fullScreen
          TransitionComponent={Transition}
        >
          <DialogTitle sx={{ textAlign: "center" }}></DialogTitle>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginTop: 2,
              marginBottom: 2,
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            {product.name} Full Specification
          </Typography>
          <DialogContent
            sx={{
              display: "flex",
              alignItems: isSmallScreen ? "center" : "flex-start",
              overflowY: "auto",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <div
              style={{
                width: isSmallScreen ? "100%" : "35%",
                marginRight: isSmallScreen ? "0" : "5%",
                marginBottom: isSmallScreen ? "16px" : "0",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: isSmallScreen ? "50%" : "100%",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflowX: isSmallScreen ? "auto" : "visible",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Tipe Mesin
                      </TableCell>
                      <TableCell align="right">{product.tipeMesin}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Volume Silinder
                      </TableCell>
                      <TableCell align="right">{product.volume}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Jangkauan Operasi Maksimum
                      </TableCell>
                      <TableCell align="right">{product.jangkauan}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Perbandingan Kompresi
                      </TableCell>
                      <TableCell align="right">{product.kompresi}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        System Induksi Bahan Bakar
                      </TableCell>
                      <TableCell align="right">
                        {product.sistemInduksi}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        System Pengapian
                      </TableCell>
                      <TableCell align="right">{product.pengapian}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Konsumsi Bahan Bakar
                      </TableCell>
                      <TableCell align="right">{product.konsumsibb}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Perbandingan Gigi
                      </TableCell>
                      <TableCell align="right">{product.gigi}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        System Pelumas
                      </TableCell>
                      <TableCell align="right">{product.pelumas}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Metode Trim & Tilt
                      </TableCell>
                      <TableCell align="right">{product.trim}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        System Starter
                      </TableCell>
                      <TableCell align="right">{product.starter}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        System Kemudi
                      </TableCell>
                      <TableCell align="right">{product.kemudi}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Berat
                      </TableCell>
                      <TableCell align="right">{product.berat}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCloseModal();
                navigate("..");
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
    </div>
  );
}

export default DisplayProduct;
