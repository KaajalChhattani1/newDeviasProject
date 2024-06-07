import {
  Box,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Card from "@mui/material/Card";
interface Product {
  id: string;
  name: string;
  image: string;
  updatedAt: Date;
}

interface LatestProductProps {
  products: Product[];
}

export function LatestProduct({ products = [] }: LatestProductProps) {
  return (
    <Card sx={{ borderWidth: 1, borderRadius: 3, margin: 3 }}>
      <CardHeader title="Latest Products" variant="h4" />
      <Divider />

      <List>
        {products.map((item, index) => (
          <Box height={"55px"} key={item.id}>
            <ListItemText primary={item.name} />

            <Divider />
          </Box>
        ))}
      </List>

      <Stack direction={"row-reverse"} marginRight={5}>
        <Typography>View all </Typography>
      </Stack>
    </Card>
  );
}

export default LatestProduct;
