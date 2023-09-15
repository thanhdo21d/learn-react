import {createBrowserRouter} from "react-router-dom"
import LayoutWebsite from "./page/website/LayoutWebsite"
import Signup from "./page/sign/Signup"
import Signin from "./page/sign/Signin"
import PageNotfound from "./page/404-not-found/PageNotfound"
import LayoutAdmin from "./page/admin/LayoutAdmin"
import AddProduct from "./component/admin/AddProduct"
import DashBoard from "./component/dashboard/DashBoard"
import EditProduct from "./component/admin/EditProduct"
import ProductDetails from "./component/website/ProductDetails"
import Demo from "./component/dashboard/Demo"
import DemoRef from "./component/useRef/DemoRef"
import AddToCart from "./component/demo-cart/AddToCart"
import Product from "./component/website/Product"
import DemoZoom from "./component/demo-zoom-images/DemoZoom"
import FirebaseLearn from "./component/demo-firebase/FirebaseLearn"
const routes = createBrowserRouter([
  //Outlet
  {
    path: '/', element: <AddToCart />
  },
   {
    path: '/firebase', element: <FirebaseLearn />
  },
   {
    path: '/demo-zoom', element: <DemoZoom />
  },
  {
    path: '/product/:id', element: <ProductDetails />
  },
  {
    path: '/signup', element : <Signup/>
  },
  {
    path: '/signin', element : <Signin/>
  },
  {
    path:'*' , element: <PageNotfound/>
  },
  {
    path: "/admin",
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
          // index : true, element:<DashBoard/>
        },
          {
          //  path:"add-product", element:<AddProduct/>
          },
           {
          //  path:"product/:id/edit", element:<EditProduct/>
          }
        ]
      }
    ]
  }
])
export default routes
