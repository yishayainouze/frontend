import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, setCart, setCompare } from "../state";
import { useGetProductQuery } from "../state/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId, cart, compare } = useSelector(
    (state: { global: GlobalState }) => state.global
  );

  const { data: product } = useGetProductQuery(productId);

  const addToCart = () => {
    let temp = [...cart, product];
    dispatch(setCart(temp));
    navigate("/cart");
  };

  const addToCompare = () => {
    let temp = [...compare, product];
    dispatch(setCompare(temp));
    if (compare.length > 0) {
      navigate("/compare");
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "93vh",
        background: "#F0F0F0",
      }}
    >


      {product?.commonAttributes && (
        <Card
          sx={{
            width: "100%",
            maxWidth: "800px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={product.commonAttributes.imageURL}
            alt={product.name}
            sx={{
              objectFit: "cover", // התמונה תתאים את עצמה לגודל בצורה מלאה
              borderRadius: "8px", // פינות מעוגלות
            }}
          />
          <CardContent>

          <Typography gutterBottom variant="h5" component="div">
  <Typography variant="h5" component="span" fontFamily="Your-Font-Here" color="primary" fontWeight="bold">
    {product.name}
  </Typography>
</Typography>

<Typography variant="body2" color="text.secondary" fontFamily="Your-Font-Here">
  <Typography component="span" fontSize="1rem" >
    {product.commonAttributes.description}
  </Typography>
</Typography>

            <Typography variant="body2" color="text.secondary" fontFamily="Your-Font-Here" fontSize="1rem">
  <Typography variant="h6" component="span" color="primary" fontWeight="bold">
    Price:
  </Typography>
  <Typography component="span">
    {product.commonAttributes.price}$
  </Typography>
</Typography>




            {product.categoryAttributes &&
              Object.entries(product.categoryAttributes).map(
                ([key, value]) => (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key={key}
                  >
                    <strong>{`${key}`}</strong>: {`${value}`}
                  </Typography>
                )
              )}
          </CardContent>

          <CardActions>
            <Button
              onClick={addToCart}
              size="small"
              variant="contained"
              color="primary"
            >
              Add to Cart
            </Button>
            <Button
              onClick={addToCompare}
              size="small"
              variant="contained"
              color="secondary"
            >
              Compare
            </Button>
            <Button
              onClick={() => navigate("/Map")}
              size="small"
              variant="contained"
              color="primary"
            >
              Available at These Stores
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
