import { useNavigate } from "react-router-dom";
import "./Product.scss";
 
const Product = ({id,data}) => {
    const navigate = useNavigate(); 

    // console.log("on image.jsx",data);
    // console.log("on image.jsx",id);
    
    return <div className="product-card" onClick={()=>navigate("/product/"+id)}>
        
    <div className="thumbnail">
{/* <img src={process.env.REACT_APP_DEV_URL+data.img.data[0].attributes.url} alt="" />         */}
{/* <img src={data.image.data[0].attributes.url} alt="" />         */}
<img src={data.image.data.attributes.url} alt="" />        
     
    </div>
    <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>

    </div>;
};

export default Product;
