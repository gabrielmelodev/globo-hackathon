import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Application from "./pages/Application";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Notification from './pages/Notification';
import Plim from "./pages/Plim";
import Loja from "./pages/Loja";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Application,
    Plim,
    Loja,
  })
);

export default Routes;
