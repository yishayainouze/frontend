import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalState, Product } from "../state";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardContent,
} from "@mui/material";
import { useGetCategoriesQuery, useGetCategoryQuery, useGetProductQuery, useGetProductsQuery, useGetUserQuery, useGetUsersQuery, useLoginQuery, useRegisterQuery, useSetClicksQuery, useUpdateCategoryQuery, useUpdateUserQuery } from "../state/api";
const Products = () => {
  const navigate = useNavigate();
  const tempData = useSelector(
    (state: { global: GlobalState }) => state.global.products
  );

  // const doc = {
  //   "commonAttributes": {
  //     "price": 899.99,
  //     "manufacturer": "TechPro",
  //     "description": "A powerful laptop with high-speed processing and a sleek design.",
  //     "imageURL": "https://example.com/laptop-computer.jpg"
  //   },
  //   "_id": "65508a253df12112f47734e3",
  //   "id": 2,
  //   "name": "Laptop Computer",
  //   "category": "Computers",
  //   "numberOfClicks": 9,
  //   "quantity": 1
  // }

  // const result = useSetClicksQuery({id: 2, product: doc})
  // console.log(result);
  // const {data} = useGetProductsQuery({})
  // const user = {
  //   "username": "user1",
  //   "password": "password1",
  //   "name": "John Doe",
  //   "email": "johndoe@example.com",
  //   "address": "123 Mapleee Street",
  //   "cart": [
  //     {
  //       "product_id": 3,
  //       "quantity": 3,
  //       "price": "59.99",
  //       "image": "https://example.com/path/to/image2.jpg"
  //     }
  //   ]
  // }
  // const reg = {
  //   "password": "password1",
  //   "email": "ysw@example.com"
  // }

  const cat = {
    "_id": "6551f4a1954043cf6d8650c4",
    "img": "Refrigerator",
    "category": "Kitchen Appliances",
    "numberOfClicks": 5
  }
  const result  = useUpdateCategoryQuery({id: "6551f4a1954043cf6d8650c4", category: cat})
  console.log(result);
  
  // const {data} = useGetUserQuery("654e05e3f1f6b13fea984a1a")
  // console.log(data, "rtk");

  

  

  return (
    <div>
      Products
      <button onClick={() => navigate("/product")}>product</button>
      <div>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Categories
            </Typography>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {tempData.map((card: Product, i: number) => (
                <Grid item key={Date.now() * i} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://source.unsplash.com/random"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {card.category}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ minHeight: 70 }}
                      >
                        {card.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ minHeight: 60 }}
                      >
                        {card.commonAttributes.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Products;
