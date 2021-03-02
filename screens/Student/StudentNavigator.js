import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
import StudentDashboardScreen from './DashboardScreen';
import StudentProfileScreen from './ProfileScreen';
import JobsScreen from './JobsScreen';
import CompaniesScreen from './CompaniesScreen';
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index.js'


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
        options={({ navigation, route }) => ({
          title: 'Search Jobs',
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

export{
    StudentDashboardNavigator,
    StudentProfileNavigator,
    CompaniesNavigator,
    JobsNavigator,      
}