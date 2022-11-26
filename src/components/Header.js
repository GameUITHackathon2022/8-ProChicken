import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { useUserContext } from "../context/UserContext";

const pages = ["Home", "Your Events", "Joined Events"];
const navList = ["/", "/your-events", "/joined-events"];

export default function MenuAppBar() {
  const { pathname } = useLocation();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    if (pathname === "/signin" || pathname === "/signup") {
      return;
    }
  }, [pathname]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleCloseNavMenu = (event) => {};

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setUser } = useUserContext();

  const handleSignout = () => {
    localStorage.removeItem("user");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/">
              <img
                style={{
                  width: "80",
                  height: "80px",
                }}
                src={logoImg}
                alt="logo-img"
              />
            </Link>
          </Typography>
          <Box
            sx={{
              marginLeft: "20px",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, idx) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={`${navList[idx]}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/user-detail">My profile</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to={`/create-event/userId`}>Viết bài</Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/signup" onClick={handleSignout}>
                    Đăng xuất
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
