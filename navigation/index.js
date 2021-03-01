import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import CompanyRegisterScreen from '../screens/Company/RegisterScreen'
import StudentRegisterScreen from '../screens/Student/RegisterScreen'
import {CompanyBottomTabNavigator, StudentBottomTabNavigator} from './BottomTabNavigator'
import LoginNavigator from './TopTabNavigator'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer>
        <RootNavigator/>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginNavigator} options={{ title: 'Hell' }} />
      <Stack.Screen name="StudentRegister" component={StudentRegisterScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="CompanyRegister" component={CompanyRegisterScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="CompanyRoot" component={CompanyBottomTabNavigator} />
      <Stack.Screen name="StudentRoot" component={StudentBottomTabNavigator} />
    </Stack.Navigator>
  );
}