import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Animation from './screens/Animation';

const HomeStack = createStackNavigator({
  Home,
  Animation,
});

export default createAppContainer(HomeStack);
