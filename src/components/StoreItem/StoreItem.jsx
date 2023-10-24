import React from "react";
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "../FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";


const StoreItem = ({id,name,price,imgUrl}) => {
 
  const {addToCart,removeFromCart,increaseQuantity,getQuantity,descreaseQuantity}  =useShoppingCart();
 
  
  const handleAddToCart = (item) => {

    addToCart(item);
  }


  const handleRemoveToCart = (id) => {
   
    removeFromCart(id);
  
  }

  const handleIncreaseQuantity = () => {
   
    increaseQuantity(id);
  
  }

  const handledescreaseQuantity = () => {
   
    descreaseQuantity(id);
  
  }

  // afficher la quantite d'un article

  const quantity=getQuantity(id);





  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>


        <div className="mt-auto">
      
        {
            quantity===0 ? (
                <Button className="w-100"  onClick={()=> handleAddToCart(id)}>
                Add To Cart
                 </Button>
            ):(

                <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button  onClick={handledescreaseQuantity} >-</Button>
                  <div>
                    <span className="fs-3">{quantity} in cart</span>
                  </div>
    
    
                  <Button  onClick={handleIncreaseQuantity} >+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                onClick={()=>handleRemoveToCart(id)}
                >
                  Remove
                </Button>
              </div>
            )
        }

          
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;