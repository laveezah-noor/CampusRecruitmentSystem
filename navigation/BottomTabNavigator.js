import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import {Button, Text} from 'native-base'
import {
  ApplicationsNavigator, 
  CompanyDashboardNavigator, 
  AddApplicationsNavigator, 
  CompanyProfileNavigator, 
  StudentsNavigator
} from '../screens/Company/CompanyNavigator';
import {
  StudentDashboardNavigator,
  StudentProfileNavigator,
  JobsNavigator,
  CompaniesNavigator
} from '../screens/Student/StudentNavigator';
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

// const StudentDashboard = createStackNavigator();

// function StudentDashboardNavigator() {
//   return (
//     <StudentDashboard.Navigator>
//       <StudentDashboard.Screen
//         name="Dashboard"
//         component={StudentDashboardScreen}
//         options={{ headerShown: false }}
//       />
//     </StudentDashboard.Navigator>
//   );
// }

// const JobsStack = createStackNavigator();

// function JobsNavigator() {
//   return (
//     <JobsStack.Navigator>
//       <JobsStack.Screen
//         name="JobsScreen"
//         component={JobsScreen}
//         options={({ navigation, route }) => ({
//           title: 'Search Jobs',
//           headerStyle: {
//             backgroundColor: '#8243D2',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             textAlign: "center"
//           },
//           headerLeft: () => (
//           <TouchableOpacity
//             style={{position: "absolute", }} 
//             onPress={()=>{navigation.goBack()}}>
//             <Image source={icons.back_white} style={{width: 35, height: 35, position: "absolute", backgroundColor: "black"}}/>
//           </TouchableOpacity>)
//           // headerRight: () => (
//           //   <Button
//           //     onPress={() => navigation.navigate('EditCompanyProfile')}
//           //     info
//           //   ><Text>Edit</Text></Button>
//           // ),
//           })}
//       />
//     </JobsStack.Navigator>
//   );
// }

// const CompaniesStack = createStackNavigator();

// function CompaniesNavigator() {
//   return (
//     <CompaniesStack.Navigator>
//       <CompaniesStack.Screen
//         name="CompaniesScreen"
//         component={CompaniesScreen}
//         options={{ headerShown: false }}
//       />
//     </CompaniesStack.Navigator>
//   );
// }

// const StudentProfileStack = createStackNavigator();

// function StudentProfileNavigator() {
//   return (
//     // <StudentProfileStack.Navigator mode="card">
//     <StudentProfileStack.Navigator>
//       <StudentProfileStack.Screen
//         name="StudentProfileScreen"
//         component={StudentProfileScreen}
//         options={({ navigation, route }) => ({
//           title: 'My Profile',
//           headerStyle: {
//             backgroundColor: '#fff',
//           },
//           headerTintColor: '#000',
//           headerTitleStyle: {
//             // fontWeight: 'bold',
//             textAlign: "center"
//           },
//         //   headerRight: () => (
//         //     <Button
//         //       // onPress={() => navigation.navigate('EditStudentProfile')}
//         //       info
//         //     ><Text>Edit</Text></Button>
//         //   ),
//           })}
//           />
//           {/* <StudentProfileStack.Screen
//            name="EditStudentProfile" component={EditStudentProfileInfo}/> */}
//     </StudentProfileStack.Navigator>
//   );
// }

// const AdminBottomTab = createBottomTabNavigator();

// function AdminBottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <AdminBottomTab.Navigator
//       initialRouteName="Dashboard"
//       tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,
//       showLabel: false }}>
//       <AdminBottomTab.Screen
//         name="Dashboard"
//         component={AdminDashboardNavigator}
//         options={{
//           tabBarIcon: ({ focused, color }) => <TabBarIcon name="dashboard" color={color} focused={focused} />,
//         }}
//       />
//       <AdminBottomTab.Screen
//         name="Jobs"
//         component={JobsNavigator}
//         options={{
//           tabBarIcon: ({ focused, color }) => <TabBarIcon name="jobs_search" color={color} focused={focused} />,
//         }}
//       />
//       <AdminBottomTab.Screen
//         name="Companies"
//         component={CompaniesNavigator}
//         options={{
//           tabBarIcon: ({ focused, color }) => <TabBarIcon name="company" color={color} focused={focused} />,
//         }}
//       />
//       <AdminBottomTab.Screen
//         name="Profile"
//         component={AdminProfileNavigator}
//         options={{
//           tabBarIcon: ({ focused, color }) => <TabBarIcon name="profile" color={color} focused={focused} />,
//         }}
//       />
//     </AdminBottomTab.Navigator>
//   );
// }

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return (<Image source={icons[props.name]} resizeMode="contain" 
    style={{width: 25,
        height: 25,
        tintColor: props.focused ? Colors.primary : Colors.secondary
       }}/>
)}


export {
  CompanyBottomTabNavigator,
  StudentBottomTabNavigator,
  // AdminBottomTabNavigator
}