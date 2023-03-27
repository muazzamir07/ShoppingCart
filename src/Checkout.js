import { useSelector, useDispatch } from "react-redux";


function Checkout()
{

    const dispatch=useDispatch();
    const cart = useSelector(state => state.cart);
    const total = cart.reduce((acc, product) => acc + product.price, 0);


    return (<h1>Total Sum: ${total}</h1>)
}

export default Checkout;