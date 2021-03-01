import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompanyLoginScreen from '../screens/Company/LoginScreen';
import StudentLoginScreen from '../screens/Student/LoginScreen';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LoginNavigator({navigation}) {
  const ref = React.useRef(null);
  return (
    <View 
    style={{ 
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#d3d3d3"
     }}>
      <View 
        style={{
            flexDirection:"row",
            backgroundColor: "#fff",
            justifyContent: "center"}}>
          <TouchableOpacity
            style={{
                padding: 10,
                borderColor: "#ccc",
                borderBottomWidth: 2,
                marginHorizontal: 5

            }}
            onPress={() => navigation.navigate('Student')}
          ><Text
            style={{fontSize: 22}}>Student</Text></TouchableOpacity>
          <TouchableOpacity
            style={{
                padding: 10,
                borderColor: "#ccc",
                borderBottomWidth: 2,
                marginHorizontal:5

            }}
          onPress={() => navigation.navigate('Company')}
           ><Text style={{fontSize:22}}>Company</Text></TouchableOpacity>
      </View>
      <View style={{flex: 1, marginVertical: 50}}>
        <Stack.Navigator initialRouteName="Company">
          <Stack.Screen 
          name="Company" component={CompanyLoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Student" component={StudentLoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      
      </View>
      
    </View>
  );
}

export default LoginNavigator;
