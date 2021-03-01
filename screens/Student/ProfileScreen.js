import React, {useState} from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import { Content, Card, Button, CardItem, Thumbnail, Label, H1, List, ListItem, Body } from "native-base";
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index';
import auth from '@react-native-firebase/auth';

export default function StudentProfileScreen ({navigation}){
    const name = 'Anabia Noor'
    const gender = 'Female'
    const dob = '13-1-2002'
    const email = ''
    const contact = ''
    const logOut = () => {
      auth().signOut().then(() => {
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
            source={icons.female}
            style={{width: 30, height: 30, marginTop: 8, marginLeft: 120, position: "absolute"}} />
        </View>
      </CardItem>
      <Card style={{backgroundColor: "#fff"}}>
        <CardItem >
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Text style={styles.labelText}>{dob}</Text>
          </View>
        </CardItem>
        <CardItem >
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Email Address</Label>
            <Text style={styles.labelText}>{email}</Text>
          </View>
        </CardItem>
        <CardItem >
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
            <Label style={styles.label}>Contact</Label>
            <Text style={styles.labelText}>{contact}</Text>
          </View>
        </CardItem>
        <CardItem >
          <View style={[styles.item, { borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0}]}>
          </View>
        </CardItem>
      </Card>
      <Button onPress={()=>logOut()}><Text>Logout</Text></Button>
    </View>
  )
}
      // </View>
        // <View>
        //     <View>
        //         <Thumbnail/>
        //         <H1>Name</H1>
        //         <View>
        //             <Body>
        //                 <Text>500</Text>
        //                 <Text note>Total Applications</Text>
        //             </Body>
        //         </View>
        //     </View>
        //     <View>
        //     <Item
        //     style={{
        //       backgroundColor: "#d3d3d3",
        //       borderRadius: 6,}}>
        //       <Body>
        //         <Text style={{fontSize: 18}}>Email</Text>
        //         <View style={{flexDirection: "row"}}>
        //           <Text note>email address</Text>
        //         </View>
        //       </Body>
        //     </Item>
        //     <Item
        //     style={{
        //       backgroundColor: "#d3d3d3",
        //       borderRadius: 6,}}>
        //       <Body>
        //         <Text style={{fontSize: 18}}>Phone</Text>
        //         <View style={{flexDirection: "row"}}>
        //           <Text note>email address</Text>
        //         </View>
        //       </Body>
        //     </Item>
        //     <Item
        //     style={{
        //       backgroundColor: "#d3d3d3",
        //       borderRadius: 6,}}>
        //       <Body>
        //         <Text style={{fontSize: 18}}>Date Of Birth</Text>
        //         <View style={{flexDirection: "row"}}>
        //           <Text note>email address</Text>
        //         </View>
        //       </Body>
        //     </Item>
        //     </View>
        // </View>

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