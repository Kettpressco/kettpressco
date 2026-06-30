import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";


export default function CartIcon(){

  const {
    cartCount
  } = useCart();


  const [open,setOpen] = useState(false);


  return (

    <>

    <button

      onClick={() => setOpen(!open)}

      style={{
        background:"none",
        border:"none",
        color:"#fff",
        cursor:"pointer",
        fontSize:"20px"
      }}

    >

      🛒 {cartCount}

    </button>


    {open && <CartDrawer />}


    </>

  );

}