import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import Link from "@mui/material/Link";

interface SideNavBarProps {
  open: boolean;
}
interface NavItem {
  key: string;
  title: string;
  href: string;
  icon: string;
}
const SideNavBar = () => {
  let Color = "white";
  const pathname = usePathname();

  const RenderNavItems = (navItems: NavItem[]): JSX.Element[] => {
    return navItems.map((item) => (
      <div key={item.key}>
        <Box
          sx={{ backgroundColor: pathname == item.href ? "purple" : "inherit" }}
        >
          <Link underline="none" color="inherit" href={item.href}>
            {item.title}
          </Link>
        </Box>
      </div>
    ));
  };
  return (
    <Box
      sx={{
        width: 240,
        height: "100%",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
        padding: 2,
      }}
    >
      <Stack>
        <Typography sx={{ padding: 3 }} variant="h5">
          DeviasKit
        </Typography>
        <Box sx={{ borderWidth: 3, borderRadius: 4, padding: 1 }}>
          <Typography variant="body2">Workspace</Typography>
          <Typography>Devias</Typography>
        </Box>
        <Divider sx={{ borderColor: "white" }} />
        <Stack p={8} sx={{ padding: 1, height: 20 }}>
          <Box component="nav">{RenderNavItems(navItems)}</Box>

          <div>
            <Typography>Need more features?</Typography>
          </div>
          <Button></Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideNavBar;
