import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {H1, Card, ListItem, CardItem, Thumbnail, Body, Right} from 'native-base'
import database from '@react-native-firebase/database';
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

const StudentsList = ({item}) => {
  return(
    <Card style={{width: 340, margin: 5, borderRadius: 15,}}>
      <CardItem
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,}}>
        <View style={{paddingRight: 10}}>
          <Body style={{ backgroundColor: "#eceff4", padding: 10, borderRadius: 35}}>
            <Thumbnail style={{width:40, height:40,}} source={icons.person} />
          </Body>
        </View>
        <Body>
          <Text note style={{fontWeight: "bold", color: "#8243D2"}}>Fresh</Text>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96"}}>{item.gender}</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>{item.email}</Text>
            </View>
          </Body>
      </CardItem>
    </Card>
   )
}

var Students = [
  {  
    "email": "john@gmail.com", 
    "id": "iuesw",
    "name": "John",
    "gender": "Male"
  }
]

export default function StudentsScreen({navigation}) {
  React.useEffect(() => {    
    // Update the document title using the browser API    
    database().ref('/Students')
    .on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        Students.push(childData) 
        // console.log("Companies: ",(Companies))
      });
    });
  })

  
  console.log("THis....",Students)

  const renderItem = ({ item }) => 
  { console.log("Item: ",item)
    return(
    <StudentsList item={item} />
  )};
  return(
    <View style={{
      justifyContent: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Students</H1>
        <View>
        <View>
          <FlatList
          renderItem={renderItem}
          data={Students}
          keyExtractor={item => item.id}
          />
        </View>
            </View>
    </View>
  )
}
