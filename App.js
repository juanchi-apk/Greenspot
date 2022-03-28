import 'react-native-gesture-handler';
import LoginNavigator from './navigators/LoginNavigator';
import React from 'react';
//import MonitoringNavigator from './navigators/MonitoringNavigator';
//import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {



  return(

   // <MonitoringNavigator/>r
      <LoginNavigator/>
    //<WelcomeScreen/>
     )


}


//ESTE CONTENIDO TIENE QUE PASAR A LA PANTALLA DE WELCOME, TODOS MENOS ESTOS */
/* 
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';
import {Cart} from './components/Cart';
import { CartIcon } from './components/CartIcon';
import {ProductDetail} from './components/ProductDetail'
import {StyleSheet} from 'react-native';

import Home from './components/Home'

const Stack = createStackNavigator();


export default function App() {
  return (
    <CartProvider>  
  <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
          //   headerShown: false
          // }}
          >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false
          }}
          />
       <Stack.Screen name='ProductDetails' component={ProductDetail} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

 */