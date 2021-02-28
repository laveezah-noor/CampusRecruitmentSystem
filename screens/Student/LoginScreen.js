import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Form, Item, Label, Input, H1} from 'native-base'

export default function StudentLoginScreen({cmd}) {
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
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button title="Login"/>
    </View>
  )
}
