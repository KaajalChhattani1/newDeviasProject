import Budget from "@/components/dashboard/budget";
import Navbar from "@/components/layout/navbar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import React from "react";
import { Grid } from "@mui/material";
import Barchart from "@/components/dashboard/barChart";
import LatestProduct from "@/components/dashboard/latestProduct";
import dayjs from "dayjs";
function page() {
  interface DataItem {
    name: string;
    data: number[];
  }
  const dataset: DataItem[] = [
    { name: "This year", data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
    { name: "Last year", data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
  ];
  return (
    <>
      <Grid container spacing={2} margin={1}>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="Budget"
            diff="up"
            value="$24k"
            diffvalue="12"
            image={<MonetizationOnIcon />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="TOTAL CUSTOMERS"
            diff="down"
            value="1.6k"
            diffvalue="16"
            image={<GroupIcon />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="Task Progress"
            diff="up"
            value="75.5%"
            diffvalue="12"
            image={<FormatListBulletedIcon />}
          />
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="TOTAL PROFIT"
            diff="up"
            value="$15k"
            diffvalue="12"
            image={<MonetizationOnIcon />}
          />
        </Grid>
      </Grid>

      <Barchart chartSeries={dataset} />
      <Grid lg={4} md={6} xs={12}>
        <LatestProduct
          products={[
            {
              id: "PRD-005",
              name: "Soja & Co. Eucalyptus",
              image: "/assets/product-5.png",
              updatedAt: dayjs()
                .subtract(18, "minutes")
                .subtract(5, "hour")
                .toDate(),
            },
            {
              id: "PRD-004",
              name: "Necessaire Body Lotion",
              image: "/assets/product-4.png",
              updatedAt: dayjs()
                .subtract(41, "minutes")
                .subtract(3, "hour")
                .toDate(),
            },
            {
              id: "PRD-003",
              name: "Ritual of Sakura",
              image: "/assets/product-3.png",
              updatedAt: dayjs()
                .subtract(5, "minutes")
                .subtract(3, "hour")
                .toDate(),
            },
            {
              id: "PRD-002",
              name: "Lancome Rouge",
              image: "/assets/product-2.png",
              updatedAt: dayjs()
                .subtract(23, "minutes")
                .subtract(2, "hour")
                .toDate(),
            },
            {
              id: "PRD-001",
              name: "Erbology Aloe Vera",
              image: "/assets/product-1.png",
              updatedAt: dayjs().subtract(10, "minutes").toDate(),
            },
          ]}
        />
      </Grid>
    </>
  );
}

export default page;
