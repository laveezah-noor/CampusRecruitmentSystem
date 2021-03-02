import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Card, Form, Item, Label, Input, H1} from 'native-base'

export default function StudentLoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Login = () => {
    auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    var all = []
    database().ref('/Students')
    .on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        all.push(childData)
        console.log(all)
        for (let i = 0; i < all.length; i++) {
          const element = all[i];
          if (element.email === email){
          console.log('This Is   ',element)
          database().ref('/Current_user').set(element)
          database().ref('/Current_user').once('value', (snapshot)=>
          console.log('Current: ',snapshot.val())
        )};
        }
      });
    });
    navigation.navigate('StudentRoot')
  })
  .catch((error) => {
    console.log(error)
    if (error){()=>alert("There is no user corresponding to these values.")}
  });
  }  
  return(
    <Card style={{
      justifyContent: "center",
      padding: 5,
      borderRadius:5,
      marginHorizontal: 15,
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
              <Input onChangeText={(txt)=>setEmail(txt)} />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input onChangeText={(txt)=>setPassword(txt)} />
            </Item>
            <View
              style={{
                flexDirection: "row",
                padding: 5,
                paddingHorizontal: 15,
                opacity: 0.5
              }}>
              <Text>Don't have an account?    </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('StudentRegister')}><Text>Register Now</Text></TouchableOpacity>
            </View>
           </Form>
          <Button title="Login" onPress={()=>Login()}/>
    </Card>
  )
}
