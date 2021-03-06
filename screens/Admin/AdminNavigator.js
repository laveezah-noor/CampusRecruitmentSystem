import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
// import Colors from '../constants/Colors';
// import {Button, Text} from 'native-base'
import ApplicationsScreen from '../screens/Admin/ApplicationsScreen'
import AdminDashboardScreen from '../screens/Admin/DashboardScreen';
import AdminProfileScreen from '../screens/Admin/ProfileScreen';
import StudentsScreen from '../screens/Admin/StudentsScreen';
import CompaniesScreen from '../screens/Admin/CompaniesScreen';
import {icons} from '../constants/index'

const AdminDashboard = createStackNavigator();

function AdminDashboardNavigator() {
  return (
    <AdminDashboard.Navigator>
      <AdminDashboard.Screen
        name="Dashboard"
        component={AdminDashboardScreen}
        options={{ headerShown: false }}
      />
    </AdminDashboard.Navigator>
  );
}

const StudentsStack = createStackNavigator();

function StudentsNavigator() {
  return (
    <StudentsStack.Navigator>
      <StudentsStack.Screen
        name="StudentsScreen"
        component={StudentsScreen}
        options={({ navigation, route }) => ({
          title: 'Search Students',
          headerStyle: {
            backgroundColor: '#8243D2',
            height: 120,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: "left",
            marginLeft: 50,
          },
          headerLeft: () => (
          <TouchableOpacity
            onPress={()=>{navigation.goBack()}}>
            <Image source={icons.back_white} style={{width: 30, height: 30,  backgroundColor: "transparent", marginLeft: 5}}/>
          </TouchableOpacity>)
          })}
      />
    </StudentsStack.Navigator>
  );
}

const CompaniesStack = createStackNavigator();

function CompaniesNavigator() {
  return (
    <CompaniesStack.Navigator>
      <CompaniesStack.Screen
        name="CompaniesScreen"
        component={CompaniesScreen}
        options={({ navigation, route }) => ({
            title: 'Search Companies',
            headerStyle: {
              backgroundColor: '#8243D2',
              height: 120,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: "left",
              marginLeft: 35,
            },
            headerLeft: () => (
            <TouchableOpacity
              onPress={()=>{navigation.goBack()}}>
              <Image source={icons.back_white} style={{width: 30, height: 30,  backgroundColor: "transparent", marginLeft: 5}}/>
            </TouchableOpacity>)
            })}
      />
    </CompaniesStack.Navigator>
  );
}

const ApplicationsStack = createStackNavigator();

function ApplicationsNavigator() {
  return (
    <ApplicationsStack.Navigator>
      <ApplicationsStack.Screen
        name="ApplicationsScreen"
        component={ApplicationsScreen}
        options={({ navigation, route }) => ({
            title: 'Search Applications',
            headerStyle: {
              backgroundColor: '#8243D2',
              height: 120,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: "left",
              marginLeft: 35,
            },
            headerLeft: () => (
            <TouchableOpacity
              onPress={()=>{navigation.goBack()}}>
              <Image source={icons.back_white} style={{width: 30, height: 30,  backgroundColor: "transparent", marginLeft: 5}}/>
            </TouchableOpacity>)
            })}
      />
    </ApplicationsStack.Navigator>
  );
}

const AdminProfileStack = createStackNavigator();

function AdminProfileNavigator() {
  return (
    // <AdminProfileStack.Navigator mode="card">
    <AdminProfileStack.Navigator>
      <AdminProfileStack.Screen
        name="AdminProfileScreen"
        component={AdminProfileScreen}
        options={({ navigation, route }) => ({
          title: 'My Profile',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            // fontWeight: 'bold',
            textAlign: "center"
          },
        //   headerRight: () => (
        //     <Button
        //       // onPress={() => navigation.navigate('EditAdminProfile')}
        //       info
        //     ><Text>Edit</Text></Button>
        //   ),
          })}
          />
          {/* <AdminProfileStack.Screen
           name="EditAdminProfile" component={EditAdminProfileInfo}/> */}
    </AdminProfileStack.Navigator>
  );
}

export{
    AdminDashboardNavigator,
    AdminProfileNavigator,
    CompaniesNavigator,
    StudentsNavigator,      
}