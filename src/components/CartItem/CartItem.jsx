import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "../FormatCurrency";
import { storeItems } from '../data/storeItems';

const CartItem = ({id,quantity}) => {

    const {removeFromCart,getSousTotal}  =useShoppingCart();

    const item=storeItems.find((item)=> item.id===id) 
   
    if(item===null){
        
        return null;
    }

    const sousTotal = FormatCurrency( getSousTotal(id, quantity));


    const handleRemoveToCart = (id) => {
   
        removeFromCart(id);
      
      }



   return (
   


    <Stack direction="horizontal" gap={2} className="d-flex align-items-center m-2">
    <img
      src={item.imgUrl}
      alt="cart-img"
      style={{ width: "125px", height: "75px", objectFit: "cover" }}
    />
    <div className="me-auto">
      <div>
            {item.name} {"   "}
       
          <span className="text-muted" style={{ fontSize: "0.85rem" }}>
            x{quantity}
          </span>
   
      </div>
      <div className="text-muted" style={{ fontSize: "0.75rem" }}>
     
      </div>
    </div>
    <div>{sousTotal}</div>
    <Button
      variant="outline-danger"
      size="sm"
      onClick={()=>handleRemoveToCart(id)}
    >
      &times;
    </Button>
  </Stack>
  )
}

export default CartItem