import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import database from '@react-native-firebase/database';
import {Form, Item, Label, Input, H1} from 'native-base'

export default function AdminRequestScreen({navigation}) {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    
    
    const Request = () => {
      const key = Math.random().toString(36).replace(/[^a-z]+/g)
      database()
      .ref('/').child(`Admin/Requests/${key}`)
        .set({
                name: name,
                reason: reason,
                email: email,
                contact: contact,
        })
        .then(() => {alert('Your request have been forwarded. You will get email when your request is approved.'),
      navigation.navigate('Login', {screen: "Landing"})})
        }

    return(
    <View style={{
      justifyContent: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Request Admin</H1>
        <Form 
          style={{
            margin: 10,

          }}>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                value={name}
                onChangeText={(txt)=>setName(txt)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email Address</Label>
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
              <Label>Reason</Label>
              <Input  
                value={reason}
                onChangeText={(txt)=>setReason(txt)}/>
            </Item>
          </Form>
          <Button title="Register" onPress={()=>Request()}/>
    </View>
  )
}
