
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
        headerTitle: 'Instrumentação e publicação em uma infraestrutura de IoT',
        headerStyle: {
          backgroundColor: '#00CED1'
          
        },
      },
    }),
  );
