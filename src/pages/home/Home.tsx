import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Grid } from "@mui/material";
import Box2 from "@mui/joy/Box";
import Card2 from "@mui/joy/Card";
import CardCover2 from "@mui/joy/CardCover";
import CardContent2 from "@mui/joy/CardContent";
import Typography2 from "@mui/joy/Typography";
import { useDispatch } from "react-redux";
import "./Home.css";
import { useGetCategoriesQuery, useGetProductsQuery } from "../../state/api";
import { setCategory } from "../../state";
import _ from "lodash";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: categories, error } = useGetCategoriesQuery() || []; //categories
  const { data: products } = useGetProductsQuery({}) || []; //products
  if (error) {
    return <div>Error loading categories</div>;
  }

  const addClick = async (cat: any) => {
    try {
      console.log(cat);
      let temp = { ...cat, numberOfClicks: cat?.numberOfClicks + 1 };
      console.log(temp);
      const res = await axios.put(
        `https://server-tpja.onrender.com/api/categories/${cat._id}`,
        temp
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //filter
  const topCategories = categories
    ? _.sortBy(categories, "numberOfClicks").reverse().slice(0, 3)
    : [];

  const topProducts = products
    ? _.sortBy(products, "numberOfClicks").reverse().slice(0, 1)
    : [];

  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "10vh",
            background: "#BDE0C0", // Gradient blue tone
            margin: "1.5rem auto", // Centered horizontally
            borderRadius: "20px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
            display: "flex",
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
            padding: "1rem", // Internal spacing
            color: "#333", // Text color
            fontSize: "1.2rem", // Text size
            textShadow: "1px 1px 2px #000", // Text shadow for contrast
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Allow items to wrap
            }}
          >
            <h2 style={{ color: "#333", margin: "0 1rem" }}>
              Popular Categories:
            </h2>
            <div
              style={{
                width: "30vw",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {categories &&
                topCategories?.map((c: any) => {
                  return (
                    <div
                      style={{
                        fontSize: "1.3rem",
                      }}
                      key={Date.now() * Math.random()}
                    >
                      {c.category}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "6rem",
        }}
      >
        <div
          style={{
            WebkitBoxShadow:
              "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
            boxShadow:
              "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
            width: "40vw",
            background: "#8FBC8F", // גוון אפור כהה יותר
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px", // רינועים עגולים
            color: "#333", // צבע טקסט שחור כהה
          }}
        >
          <h2>
            Popular Product:
            {topProducts ? (
              <span
                style={
                  {
                    // textShadow: "0 -1px 2px #FFF, 0 -1px 4px #ff0, 0 -5px 10px #ff8000, 0 -9px 20px #F00"
                  }
                }
              >
                {" " + topProducts[0]?.name}
              </span>
            ) : (
              "     "
            )}
          </h2>

          <br />
          <img
            src={topProducts[0]?.commonAttributes.imageURL}
            alt="top"
            height="45px"
            width="45px"
            style={{
              margin: "15px",
              border: "2px solid #FFFFFF", // White border for contrast
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)", // Soft shadow for depth
              padding: "3px", // Small padding to create a layer effect
              backgroundColor: "#FFFFFF", // White background for the image
              borderRadius: "10px", // Rounded corners
            }}
          />
        </div>
      </div>
      <Box
        sx={{
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
        <Container sx={{ py: 8, width: "80%", margin: "0 auto" }} maxWidth="md">
          <Grid container justifyContent="center">
            {categories &&
              categories.map((card: any, i: number) => (
                <Grid
                  item
                  key={Date.now() * i}
                  xs={6}
                  sm={3}
                  sx={{ marginX: "15px", marginY: "15px" }}
                >
                  <div
                    onClick={() => {
                      addClick(card);
                      dispatch(setCategory(card.category));
                      navigate("/products");
                    }}
                  >
                    <Box2
                      sx={{
                        perspective: "1000px",
                        transition: "transform 0.4s",
                        "& > div, & > div > div": {
                          transition: "inherit",
                        },
                        "&:hover": {
                          "& > div": {
                            transform: "rotateY(30deg)",
                            "& > div:nth-child(2)": {
                              transform:
                                "scaleY(0.9) translate3d(20px, 30px, 40px)",
                            },
                            "& > div:nth-child(3)": {
                              transform: "translate3d(45px, 50px, 40px)",
                            },
                          },
                        },
                      }}
                    >
                      <Card2
                        variant="outlined"
                        sx={{
                          minHeight: "280px",
                          width: "100%", // הגדרת רוחב התמונה ל-100% של התא
                          backgroundColor: "#fff",
                          borderColor: "#000",
                          backgroundImage: `url(${card.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <CardCover2
                          sx={{
                            border: "1px solid",
                            borderColor: "#777",
                            backdropFilter: "blur(1px)",
                            backgroundImage: `url(${card.img})`, // Set background image
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></CardCover2>
                        <CardContent2
                          sx={{
                            alignItems: "self-end",
                            justifyContent: "flex-end",
                            border: "1px solid",
                            borderColor: "#000",
                            backdropFilter: "blur(1px)",
                            backgroundImage: `url(${card.img})`, // Set background image
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <Typography2
                            level="h2"
                            fontSize="lg"
                            fontWeight="bold" // Set the font weight to bold
                            textColor="white" // Change the text color to a more contrasting color
                            m={2}
                          >
                            {card.category}
                          </Typography2>
                        </CardContent2>
                      </Card2>
                    </Box2>
                  </div>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
