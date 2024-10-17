import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "/src/components/Header"
import 'remixicon/fonts/remixicon.css'

const Products=()=>{
    const [product,setProduct] = useState([]); //initialise empty array to store fetched data
    const [cartCount,setCartCount] = useState(null)
    const navigate = useNavigate();

    const handleAddToCart=()=>{
        navigate("/cart");
    }


    const getProductDetails=async()=>{
        try {
            const response= await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProduct(data); // update state with fetched data
            console.log(data);  
        } catch (error) {
            console.error(error);
        }
    }

    // call function inside useeffect to wait for loading of DOM
    useEffect(()=>{     
        getProductDetails();
    },[])


    return(
        <div>
            <Header/>
            <div className="flex items-center justify-between px-2 bg-cyan-200 py-6 ">
              <h1 className="text-center font-bold text-2xl flex-1">Our Remarkable Products</h1>
              <div
                onClick={handleAddToCart}
                className="flex items-center gap-1 text-lg animate__animated animate__bounce">
                <i className="ri-shopping-cart-fill text-2xl text-purple-800">{cartCount}</i>
                <span className="font-semibold mt-0 mr-2">Cart</span>
              </div>
            </div>  
            <div className="p-6 grid grid-cols-5 gap-2 animate__animated animate__zoomIn">
              {
                product.map((item,index)=>(
                    <div key={index} className="mb-2 rounded-lg bg-gray-200 py-2 px-3 flex flex-col gap-2">
                        <div className="w-full flex justify-center">
                            <img src={item.image} className="w-full h-48 mx-auto gray-200"/>
                        </div>
                        <h1 className="text-center font-bold">{(item.category).toUpperCase()}</h1>
                        <p className="text-center text-sm h-24">{item.title}</p>
                        <div className="flex justify-between gap-6 px-1 text-sm font-semibold text-center">
                            <span>{"Rs." +(item.price)}</span>
                            <span >{"Rating" + " " +(item.rating.rate)}</span>
                        </div>
                        <div className="flex justify-between items-center gap-6 px-1 text-sm font-semibold text-center">
                            <button className="bg-fuchsia-600 text-white font-semibold py-1 px-2 rounded-md">Buy Now</button>
                            <button
                              onClick={()=>setCartCount(cartCount+1)}
                              className="bg-fuchsia-600 text-white font-semibold py-1 px-2 rounded-md"
                             >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
              }
            </div>
        </div>
    )
}

export default Products