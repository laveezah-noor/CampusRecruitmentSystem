import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import CompanyRegisterScreen from '../screens/Company/RegisterScreen'
import StudentRegisterScreen from '../screens/Student/RegisterScreen'
import CompanyLoginScreen from '../screens/Company/LoginScreen'
import StudentLoginScreen from '../screens/Student/LoginScreen'
import CompanyDashboardScreen from '../screens/Company/DashboardScreen'
import StudentDashboardScreen from '../screens/Student/DashboardScreen'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme, isAuthenticated }) {
  console.log(isAuthenticated);
  return (
    <NavigationContainer
    //   linking={LinkingConfiguration}
    //   theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   {(isAuthenticated) ? <BottomTabNavigator/> : <RootNavigator/> }
    >
        <RootNavigator/>
    {/* <StatusBar style="auto" backgroundColor={Colors[colorScheme].tint}/> */}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="CompanyLogin" component={CompanyLoginScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="StudentRegister" component={StudentRegisterScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="CompanyRegister" component={CompanyRegisterScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} options={{ title: 'All Requests' }} />
      <Stack.Screen name="CompanyDashboard" component={CompanyDashboardScreen} options={{ title: 'All Requests' }} />
      
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
    </Stack.Navigator>
  );
}