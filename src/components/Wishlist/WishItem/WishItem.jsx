import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
import { useContext } from "react";
import "./WishItem.scss";
const WishItem = () => {

  
    const {WishlistItems, handleRemoveFromWishlist } = useContext(Context);

    return (
        <div className="cart-products">
            {
                WishlistItems.map(item => (
                    
                    <div className="cart-product" key={item.id}>
                           
                        {/* <div className="img-container">
                            <img src={process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
                        </div> */}
                        <div className="img-container">
                            <img src={item.attributes.image.data.attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <MdClose className="close-btn" onClick={()=>handleRemoveFromWishlist(item)}></MdClose>
                            
                        </div>

                    </div>


                ))}

        </div>
    );
};

export default WishItem;
