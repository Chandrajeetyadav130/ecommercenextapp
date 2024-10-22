import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState ,useEffect} from "react";

export default function App({ Component, pageProps }) {
  const[cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)
  useEffect(()=>{
    console.log("_app page")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))

      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  },[])
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt=0;
    let keys=Object.keys(myCart)
    for(let i=0;i<keys.length;i++){
   subt+=myCart[keys[i]].price*myCart[keys[i]].qty;
    }
    setSubtotal(subt)
  }
  const addToCart = (itemcode, qty, price, name, size, variant) => {
    let newCart =JSON.parse(JSON.stringify(cart))
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + 1;

    }
    else {
      newCart[itemcode] = { qty, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)

  }
  const clearCart=()=>{
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemcode, qty, price, name, size, variant) => {
    console.log(qty)
    let newCart =JSON.parse(JSON.stringify(cart))
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - 1;

    }
    if(newCart[itemcode]["qty"]<=0){ //qty is field not a variable
      delete newCart[itemcode]
    }
  
    setCart(newCart)
    saveCart(newCart)

  }
  return <>
    <Navbar  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} />
    <Footer />

  </>;
}
