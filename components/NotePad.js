import {  Text, View } from 'react-native';
import MyMonitors from '../screens/MyMonitors';
import MonitoringNavigator from './MonitoringCard';
export default function Notepad({navigation}){
    return (
        <View>
            <MyMonitors navigation={navigation}/>
        </View>
    )

}