import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile127343Navigator from '../features/UserProfile127343/navigator';
import Settings127342Navigator from '../features/Settings127342/navigator';
import Settings127340Navigator from '../features/Settings127340/navigator';
import SignIn2127338Navigator from '../features/SignIn2127338/navigator';
import Settings127323Navigator from '../features/Settings127323/navigator';
import UserProfile127316Navigator from '../features/UserProfile127316/navigator';
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
UserProfile127343: { screen: UserProfile127343Navigator },
Settings127342: { screen: Settings127342Navigator },
Settings127340: { screen: Settings127340Navigator },
SignIn2127338: { screen: SignIn2127338Navigator },
Settings127323: { screen: Settings127323Navigator },
UserProfile127316: { screen: UserProfile127316Navigator },
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
