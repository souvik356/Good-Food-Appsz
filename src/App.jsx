import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./Body"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import Container from "./components/Container"
import Restaurent from "./components/Restaurent"
import Cart from "./components/Cart"
import { useState } from "react"



function App() {
  const [cart,setCart] = useState([])
const addToCart = (item)=>{
   setCart([...cart,item]);
}
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<><Body cart={cart}/></>,
    children:[
      {
        path:'/',
        element:<><Container/></>,
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },{
        path:'restaurent/:resId',
        element:<Restaurent addToCart={addToCart}/>
      }
      ,{
        path:'/cart',
        element:<Cart cart={cart}/>
      }
    ],
    errorElement:<ErrorPage/>
  }
])
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
