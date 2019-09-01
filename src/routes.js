
import { createAppContainer, createSwitchNavigator,createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createAppContainer(
    createStackNavigator({
      Main,
      Product,
    }, {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: 'Aplicativo de Estudo 2019',
        headerStyle: {
          backgroundColor: '#DA552F'
        },
      },
    }),
  );
