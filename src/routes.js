import {  createAppContainer, createSwitchNavigator  } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import Application from './pages/Application';
import Login from './pages/Login';
import Register from "./pages/Register";
import Store from "./pages/Store";
//import Notification from './pages/Notification';
import Convite from "./pages/Convite";

const Routes  = createAppContainer(
   createSwitchNavigator({
     Login,
     Register,
     Application,
     Convite,
     Store,
    
   })
);

export default Routes;