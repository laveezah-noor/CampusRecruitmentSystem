import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Form, Item, Label, Input, H1} from 'native-base'

export default function CompanyRegisterScreen({cmd}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const Register = ({navigation}) => {
        if (name == "" || address == "" || city == "" || email == "" || contact == "" || password == "" || confirmPassword == ""){
            console.log('Required to fill all Inputs')
        } else {
            if (password !== confirmPassword) {
                console.log('Password and Confirm Password are not same.')
            } else {
                auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Company account created & signed in!');
                    navigation.navigate("CompanyLogin")
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                      console.log('That email address is already in use!');
                    }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                console.error(error);
                });
            }
        }
        
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
        >Register</H1>
        <Form 
          style={{
            margin: 10,

          }}>
            <Item stackedLabel>
              <Label>Company Name</Label>
              <Input
                value={name}
                onChangeText={(txt)=>setName(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Address</Label>
              <Input 
                value={address}
                onChangeText={(txt)=>setAddress(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>City</Label>
              <Input  
                value={city}
                onChangeText={(txt)=>setCity(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Company Email Address</Label>
              <Input  
                value={email}
                onChangeText={(txt)=>setEmail(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Contact</Label>
              <Input  
                value={contact}
                onChangeText={(txt)=>setContact(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input  
                value={password}
                onChangeText={(txt)=>setPassword(txt)}/>
            </Item>

            <Item stackedLabel>
              <Label>Confirm Password</Label>
              <Input  
                value={confirmPassword}
                onChangeText={(txt)=>setConfirmPassword(txt)}/>
            </Item>
          </Form>
          <Button title="Register" onPress={()=>Register()}/>
    </View>
  )
}
