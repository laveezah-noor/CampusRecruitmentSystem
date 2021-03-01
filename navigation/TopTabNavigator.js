import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompanyLoginScreen from '../screens/Company/LoginScreen';
import StudentLoginScreen from '../screens/Student/LoginScreen';
import LandingScreen from '../screens/LandingScreen'

const Stack = createStackNavigator();

function LoginNavigator({navigation}) {
  const ref = React.useRef(null);
  return (
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Company" component={CompanyLoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Student" component={StudentLoginScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

export default LoginNavigator;
