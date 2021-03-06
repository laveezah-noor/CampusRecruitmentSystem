import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Card, Form, Item, Label, Input, H1} from 'native-base'

export default function AdminLoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Login = () => {
    auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    navigation.navigate('AdminRoot')
    // ...
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
              <Label>Company Email Address</Label>
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
              <Text>Request to be Admin?    </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('CompanyRegister')}><Text>Register Now</Text></TouchableOpacity>
            </View>
           </Form>
          <Button title="Login" onPress={()=>Login()}/>
    </Card>
  )
}
