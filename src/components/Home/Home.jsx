import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect,useContext } from "react";
import { Context } from "../../utils/context";
import "./Home.scss";
const Home = () => {

const {products,setProducts,categories,setCategories} = useContext(Context);
    useEffect(() => {
     
        getCategories();
        getProducts();
    }, [])
    
    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=>{
        // fetchDataFromApi("https://hackhivestore.onrender.com/api/categories?populate=*").then((res)=>{
     
            setCategories(res);
        });
    }
    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
        // fetchDataFromApi("https://hackhivestore.onrender.com/api/products?populate=*").then((res)=>{
    
            setProducts(res);
        });
    }

// console.log("Profucts on home are",products);
// console.log("Categories on home are",categories);

// console.log("Individual product");
// const firstProduct = products?.data?.[0];
// console.log("First product:", products?.data?.[0].attributes.image.data.attributes.url);
// console.log("First product image:", products?.data?.[0].attributes.data.img.data[0].attributes.url);

// console.log("Image info",firstProduct.attributes.image.data.formats.small.url);
// console.log("Image info",firstProduct.attributes.image.data.attributes);
    return (
    <div>
       
        <Banner></Banner>
    <div className="main-content">
        <div className="layout">
{
categories?<Category categories={categories}></Category>:null
}
{
products?<Products products={products} innerPage={false} headingText="Popular Products"></Products>:null
}     
            </div>
    </div>    
    

    </div>
    )
};

export default Home;
