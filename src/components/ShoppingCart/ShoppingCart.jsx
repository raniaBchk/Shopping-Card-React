import React from "react";
import { Offcanvas } from "react-bootstrap";
import FormatCurrency from "../FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "../CartItem/CartItem";


const ShoppingCart = () => {

  const {cartItems,isOpen,Open,getTotal}  =useShoppingCart();


  const total=FormatCurrency(getTotal());
  
    // const calculTotal=()=>{

    //   if(storeItems.find((item)=> item.id===id) ){
    //     cartItems.reduce((accumulator, item) => {
    //       return accumulator + item.price;
    //     }, 0)
    // }    
    
    // const calculTotal=()=>{

    //   if(storeItems.find((item)=> item.id===id) ){

    //   }
   
    //   if(item===null){
          
    //       return null;
    //   }

    // }
   

    // const sousTotal = FormatCurrency(item.price * quantity);

  



  return (
    <Offcanvas show={isOpen} onHide={Open}   placement="end" >
      <Offcanvas.Header  closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       

      {
        cartItems.map((item)=>{
          return(
            <CartItem key={item.id} {...item}/>
          )
          
        })
      }


      <div className="ms-auto  fw-bold fs-5">
      Total {" "}
     {total}

    </div>

      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;