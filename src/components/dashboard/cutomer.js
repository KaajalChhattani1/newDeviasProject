import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PublishIcon from "@mui/icons-material/Publish";
import GetAppIcon from "@mui/icons-material/GetApp";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Table } from "react-bootstrap";
import { neonBlue } from "../../color";

// async function userList() {
//   let response = await fetch(apiRoutes.childrenApi);
//   let data = await response.json();

//   return data.users;
// }

export default function Customer({ customer }) {
  return (
    <Stack margin={4}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant={"h4"} fontWeight={300}>
          Customers
        </Typography>
        <Button
          sx={{
            backgroundColor: neonBlue[400],
            color: "whitesmoke",
            width: "26",
          }}
          startIcon={<AddRoundedIcon />}
        >
          Add
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <Button
          sx={{ color: "inherit", size: "20", fontWeight: 300, marginRight: 2 }}
          startIcon={<PublishIcon fontWeight={200} />}
        >
          Import
        </Button>
        <Button
          sx={{ color: "inherit", size: "20", fontWeight: 300 }}
          startIcon={<GetAppIcon />}
        >
          Export
        </Button>
      </Stack>
      <Paper
        elevation={3}
        width={"100%"}
        sx={{
          height: 90,

          alignContent: "center",
          justifyItems: "center",
          borderRadius: 4,
          marginTop: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          placeholder="Search Customers"
          sx={{
            m: 1,
            width: "70%",
            alignContent: "center",
            justifyItems: "center",
            borderRadius: 4,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <Card>
        <TableContainer component="Paper">
          <Table sx={{ minWidth: "600px" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>SignedUp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customer.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell align="left"> {item.name}</TableCell>
                    <TableCell align="left"> {item.email}</TableCell>

                    <TableCell align="left">
                      {item.address.city},{item.address.state}
                      {item.address.country}
                    </TableCell>
                    <TableCell align="left">{item.phone}</TableCell>
                    <TableCell align="left">
                      {dayjs(item.createdAt).format("MMM D, YYYY")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {/* let users = await userList();
    <div>
      {users.map((item) => (
        <div key={item.id}>
          {item.id}
          <Link href={`/dashboard/settings/${item.id}`}>
            {item.firstName + "        "}
          </Link>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div> */}
    </Stack>
  );
}
