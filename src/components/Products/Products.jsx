import "./Products.scss";
import Product from "./Product/Product";


const Products = ({products,innerPage, headingText}) => {


    return (
    <div className="products-container" id="popular_products">

      { !innerPage && <div className="sec-heading">{headingText}</div>}
      
       <div className="products">
        {/* {
          // products?.data?.map((item)=>(
            products?.data?.filter((_, index) => (index + 1) % 3 === 0).map((item) => (
            <Product
            key = {item.id}
            id = {item.id}
            data = {item.attributes}
            />
          ))
        }  */}
        
        {
        headingText === "Popular Products" ? (
          products?.data?.filter((_, index) => (index + 1) % 3 === 0).map((item) => (
            <Product
              key={item.id}
              id={item.id}
              data={item.attributes}
            />
          ))
        ) : (
          products?.data?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              data={item.attributes}
            />
          ))
        )
      }
       
    </div>
    </div>
    );
};

export default Products;
