import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Animation from './screens/Animation';
import Accessibility from './screens/Accessibility';
import UX from './screens/UX';

const HomeStack = createStackNavigator({
  Home,
  Animation,
  Accessibility,
  UX,
});

export default createAppContainer(HomeStack);
