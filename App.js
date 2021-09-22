import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import DrawerNavigation from './navigation/DrawerNavigator';
import mealsReducer from './store/reducers/meals';


enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer, composeWithDevTools())


function App() {

  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <Provider store={store}>
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
    </Provider>
  );
}


export default App;