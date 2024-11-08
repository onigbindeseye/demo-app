import React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import logo from "../../assets/logos/logo.png";
import navConfig from "./config";

const Header = () => {
  const theme = useTheme();

  const [state, setState] = React.useState({
    right: false,
  });

  const handleDrawerClose = () => {
    setState(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navConfig.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      marginBottom={{ xs: 2, sm: 0 }}
      marginTop={{ xs: 2, sm: 0 }}
      id="back-to-top-anchor"
    >
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        marginLeft={{ xs: "0%", sm: "0%" }}
        width={"20%"}
      >
        <Box component="a" underline="none" href="/" title="Eco-Cyclers">
          <img src={logo} alt="logo" width={"50%"} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        width={{ xs: "100%", sm: "65%" }}
        justifyContent={"space-between"}
        marginRight={{ xs: "0%", sm: "0%" }}
      >
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          fontWeight={600}
        >
          <Box>
            <Link
              underline="none"
              component="a"
              href="/about-us"
              color={"#4CAF50"}
              fontWeight={700}
            >
              About Us
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/trash-calculator"
              color={"#4CAF50"}
              fontWeight={700}
            >
              Trash Calculator
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/resources/gallery"
              color={"#4CAF50"}
              fontWeight={700}
            >
              Resources
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/our-gallery"
              color={"#4CAF50"}
              fontWeight={700}
            >
              Our Gallery
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/contact-us"
              color="#4CAF50"
              fontWeight={700}
            >
              Contact Us
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }} width={"100%"}>
          <div>
            <AppBar
              position="fixed"
              zIndex={theme.zIndex.drawer + 1}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Toolbar>
                <Box
                  component="a"
                  underline="none"
                  href="/"
                  title="Eco-Cyclers"
                  width={"100%"}
                  marginRight={22}
                  marginTop={2}
                  marginBottom={2}
                >
                  <Box
                    component="img"
                    height={"90px"}
                    sx={{
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    src={logo}
                    alt={"logo"}
                  />
                </Box>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon fontSize="large" sx={{ color: "#9DCC49" }} />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                          <CloseIcon sx={{ color: "#9DCC49" }} />
                        </IconButton>
                      </DrawerHeader>
                      <Divider />
                      {list(anchor)}
                      <Divider />
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
