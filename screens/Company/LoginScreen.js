import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Form, Item, Label, Input, H1} from 'native-base'

export default function CompanyLoginScreen({navigation}) {
    const Login = () => {
        navigation.navigate('CompanyDashboard')
    }
    return(
    <View style={{
      // backgroundColor: "red",
      justifyContent: "center",
      // alignItems: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Login</H1>
        <Form 
          style={{
            margin: 10,

          }}>
            <Item stackedLabel>
              <Label>Company Email Address</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('CompanyRegister')}><Text>Register Now</Text></TouchableOpacity>
          <Button title="Login" onPress={()=>Login()}/>
    </View>
  )
}
