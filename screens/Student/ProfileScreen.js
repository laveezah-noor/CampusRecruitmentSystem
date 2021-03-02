import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Thumbnail, Label, H1, List, ListItem, Body } from "native-base";
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function StudentProfileScreen ({navigation}){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
  database().ref('/Current_user').once('value', (snapshot=>{
    var Current_user = snapshot.val()
    console.log('Current User: ', Current_user)
    setName(Current_user.name)
    setGender(Current_user.gender)
    setEmail(Current_user.email)
    setContact(Current_user.contact)
    setDob(Current_user.dob)
    console.log(name, gender, email, contact)
  }))
  let genderIcon = '';
  if (gender === 'Female') {
    genderIcon = icons.female
  } else {
    genderIcon = icons.male
  }    
    const logOut = () => {
      auth().signOut().then(() => {
        alert('Signed Out')
        database().ref('/Current_user').set(null)
        navigation.navigate('Login')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  return(
    <View>       
        <CardItem  style={{ height: 250, flexDirection: "column", justifyContent: "center" }}>
        <View style={styles.profile}><Thumbnail square style={{resizeMode:"contain"}} source={icons.person} /></View>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.profileName}>{name}</Text>
          <Image 
            source={genderIcon}
            style={{width: 30, height: 30, marginTop: 8, marginLeft: 120, position: "absolute"}} />
        </View>
      </CardItem>
      <View style={{backgroundColor: "#F6EDF6", height: 500}}>
        <CardItem style={{backgroundColor: "transparent"}}>
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Text style={styles.labelText}>{dob}</Text>
          </View>
        </CardItem>
        <CardItem style={{backgroundColor: "transparent"}}>
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Email Address</Label>
            <Text style={styles.labelText}>{email}</Text>
          </View>
        </CardItem>
        <CardItem style={{backgroundColor: "transparent"}}>
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Contact</Label>
            <Text style={styles.labelText}>{contact}</Text>
          </View>
        </CardItem>
        <CardItem style={{backgroundColor: "transparent"}}>
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
          </View>
        </CardItem>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity
       onPress={()=>logOut()}
       style={{
         backgroundColor: "#8243D2",
         padding: 12,
         borderRadius: 10
       }}><Text style={{color: "#fff", fontSize: 15}}>Logout</Text></TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",

  },
  profile:{
    marginTop: 20,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "gray",

    // shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 1,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 15.00,
    // elevation: 24,
  },
  profileName: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginTop: 10
  },
  item:{
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    borderRadius: 2,
  },
  label:{
    color: "gray",
    fontSize: 12
  },
  labelText: {
    fontSize: 15,
    paddingTop: 9
  }
});