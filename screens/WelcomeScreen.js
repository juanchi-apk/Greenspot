import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from '../context/CartContext';
import {Cart} from '../components/Cart';
import { CartIcon } from '../components/CartIcon';
import {ProductDetail} from './ProductDetail'
import {StyleSheet} from 'react-native';
import MonitoringDetail from './MonitoringDetail';
import EventDetails from './EventDetails';
import Home from '../components/Home'

const HomeStack = createStackNavigator();


export default function WelcomeScreen() {
  return (
    <CartProvider>  
      <NavigationContainer  independent={true}>
      <HomeStack.Navigator
        // screenOptions={{
          //   headerShown: false
          // }}
          >
        <HomeStack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false
          }}
          />
          <HomeStack.Screen
                    name="MonitoringDetail"
                    component={MonitoringDetail}
                />
                    <HomeStack.Screen
                    name="EventDetail"
                    component={EventDetails}
                />

          
       <HomeStack.Screen name='ProductDetails' component={ProductDetail} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
          })} />
          <HomeStack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
      </HomeStack.Navigator>
      </NavigationContainer>
  </CartProvider>
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

