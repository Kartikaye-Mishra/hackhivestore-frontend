import { BrowserRouter, Routes, Route,} from "react-router-dom";

import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import About from "./components/About/About";
import Success from "./components/Success/Success";

function App(){
    return(

        <>
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                  
                    <Route path="/about" element={<About />} />
                </Routes>
             
                <Footer />
            </AppContext>
        </BrowserRouter>
    </>
        )
}

export default App;
