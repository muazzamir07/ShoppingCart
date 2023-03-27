import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, MenuItem, createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { removeFromCart, addToCart } from './Store'; 
import { useSelector, useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
// import { makeStyles } from '@mui/styles';
import './card.css';


// const useStyles = makeStyles(() => ({
//     cardContent: {
//       display: "none",
//     },
//     card: {
//       maxWidth: 300,
//       margin: "0 auto",
//       objectFit: "contain",
//       "&:hover": {
//         "& $cardContent": {
//           display: "block",
//         },
//       },
//     },
//   }));


function Categories() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
//   cgit onst classes = useStyles();
  const cart = useSelector(state => state.cart);
  
  const dispatch=useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = index => {
    dispatch(removeFromCart(index));
  };




  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';//fetch from api 
    if (category !== 'all') {
      url += `/category/${category}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, [category]); //filter on the basis of category
  
  //filter the products on the basis of search bar
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );




  return (
    <div>
      <div>
      <h1>Products</h1>
      
      <TextField
        label="Search"
        variant="outlined"
        onChange={e => setSearchTerm(e.target.value)}/>

      <Select label="Age" onChange={e => setCategory(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="jewelery">Jewelery</MenuItem>
        <MenuItem value="men clothing">Men's Clothing</MenuItem>
        <MenuItem value="women clothing">Women's Clothing</MenuItem>
      </Select>
      <div style={{display:"flex", flexWrap:"wrap" ,justifyContent: 'space-around'}}>
        {filteredProducts.map(product => (
          <Grid >
        
          <Card className="product-card"
          raised sx={{
            maxWidth: 400,
            margin: "0 auto",
          //   padding: "0.1em",
            objectFit:"contain",width: "400px", height: "700px",
            marginTop:"20px",
            

          }}
          key={product.id}>
              <h1>{product.title}</h1>
              
              <CardContent className="product-card-content">{product.description}</CardContent>
              
              
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
              variant="filled"  onClick={() => handleAddToCart(product)}>${product.price}</Button>
              {/* </ThemeProvider> */}
              
              </Box>
          </Card>
          </Grid>
        ))}
      </div>
      </div>
    
      
    </div>
    
  );
}

export default Categories;