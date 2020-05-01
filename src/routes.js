import {  createAppContainer, createSwitchNavigator  } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import Application from './pages/Application';
import Login from './pages/Login';
import Notification from './pages/Notification';

const Routes  = createAppContainer(
   createSwitchNavigator({
     Login,
     Application,
     Notification,
   })
);

export default Routes;