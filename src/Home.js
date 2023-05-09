import React, { useState, useEffect } from 'react';
// import Card from '@material-ui/core/Card';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, createTheme, makeStyles } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { removeFromCart,addToCart } from './Store';
const theme = createTheme(
    {
        palette:
        {
            primary:{ main: '#29b6f6'}
        }
    }
);



function Home() {
  const [products, setProducts] = useState([]);
  const [cardValues, setCardValues] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const handleButtonClick = () => {
    const values = products.map((product, index) => {
      return product.props.children.props.children;
    });
    setCardValues(values);
  };


  return (
    <div>
      {products.map(product => (
        <Grid >
        
        <Card
        raised sx={{
          maxWidth: 300,
          margin: "0 auto",
        //   padding: "0.1em",
          objectFit:"contain"
        }}
        key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            
            <CardContent>{product.description}</CardContent>
            
            
            <CardMedia component="img" 
            image={product.image} 
            height="250"
            alt={product.title} 
            sx={{ objectFit: "contain"  }}/>
        
            <Box display="flex" justifyContent="center">
            <ThemeProvider theme={theme}>    
            <Button color="tertiary" 
            disabled={false} 
            size="large" 
            variant="filled"  onClick={addToCart}>${product.price}</Button>
            </ThemeProvider>
            
            </Box>
        </Card>
        </Grid>
      ))}
    </div>

  );
}

export default Home;
