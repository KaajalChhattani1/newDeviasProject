import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import { Avatar, CardContent, Stack, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface BudgetProps {
  name: string;
  value: string;
  diff: "up" | "down"; // Assuming diff can only be 'up' or 'down'
  image: ReactNode; // ReactNode can accept any valid JSX
  diffvalue: string; // Assuming diffvalue is a number
}
const Budget = ({
  name,
  value,
  diff,
  image,
  diffvalue,
}: BudgetProps): JSX.Element => {
  return (
    <Card sx={{ borderWidth: 1, borderRadius: 6 }}>
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <div>
            <Typography variant="overline">{name}</Typography>
            <Typography variant="h4">{value}</Typography>
          </div>
          <div>
            <Avatar
              sx={{
                backgroundColor: "purple",
                height: "56px",
                width: "56px",
              }}
            >
              {image}
            </Avatar>
          </div>
        </Stack>

        {diff == "up" ? (
          <Typography color={"green"}>
            <ArrowUpwardIcon />
            {diffvalue}
          </Typography>
        ) : (
          <Typography color={"red"}>
            <ArrowDownwardIcon />
            {diffvalue}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Budget;
