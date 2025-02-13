import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { RootStackParamList } from './src/utils/Types';
import Registration from './src/screens/Registration';
import HomeScreen from './src/screens/HomeScreen';


const stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <stack.Screen name ="Splash" component={SplashScreen} />
        <stack.Screen name ="Login" component={LoginScreen} />
        <stack.Screen name ="Home" component={HomeScreen} />
        <stack.Screen name="Registration" component={Registration}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
