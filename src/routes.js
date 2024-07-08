
import Home from "./componets/Home/Home";
import ProductList from "./componets/Product_list/ProductList";
import AccountDetails from "./componets/Profile/AccountDetails";
import Address from "./componets/Profile/Address";
import Dashboard from "./componets/Profile/Dashboard";
import Orders from "./componets/Profile/Orders";
import Profile from "./componets/Profile/Profile";
import Wishlist from "./componets/Profile/Wishlist";
import Cart from "./componets/cart/Cart";
import Checkout from "./componets/cart/Checkout";
import ConfirmOrder from "./componets/cart/ConfirmOrder";
import About from "./componets/pages/About";
import Authentication from "./componets/pages/Authentication";
import Contact from "./componets/pages/Contact";
import Faq from "./componets/pages/Faq";
import Login from "./componets/pages/Login";
import Page404 from "./componets/pages/Page404";
import ProductDetails from "./componets/pages/ProductDetails";
import Registration from "./componets/pages/Registration";
import ResPass from "./componets/pages/ResPass";
import TermAndCondition from "./componets/pages/TermAndCondition";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title : "Home"
  },
  {
    path: '/about',
    component: About,
    exact: true,
    title : "About"
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    title : "Contact"
  },
  {
    path: '/auth',
    component: Authentication,
    exact: true,
    title : "Authentication"
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    title : "Login"
  },
  {
    path: '/registration',
    component:Registration,
    exact: true,
    title : "Registration"
  },
  {
    path: '/reset',
    component: ResPass,
    exact: true,
    title : "Reset Password"
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    title : "Profile", 
    NestedRoutes :[
      {
        path : "dashboard",
        component : Dashboard,
        exact : true , 
        title : "Dashboard" , 
      },
      {
        path : "orders",
        component : Orders,
        exact : true , 
        title : "Orders" , 
      },
      {
        path : "wishlist",
        component : Wishlist,
        exact : true , 
        title : "Wishlist" , 
      },
      {
        path : "account",
        component : AccountDetails,
        exact : true , 
        title : "Account" , 
      },
      {
        path : "address",
        component : Address,
        exact : true , 
        title : "Address" , 
      },
    ]
  },
  // {
  //   path : "/profile/dashboard",
  //   component : Dashboard,
  //   exact : true , 
  //   title : "Dashboard" , 
  // },
  // {
  //   path : "/profile/orders",
  //   component : Orders,
  //   exact : true , 
  //   title : "Orders" , 
  // },
  // {
  //   path : "/profile/wishlist",
  //   component : Wishlist,
  //   exact : true , 
  //   title : "Wishlist" , 
  // },
  // {
  //   path : "/profile/account",
  //   component : AccountDetails,
  //   exact : true , 
  //   title : "Account" , 
  // },
  // {
  //   path : "/profile/address",
  //   component : Address,
  //   exact : true , 
  //   title : "Address" , 
  // },
  {
    path: '/product',
    component: ProductDetails,
    exact: true,
    title : "Product Details"
  },
  {
    path: '/shop',
    component: ProductList,
    exact: true,
    title : "Shop"
  },
  {
    path: '/cart',
    component: Cart,
    exact: true,
    title : "Cart"
  },
  {
    path: '/checkout',
    component: Checkout,
    exact: true,
    title : "Checkout"
  },
  {
    path: '/confirm',
    component: ConfirmOrder,
    exact: true,
    title : "Confirm Order"
  },
  {
    path: '/faq',
    component: Faq,
    exact: true,
    title : "FREQUENTLY ASKED QUESTIONS"
  },
  {
    path: '/term',
    component: TermAndCondition,
    exact: true,
    title : "Term And Condition"
  },
  
];

export default routes;