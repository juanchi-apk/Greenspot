import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import WelcomeScreen from '../screens/WelcomeScreen'



const LoginStack = createStackNavigator();

export default LoginNavigator = () => {

    return (
        <NavigationContainer>
            <LoginStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <LoginStack.Screen
                    name="Login"
                    component={Login}
                />
                <LoginStack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <LoginStack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    )


}