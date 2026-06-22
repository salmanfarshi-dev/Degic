import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from '../assets/logo.png';

const drawerWidth = 240;
const navItems = ["About", "Services", "Projects", "Contact", "Sign Up"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
         <img src={Logo} alt="logo" className="w-[200px]"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: 'center'}}>
        <CssBaseline />
        <AppBar
          component="nav"
          className="!bg-white !shadow-none !border-b-2 border-gray-200"
        >
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className= "!w-[100px] !h-[100px]"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={Logo} alt="logo" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  className={
                    item === "Sign Up"
                      ? "!bg-[#2AB6911A] !text-[#2AB691] !px-6 !rounded-full !ml-[34px]"
                      : "!text-black !capitalize !text-lg !font-normal !font-inter"
                  }
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            anchor="left"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
