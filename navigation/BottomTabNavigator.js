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
import AddApplicationsScreen from '../screens/Company/AddApplicationsScreen';
import CompanyProfileScreen from '../screens/Company/ProfileScreen';
import StudentProfileScreen from '../screens/Student/ProfileScreen';
import StudentsScreen from '../screens/Company/StudentsScreen';
import JobsScreen from '../screens/Student/JobsScreen';
import CompaniesScreen from '../screens/Student/CompaniesScreen';
import {icons} from '../constants/index'

const CompanyBottomTab = createBottomTabNavigator();

function CompanyBottomTabNavigator() {
  const colorScheme = useColorScheme();
  console.log(icons)
  return (
    <CompanyBottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ showLabel: false,
      // activeTintColor: Colors[colorScheme].tint
       }}
       >
      <CompanyBottomTab.Screen
        name="Dashboard"
        component={CompanyDashboardNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="home" color={color} focused={focused}/>,
        }}
      />
      <CompanyBottomTab.Screen
        name="Applications"
        component={ApplicationsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="file" color={color} focused={focused} />,
        }}
      />
      <CompanyBottomTab.Screen
        name="Add Applications"
        component={AddApplicationsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="add" color={color} focused={focused} />,
          // tabBarButton: ()=>{return(<Image style={{backgroundColor: "pink", borderRadius: 30, width: 40, height: 40, position: "absolute", marginHorizontal: 159}} source={icons.add}/>)}
        }}
      />
      <CompanyBottomTab.Screen
        name="Students"
        component={StudentsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="person_search" color={color} focused={focused} />,
        }}
      />
      <CompanyBottomTab.Screen
        name="Profile"
        component={CompanyProfileNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="profile" color={color} focused={focused} />,
        }}
      />
    </CompanyBottomTab.Navigator>
  );
}

const StudentBottomTab = createBottomTabNavigator();

function StudentBottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <StudentBottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,
      showLabel: false }}>
      <StudentBottomTab.Screen
        name="Dashboard"
        component={StudentDashboardNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="dashboard" color={color} focused={focused} />,
        }}
      />
      <StudentBottomTab.Screen
        name="Jobs"
        component={JobsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="jobs_search" color={color} focused={focused} />,
        }}
      />
      <StudentBottomTab.Screen
        name="Companies"
        component={CompaniesNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="company" color={color} focused={focused} />,
        }}
      />
      <StudentBottomTab.Screen
        name="Profile"
        component={StudentProfileNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="profile" color={color} focused={focused} />,
        }}
      />
    </StudentBottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return (<Image source={icons[props.name]} resizeMode="contain" 
    style={{width: 25,
        height: 25,
        tintColor: props.focused ? Colors.primary : Colors.secondary
       }}/>
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
    </CompaniesStack.Navigator>
  );
}

const StudentProfileStack = createStackNavigator();

function StudentProfileNavigator() {
  return (
    // <StudentProfileStack.Navigator mode="card">
    <StudentProfileStack.Navigator>
      <StudentProfileStack.Screen
        name="StudentProfileScreen"
        component={StudentProfileScreen}
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
        //       // onPress={() => navigation.navigate('EditStudentProfile')}
        //       info
        //     ><Text>Edit</Text></Button>
        //   ),
          })}
          />
          {/* <StudentProfileStack.Screen
           name="EditStudentProfile" component={EditStudentProfileInfo}/> */}
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
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