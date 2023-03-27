import Home from "./Home";
import { useSelector } from "react-redux";
import { removeFromCart, addToCart } from './Store'; 
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, createTheme, makeStyles } from '@mui/material';
import Button from '@mui/material/Button';


function Cart()
{
    
    const dispatch=useDispatch();
    const cart = useSelector(state => state.cart);
    // return (<h1>Checkout</h1>)
    
    const handleRemoveFromCart = index => {
        dispatch(removeFromCart(index));
    };

    return(
        <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <div>
                
          <Card
          raised sx={{
            maxWidth: 300,
            margin: "0 auto",
          //   padding: "0.1em",
            objectFit:"contain"
          }}
          key={index}>
              <CardHeader>{product.title}</CardHeader>
              
              <CardContent>{product.description}</CardContent>
              <CardContent>Price: ${product.price}</CardContent>
              
              
              <CardMedia component="img" 
              image={product.image} 
              height="250"
              alt={product.title} 
              sx={{ objectFit: "contain"  }}/>
          
              <Box display="flex" justifyContent="center">
              {/* <ThemeProvider theme={theme}>     */}
              <Button color="tertiary" 
              disabled={false} 
              size="large" 
              variant="filled"  onClick={() => handleRemoveFromCart(index)}>Remove From Cart</Button>
              {/* </ThemeProvider> */}
              
              </Box>
          </Card>
            </div>
          ))}
        </ul>
        </div>
    );
};

export default Cart;