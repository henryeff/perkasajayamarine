import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  Menu,
  MenuItem,
  Icon,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

function NavBar() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorElOutboard, setSubMenuAnchorElOutboard] = useState(null);
  const [subMenuAnchorElWater, setSubMenuAnchorElWater] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [outboardSubMenuOpen, setOutboardSubMenuOpen] = useState(false);
  const [waterSubMenuOpen, setWaterSubMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorElOutboard(null);
    setSubMenuAnchorElWater(null);
  };

  const handleProductMenuClick = () => {
    setProductMenuOpen(!productMenuOpen);
  };

  const handleSubMenuOutboardClick = (event) => {
    if (isMobile) {
      setOutboardSubMenuOpen(!outboardSubMenuOpen);
    } else {
      setSubMenuAnchorElOutboard(event.currentTarget);
    }
  };

  const handleSubMenuWaterClick = () => {
    setWaterSubMenuOpen(!waterSubMenuOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
    if (open) {
      setProductMenuOpen(false);
      setOutboardSubMenuOpen(false);
      setWaterSubMenuOpen(false);
    }
  };

  const drawerList = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        height: "100%",
        color: "white",
      }}
      role="presentation"
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary="HOME" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary="ABOUT US" />
        </ListItem>
        <ListItem button onClick={handleProductMenuClick}>
          <ListItemText primary="PRODUCTS" />
          {productMenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={productMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleSubMenuOutboardClick}>
              <ListItemText primary={"\u00A0 OUTBOARDS"} />
              {outboardSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={outboardSubMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="2Strokes"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={"\u00A0 \u00A0 \u00A0 2 STROKES"} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="4strokes"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={"\u00A0 \u00A0 \u00A0 4 STROKES"} />
                </ListItem>
              </List>
            </Collapse>
            {/* Add more submenu items for other product categories if needed */}
            <ListItem
              button
              component={Link}
              to="genuineparts"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={"\u00A0 GENUINE PARTS"} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="yamalube"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={"\u00A0 YAMALUBE"} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          component={Link}
          to="/news"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary="NEWS" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary="CONTACT US" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar>
        <Toolbar sx={{ background: "black" }}>
          {!isMobile ? (
            <img
              src={"./images/logo.png"}
              alt="Logo"
              style={{ height: 50, width: 50 }}
            />
          ) : (
            ""
          )}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
                <Typography>Menu</Typography>
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ "& .MuiDrawer-paper": { backgroundColor: "black" } }}
              >
                {drawerList()}
              </Drawer>
            </>
          ) : (
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              style={{ color: "white" }}
            >
              <LinkTab label="HOME" to="/" sx={{ color: "white" }}></LinkTab>
              <LinkTab
                label="ABOUT US"
                to="about"
                sx={{ color: "white" }}
              ></LinkTab>
              <Tab
                label="PRODUCTS"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{ color: "white" }}
              ></Tab>
              <LinkTab label="NEWS" to="news" sx={{ color: "white" }}></LinkTab>
              <LinkTab
                label="CONTACT US"
                to="contact"
                sx={{ color: "white" }}
              ></LinkTab>
            </Tabs>
          )}
          {!isMobile && (
            <>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleSubMenuOutboardClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="inherit" sx={{ flexGrow: 1 }}>
                    OUTBOARDS
                  </Typography>
                  <Icon>
                    <ArrowRightIcon />
                  </Icon>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="genuineparts"
                  onClick={handleClose}
                >
                  GENUINE PARTS
                </MenuItem>
                <MenuItem component={Link} to="yamalube" onClick={handleClose}>
                  YAMALUBE
                </MenuItem>
              </Menu>
              <Menu
                anchorEl={subMenuAnchorElOutboard}
                open={Boolean(subMenuAnchorElOutboard)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <MenuItem component={Link} to="2Strokes" onClick={handleClose}>
                  2 STROKES
                </MenuItem>
                <MenuItem component={Link} to="4strokes" onClick={handleClose}>
                  4 STROKES
                </MenuItem>
              </Menu>
              <Menu
                anchorEl={subMenuAnchorElWater}
                open={Boolean(subMenuAnchorElWater)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {/* Add more submenu items for water vehicles if needed */}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default NavBar;
