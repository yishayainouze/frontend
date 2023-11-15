import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalState } from "../state";
import { useGetProductQuery, useGetUserQuery } from "../state/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Product() {
  const navigate = useNavigate();
  const productId = useSelector(
    (state: { global: GlobalState }) => state.global.productId
  );

  const { data: product } = useGetProductQuery(productId);
  const userId = useSelector(
    (state: { global: GlobalState }) => state.global.userId
  );
  const user = useGetUserQuery(userId);

  const getLocalCart = () => {
    const local = localStorage.getItem("cart");
    const localData = local ? JSON.parse(local) : [];
    return localData;
  };

  // const addToCart = () => {
  //   if (!userId) {
  //     const cart = getLocalCart();
  //     const updatedCart = [...cart, product];
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     let cart = user.cart;
  //     const isOnCart = cart.find((p: any) => p.name == product.name);
  //     if (isOnCart) {
  //        cart = cart.map((p: any) => {
  //         if (p.name === product.name) {
  //           p.num += 1;
  //           return p;
  //         } else {
  //           return p;
  //         }
  //       });
        
  //     } else {
  //       cart.push(product)
  //     }
  //     user.cart = cart
  //     useUpdateUserQuery({id: userId, user: user})
  //   }
  // };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "93vh",
        background: "#87CEEB",
      }}
    >
      {product?.commonAttributes && (
        <Card
          sx={{
            width: "70%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={product.commonAttributes.imageURL}
            alt={product.name}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.commonAttributes.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={addToCart} size="small">
              Add to cart
            </Button>
            <Button size="small">Compare</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
