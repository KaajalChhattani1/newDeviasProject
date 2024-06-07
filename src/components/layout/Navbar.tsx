"use client";
import * as React from "react";
import {
  AppBar,
  Box,
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
        sx={{ justifyContent: "space-between", padding: 2 }}
      >
        <Stack direction="row" spacing={5}>
          <IconButton onClick={() => handleClick()} sx={{ padding: 0 }}>
            <FormatListBulletedIcon />
            <Drawer open={open}>{<SideNavBar />}</Drawer>
          </IconButton>
          <WindowIcon />
          <SearchIcon />
        </Stack>

        <Stack direction="row" spacing={5}>
          <GroupIcon />
          <NotificationsIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
