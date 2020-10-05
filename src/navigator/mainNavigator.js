import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings127315Navigator from '../features/Settings127315/navigator';
import Settings127313Navigator from '../features/Settings127313/navigator';
import SignIn2127311Navigator from '../features/SignIn2127311/navigator';
import Settings127309Navigator from '../features/Settings127309/navigator';
import UserProfile127302Navigator from '../features/UserProfile127302/navigator';
import Settings127301Navigator from '../features/Settings127301/navigator';
import Settings127299Navigator from '../features/Settings127299/navigator';
import SignIn2127297Navigator from '../features/SignIn2127297/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings127315: { screen: Settings127315Navigator },
Settings127313: { screen: Settings127313Navigator },
SignIn2127311: { screen: SignIn2127311Navigator },
Settings127309: { screen: Settings127309Navigator },
UserProfile127302: { screen: UserProfile127302Navigator },
Settings127301: { screen: Settings127301Navigator },
Settings127299: { screen: Settings127299Navigator },
SignIn2127297: { screen: SignIn2127297Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
