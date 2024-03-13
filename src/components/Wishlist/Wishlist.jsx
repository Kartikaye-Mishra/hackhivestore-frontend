import React, { useContext,useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import WishItem from "./WishItem/WishItem";


import "./Wishlist.scss";

const Wishlist = ({setShowWishlist}) => {
    const { WishlistItems,handleAddToCart, handleRemoveFromWishlist  } = useContext(Context);
    const [showPopup, setShowPopup] = useState(false);

const handleAddToCartfromWishlist = () => {
   
    WishlistItems.forEach((item) => {
        
        handleAddToCart(item, 1);
       

        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
        handleRemoveFromWishlist (item);
    });
};


    return (
        <div className="cart-panel">
           
            <div
                className="opac-layer"
            
                onClick={()=> setShowWishlist(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">WishList</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowWishlist(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!WishlistItems.length && (
                    <>
                    {showPopup && <div className="popup">Items added to cart!</div>}
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the Wishlist.</span>
                        <button className="return-cta" onClick={() => {setShowWishlist(false)}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                
        <div className="wish-footer">
      
                <p>
                     Like a product? Add it to your Wishlist to buy it later.
                </p>
              </div>
              </>
                )} 

                {!!WishlistItems.length && (
                    <>
                        <div className="cart-items-container">
                        <WishItem />
                      
                     </div>
                     <div className="cart-footer">
                            <div className="subtotal">
                     {/* {showPopup && <div className="popup">Items added to cart!</div>} */}
                                <span className="text">Total : </span>
                                <span className="text total">
                                   {WishlistItems.length + ' '}
                                    Item(s)
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    // onClick={handlePayment}
                                    onClick={handleAddToCartfromWishlist}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </>
                 )}
            </div>
        </div>
    );
};

export default Wishlist;
