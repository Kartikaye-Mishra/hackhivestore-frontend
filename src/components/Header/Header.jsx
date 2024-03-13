import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import {HashLink} from 'react-router-hash-link'
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    
  
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    
    const { cartCount, showCart, setShowCart } = useContext(Context);
    const{WishCount,showWishlist,setShowWishlist} = useContext(Context);
const [query,setQuery] = useState("")
    const handleChange=(e)=>{
        setQuery(e.target.value);
    
    }

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
        
               
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        {/* <li >About</li> */}
                       {/* <li><a href="/#Categories">Categories</a></li> */}
                        <li><HashLink className="link" to={"/#Categories"}>Categories</HashLink></li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        HACKHIVESTORE.
                    </div>


                    <div className="right">


                        <TbSearch className="SearchLowResolution" onClick={() => setSearchModal(true)} />


                        <div className="searchbar">
                            <input type="text" placeholder="Search" onChange={handleChange}/><span><TbSearch onClick={() => setSearchModal(true)}></TbSearch></span>
                        </div>


                        {/* <AiOutlineHeart /> */}
                        <span
                            className="cart-icon"
                            onClick={() => setShowWishlist(true)}
                        >
                           <AiOutlineHeart />
                            {!!WishCount && <span>{WishCount}</span>}
                            
                            
                        </span>
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                            
                        </span>
                    </div>
                </div>
            </header>
            
              {searchModal && <Search setSearchModal={setSearchModal} prequery={query} />}
            {showCart && <Cart setShowCart={setShowCart} />}
            {showWishlist && <Wishlist setShowWishlist={setShowWishlist} />}
        </>
    );
};

export default Header;
