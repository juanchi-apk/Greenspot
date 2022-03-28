import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import { CartIcon } from './CartIcon';
import Notepad from './NotePad';
import Shop from './Shop';
import MonitoringNavigator from '../navigators/MonitoringNavigator';

const Tab = createBottomTabNavigator();


  const Home = ({navigation}) => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="MainPage" component={Notepad} />
        <Tab.Screen name="Shop" component={Shop}
        options={({ navigation }) => ({
          title: 'Shopping',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation}/>,
        })} />
      </Tab.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20
    }
  });
  export default Home
