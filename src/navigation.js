import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';

const HomeStack = createStackNavigator({
  Home
});

export default createAppContainer(HomeStack);
