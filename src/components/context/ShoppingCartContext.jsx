import { createContext, useState,useContext,useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { storeItems } from '../data/storeItems';


// 1 creer context
const ShoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

// 2 creer provider
const ShoppingCartProvider=({children})=>{

    // 4 creer state
   
  

    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // add to cart function   , item, setItems, fonction some verifie si id existe deja dans la liste
    const addToCart=(item)=>{

            // Vérifier si l'élément existe déjà dans la liste
            const itemExists = cartItems.some(cartItem => cartItem.id === item);

            if (!itemExists) {
                // Si l'élément n'existe pas, l'ajouter au panier
                const newItem = { id: item, quantity: 1 };
                setCartItems([newItem, ...cartItems]);
            }
            // Si l'élément existe déjà, vous pouvez choisir de ne rien faire ou d'afficher un message d'erreur.
    }



    // get quantity ==> find
    const getQuantity=(id)=>{
        const item=cartItems.find((item)=> item.id===id) 
        if(item){
            
          
            return item.quantity 
        }
        else return 0;
    }


     // calculer total

     const getTotal=()=>{

    
        let total=0
      
        cartItems.forEach((item) => {
            if (storeItems.find((itemm) => itemm.id === item.id)) {
              total += getSousTotal(item.id, item.quantity);
            }
          });
        


        console.log(total)  
        return total
        
    
    }

    // calculer sous total 

    const getSousTotal=(id,quantity)=>{

        const item=storeItems.find((item)=> item.id===id) 
   
        if(item===null){
            
            return null;
        }else{

            const sousTotal = item.price * quantity;
            return sousTotal ;
        }
    
    }

   
 
   


    // increase quantity , map

    const increaseQuantity=(id)=>{

        const updateItems=cartItems.map((item)=>{
            if(id===item.id){
              
                return {...item, quantity: item.quantity+1}
            }
            return item;
        })
      
       
        setCartItems(updateItems)
       
    }


      // increase quantity , map

      const descreaseQuantity=(id)=>{

        const updateItems=cartItems.map((item)=>{
            if(id===item.id){
                if(item.quantity>1)
                return {...item, quantity: item.quantity-1}
            }
            return item;
        })
      
       
        setCartItems(updateItems)
       
    }
  
    // remove from cart function ==> filter , id
    const removeFromCart=(id)=>{
        setCartItems(cartItems.filter((item)=> item.id !== id  ))
        getQuantity(id)
       
    }




    // gestion de la carte

    // isOpen

    const[isOpen,setIsOpen]=useState(false)
    const Open =()=>{
       setIsOpen(!isOpen)
    }


    // calculer quantité total des articles 

    const cartQuantity=()=>{
        const sum = cartItems.reduce((accumulator, item) => {
            return accumulator + item.quantity;
          }, 0);
   
        
          return sum;
         
    }

    // calculer total

    return(

        <ShoppingCartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            getQuantity,
            descreaseQuantity,
            Open,
            isOpen,
            cartQuantity,
            getSousTotal,
            getTotal
        
        }}>
    
        {children}
        <ShoppingCart />
        </ShoppingCartContext.Provider>
    )
 
}


// 3 export provider 
export default ShoppingCartProvider;


// 5 useShoppingCart pour acceder au data du context d'apres n'importe quel component

export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext);
}


// roh l app w importi provider w diri dakhelha g3 les components
