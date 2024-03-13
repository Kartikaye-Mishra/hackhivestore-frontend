import React,{createContext, useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext=({children})=>{
    const [products,setProducts] = useState();
    const[categories,setCategories]= useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const [showWishlist, setShowWishlist] = useState(false);
    const [WishlistItems, setWishlistItems] = useState([]);
    const [WishCount, setWishCount] = useState(0);


    const location = useLocation();
    useEffect(() => {
        const singleProductPageRegex = /^\/product\/\d+$/;
      
        if (singleProductPageRegex.test(location.pathname)) {
            window.scrollTo(0, 0);
        }
    }, [location]);
    
    useEffect(() => {
        
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

  
    const handleAddToCart = (product, quantity) => {
        setCartItems((prevCartItems) => {
            let items = [...prevCartItems];
            let index = items?.findIndex((p) => p.id === product?.id);
            if (index !== -1) {
                items[index].attributes.quantity += quantity;
            } else {
                product.attributes.quantity = quantity;
                items = [...items, product];
            }
            return items;
        });
    };
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };
   

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    const handleAddToWishlist = (product) => {
        
        let items = [...WishlistItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index === -1) {
      
            items = [...items, product];
        } 
      
        setWishlistItems(items);
    };
  
    const handleRemoveFromWishlist = (product) => {
        setWishlistItems((prevWishlistItems) => {
            let items = [...prevWishlistItems];
            items = items?.filter((p) => p.id !== product?.id);
            return items;
        });
    };
    useEffect(() => {
        let wishItemCount= 0;
        WishlistItems?.map((item) => (wishItemCount));
        setWishCount(WishlistItems.length);
    }, [WishlistItems]);
   
return(
    <Context.Provider value={
        {
            products,
            setProducts,
            categories,
            setCategories,
            cartItems,
            setCartItems,
            handleAddToCart,
            cartCount,
            handleRemoveFromCart,
            showCart,
            setShowCart,
            handleCartProductQuantity,
            cartSubTotal,

            showWishlist,
            setShowWishlist,
            WishlistItems,
            setWishlistItems,
            WishCount,
            setWishCount,
            handleAddToWishlist,
            handleRemoveFromWishlist,
    }
    }>
        {children}
    </Context.Provider>
)
}

export default AppContext;