"use client";
import Budget from "../../components/dashboard/budget";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import React from "react";
import { Divider, Grid } from "@mui/material";
import Barchart from "../../components/dashboard/barChart";

import dayjs from "dayjs";
import LatestProduct from "../../components/dashboard/latestProduct";
import { california, kepple, neonBlue, nevada } from "../../color";
import Traffic from "../../components/dashboard/trafficPieChart";
import LatestOrders from "../../components/dashboard/latestOrder";
function page() {
  const dataset = [
    { name: "This year", data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
    { name: "Last year", data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
  ];
  return (
    <div
      style={{
        backgroundColor: nevada[50],
        paddingBottom: 20,
        paddingRight: 16,
        paddingLeft: 16,
      }}
    >
      <Grid container spacing={2} sx={{ margin: 0, width: "98%" }}>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="Budget"
            diff="up"
            value="$24k"
            diffvalue="12"
            image={<MonetizationOnIcon sx={{ height: "56", width: "56" }} />}
            color={neonBlue[600]}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="TOTAL CUSTOMERS"
            diff="down"
            value="1.6k"
            diffvalue="16"
            image={<GroupIcon />}
            color={kepple[600]}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            name="Task Progress"
            diff="up"
            value="75.5%"
            diffvalue="12"
            image={<FormatListBulletedIcon />}
            color={california[400]}
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
        <Traffic
          chartSeries={[63, 15, 22]}
          labels={["Desktop", "Tablet", "Phone"]}
          sx={{ height: "100%" }}
        />
      </Grid>
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
        <Grid lg={8} md={12} xs={12} marginBottom={20}>
          <LatestOrders
            orders={[
              {
                id: "ORD-007",
                customer: { name: "Ekaterina Tankova" },
                amount: 30.5,
                status: "pending",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
              {
                id: "ORD-006",
                customer: { name: "Cao Yu" },
                amount: 25.1,
                status: "delivered",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
              {
                id: "ORD-004",
                customer: { name: "Alexa Richardson" },
                amount: 10.99,
                status: "refunded",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
              {
                id: "ORD-003",
                customer: { name: "Anje Keizer" },
                amount: 96.43,
                status: "pending",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
              {
                id: "ORD-002",
                customer: { name: "Clarke Gillebert" },
                amount: 32.54,
                status: "delivered",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
              {
                id: "ORD-001",
                customer: { name: "Adam Denisov" },
                amount: 16.76,
                status: "delivered",
                createdAt: dayjs().subtract(10, "minutes").toDate(),
              },
            ]}
            sx={{ height: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default page;
