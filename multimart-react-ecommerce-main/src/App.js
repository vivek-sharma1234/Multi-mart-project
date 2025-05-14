import { useState ,createContext, useEffect, lazy, Suspense } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import ComplaintPages from "./pages/Complaintpages";
import Orderplaced from "./pages/Orderplaced";
import Login from "./Login";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
const Home =lazy(()=> import("./pages/Home"))
const Shop =lazy(()=> import("./pages/Shop"))
const Cart =lazy(()=> import("./pages/Cart"))
const Payment =lazy(()=> import("./pages/Payment"))
const ProductDetails =lazy(()=> import("./pages/ProductDetails"));
export const DataContainer = createContext();
function App() {
  const [CartItem, setCartItem] = useState([])
  const [selectedProduct,setSelectedProduct]=useState(null);
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);

  const addToCart = (product,num=1) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + num } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: num }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    // If product quantity == 1 then we have to remove it
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    }
    //else we just decrease the quantity 
    else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const deleteProduct = (product)=> {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
  }
  useEffect(()=> {
      localStorage.setItem("cartItem",JSON.stringify(CartItem));
  },[CartItem])
  return (
    <DataContainer.Provider value={{CartItem,setCartItem,addToCart,decreaseQty,deleteProduct,selectedProduct,setSelectedProduct,totalPrice}}>
      <Suspense fallback={<Loader/>}>
        <Router>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/payment" element={ <Payment totalprice={totalPrice}/>} />
            <Route path="/complaintpages" element={<ComplaintPages/>}/>
            <Route path="/orderplaced" element={<Orderplaced/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}/>

          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </DataContainer.Provider>
  )
}

export default App
