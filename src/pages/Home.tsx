import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GlobalState } from "../state";
import { Box, Container, Typography, Grid, Card, CardMedia } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector(
    (state: { global: GlobalState }) => state.global.products
  );
  console.log(data);

  return (
    <div>
      <button onClick={() => navigate("/products")}>products</button>
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
            {data.map((card: any, i: number) => (
              <Grid item key={Date.now() * i} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "purple",
                      }}
                    >
                      {card.category}
                    </Typography>
                  </CardMedia>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

// import {  useNavigate } from "react-router-dom"

// const Home = () => {

//     const navigate = useNavigate()

//   return (
//     <div>
//       Home
//       <button onClick={()=> navigate("/products")}>products</button>
//     </div>
//   )
// }

// export default Home
