import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './redux';
import LoginNavigator from './navigation/TopTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
        }}>
            <Navigation/>
        {/* <LoginNavigator/> */}
      </SafeAreaView>
    </Provider>
  );
};

export default App;