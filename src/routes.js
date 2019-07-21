import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    }
  )
);

export default Routes;
