import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import {Button, Text} from 'native-base'
import ApplicationsScreen from '../screens/Company/ApplicationsScreen'
import StudentDashboardScreen from '../screens/Student/DashboardScreen';
import CompanyDashboardScreen from '../screens/Company/DashboardScreen';
import StudentsScreen from '../screens/Company/StudentsScreen';
import {icons} from '../constants'

const CompanyBottomTab = createBottomTabNavigator();

function CompanyBottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <CompanyBottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <CompanyBottomTab.Screen
        name="Dashboard"
        component={CompanyDashboardNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="rocket" color={color} focused={focused}/>,
        }}
      />
      <CompanyBottomTab.Screen
        name="Applications"
        component={ApplicationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="suitcase" color={color} />,
        }}
      />
      <CompanyBottomTab.Screen
        name="Students"
        component={StudentsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-friends" color={color} />,
        }}
      />
      {/* <CompanyBottomTab.Screen
        name="Profile"
        component={CompanyProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
        }}
      /> */}
    </CompanyBottomTab.Navigator>
  );
}

const StudentBottomTab = createBottomTabNavigator();

function StudentBottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <StudentBottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <StudentBottomTab.Screen
        name="Dashboard"
        component={StudentDashboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <StudentBottomTab.Screen
        name="Jobs"
        component={JobsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <StudentBottomTab.Screen
        name="Companies"
        component={CompaniesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="notes-medical" color={color} />,
        }}
      />
      {/* <StudentBottomTab.Screen
        name="Profile"
        component={StudentProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
        }}
      /> */}
    </StudentBottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  const name = props.name;
  return (<Image source={icons.name} resizeMode="contain" 
    style={{width: 25, height: 25, tintColor: props.focused ? Colors.primary : Colors.secondary }}/>
)}

const StudentDashboard = createStackNavigator();

function StudentDashboardNavigator() {
  return (
    <StudentDashboard.Navigator>
      <StudentDashboard.Screen
        name="Dashboard"
        component={StudentDashboardScreen}
        options={{ headerShown: false }}
      />
    </StudentDashboard.Navigator>
  );
}

const JobsStack = createStackNavigator();

function JobsNavigator() {
  return (
    <JobsStack.Navigator>
      <JobsStack.Screen
        name="JobsScreen"
        component={JobsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </JobsStack.Navigator>
  );
}

const CompaniesStack = createStackNavigator();

function CompaniesNavigator() {
  return (
    <CompaniesStack.Navigator>
      <CompaniesStack.Screen
        name="CompaniesScreen"
        component={CompaniesScreen}
        options={{ 
          headerTitle: 'Applications List',
          headerTintColor: "white",
          headerStatusBarHeight: 30,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 50,
            borderColor: "red",
            height: 90,

        } }}
      />
    </CompaniesStack.Navigator>
  );
}

const StudentProfileStack = createStackNavigator();

function StudentProfileNavigator() {
  return (
    <StudentProfileStack.Navigator mode="card">
      <StudentProfileStack.Screen
        name="StudentProfileScreen"
        component={StudentProfileScreen}
        options={({ navigation, route }) => ({
          title: 'StudentProfile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditStudentProfile')}
              info
            ><Text>Edit</Text></Button>
          ),
          })} />
          <StudentProfileStack.Screen
           name="EditStudentProfile" component={EditStudentProfileInfo}/>
    </StudentProfileStack.Navigator>
  );
}


const CompanyDashboardStack = createStackNavigator();

function CompanyDashboardNavigator() {
  return (
    <CompanyDashboardStack.Navigator>
      <CompanyDashboardStack.Screen
        name="CompanyDashboardScreen"
        component={CompanyDashboardScreen}
        options={{ headerTitle: 'Tab Two Title' }}
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
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ApplicationsStack.Navigator>
  );
}

const StudentsStack = createStackNavigator();

function StudentsNavigator() {
  return (
    <StudentsStack.Navigator>
      <StudentsStack.Screen
        name="StudentsScreen"
        component={StudentsScreen}
        options={{ 
          headerTitle: 'Applications List',
          headerTintColor: "white",
          headerStatusBarHeight: 30,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 50,
            borderColor: "red",
            height: 90,

        } }}
      />
    </StudentsStack.Navigator>
  );
}

const CompanyProfileStack = createStackNavigator();

function CompanyProfileNavigator() {
  return (
    <CompanyProfileStack.Navigator mode="card">
      <CompanyProfileStack.Screen
        name="CompanyProfileScreen"
        component={CompanyProfileScreen}
        options={({ navigation, route }) => ({
          title: 'CompanyProfile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditCompanyProfile')}
              info
            ><Text>Edit</Text></Button>
          ),
          })} />
          <CompanyProfileStack.Screen
           name="EditCompanyProfile" component={EditCompanyProfileInfo}/>
    </CompanyProfileStack.Navigator>
  );
}

export {
  CompanyBottomTabNavigator,
  StudentBottomTabNavigator
}