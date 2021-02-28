import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import {Form, Item, Label, Input, H1} from 'native-base'

export default function StudentRegisterScreen({cmd}) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const Register = ({navigation}) => {
        if (name == "" || gender == "" || dob == "" || email == "" || contact == "" || password == "" || confirmPassword == ""){
            console.log('Required to fill all Inputs')
        } else {
            if (password !== confirmPassword) {
                console.log('Password and Confirm Password are not same.')
            } else {
                auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Student account created & signed in!');
                    navigation.navigate("StudentLogin")
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
    console.log(name, gender, dob, email, contact, password, confirmPassword)
    return(
        <View style={{
        //   backgroundColor: "red",
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
              <Label>Full Name</Label>
              <Input
                
                value={name}
                onChangeText={(txt)=>setName(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Gender</Label>
              <Input 
                value={gender}
                onChangeText={(txt)=>setGender(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Date Of Birth</Label>
              <Input 
                value={dob}
                onChangeText={(txt)=>setDob(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email Address</Label>
              <Input 
                value={email}
                onChangeText={(txt)=>setEmail(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Contact Number</Label>
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