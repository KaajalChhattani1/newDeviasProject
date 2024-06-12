"use client";
import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WindowIcon from "@mui/icons-material/Window";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SideNavBar from "./sideNavBar";
const Navbar = () => {
  const [open, setopen] = React.useState(false);
  const handleClick = () => {
    setopen(!open);
  };
  return (
    <Box component="header">
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          padding: 2,
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={5}>
          <IconButton onClick={() => handleClick()} sx={{ padding: 0 }}>
            <FormatListBulletedIcon />
            <Drawer open={open}>{<SideNavBar />}</Drawer>
          </IconButton>
          <SearchIcon />
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GroupIcon />
          <NotificationsIcon />
          <Avatar
            src="../vecteezy_woman-face-expression-clipart-design-illustration_9397892.png"
            sx={{
              cursor: "pointer",
              padding: 0,
              height: 35,
              width: 35,
              marginTop: 0,
            }}
          />
        </Stack>
      </Stack>
      <Divider sx={{ marginBottom: 5 }} />
    </Box>
  );
};

export default Navbar;
