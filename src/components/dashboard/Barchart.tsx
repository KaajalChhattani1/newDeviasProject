"use client";
import Chart from "react-apexcharts";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import {
  CardActions,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export interface dataset {
  chartSeries: { name: string; data: number[] }[];
}

function Barchart({ chartSeries }: dataset): React.JSX.Element {
  const [options] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });
  return (
    <Card
      style={{
        borderWidth: 1,
        margin: 20,
        borderRadius: 6,
      }}
    >
      <CardHeader title=" Sales" />
      <ReactApexChart
        options={options}
        series={chartSeries}
        type="bar"
        height={350}
        width="100%"
      />
      <Divider />
      <Stack direction={"row-reverse"}>
        <CardActions>
          <Typography variant="body1" component="button">
            View All
          </Typography>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default Barchart;
