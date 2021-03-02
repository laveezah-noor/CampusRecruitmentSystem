import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
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
