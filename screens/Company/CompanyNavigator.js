import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native'
import ApplicationsScreen from './ApplicationsScreen'
import CompanyDashboardScreen from './DashboardScreen';
import AddApplicationsScreen from './AddApplicationsScreen';
import CompanyProfileScreen from './ProfileScreen';
import StudentsScreen from './StudentsScreen';
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index.js'

const CompanyDashboardStack = createStackNavigator();

function CompanyDashboardNavigator() {
  return (
    <CompanyDashboardStack.Navigator>
      <CompanyDashboardStack.Screen
        name="CompanyDashboardScreen"
        component={CompanyDashboardScreen}
        options={{ headerShown: false }}
      />
    </CompanyDashboardStack.Navigator>
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

const AddApplicationsStack = createStackNavigator();

function AddApplicationsNavigator() {
  return (
    <AddApplicationsStack.Navigator>
      <AddApplicationsStack.Screen
        name="ApplicationsScreen"
        component={AddApplicationsScreen}
        options={({ navigation, route }) => ({
          title: 'Add Application',
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
    </AddApplicationsStack.Navigator>
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
          title: 'Search Studetnts',
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
    </StudentsStack.Navigator>
  );
}

const CompanyProfileStack = createStackNavigator();

function CompanyProfileNavigator() {
  return (
    // <CompanyProfileStack.Navigator mode="card">
    <CompanyProfileStack.Navigator>
      <CompanyProfileStack.Screen
        name="CompanyProfileScreen"
        component={CompanyProfileScreen}
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
        //       // onPress={() => navigation.navigate('EditCompanyProfile')}
        //       info
        //     ><Text>Edit</Text></Button>
        //   ),
          })}
          />
          {/* <CompanyProfileStack.Screen
           name="EditCompanyProfile" component={EditCompanyProfileInfo}/> */}
    </CompanyProfileStack.Navigator>
  );
}

export{
    CompanyDashboardNavigator,
    StudentsNavigator,
    AddApplicationsNavigator,
    ApplicationsNavigator,
    CompanyProfileNavigator
}