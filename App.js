
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './redux';
import LoginNavigator from './navigation/TopTabNavigator';

const App = () => {
  console.log("I'm runnning")
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          // alignItems: "center",
          paddingTop:5,
          justifyContent: "center",
          // backgroundColor: "#FFF"
        }}>
            <Navigation/>
        {/* <LoginNavigator/> */}
      </SafeAreaView>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;

// import * as React from 'react';
// import { Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function LoginNavigator() {
//   const ref = React.useRef(null);

//   return (
//     <View style={{ flex: 1 }}>
//       <NavigationContainer ref={ref}>
//         <Stack.Navigator initialRouteName="Empty">
//           <Stack.Screen name="Empty" component={() => <View></View>} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//       <Button
//         onPress={() => ref.current && ref.current.navigate('Home')}
//         title="Go home"
//       />
//     </View>
//   );
// }

// export default LoginNavigator;
