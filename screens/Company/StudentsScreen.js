import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {H1, H2, List, ListItem, Left, Body, Right} from 'native-base'
import database from '@react-native-firebase/database';

export default function StudentsScreen({navigation}) {
  const [dataList,setDataList] = useState([])
  const data = database().ref('/Students')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
    ()=>setDataList([snapshot.val()])});
  console.log("DataList: ",dataList)
  return(
    <View style={{
      // backgroundColor: "red",
      justifyContent: "center",
      // alignItems: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Students</H1>
        <View>
            {/* <H2>Applications</H2> */}
            <List>
            <ListItem avatar
              style={{
                backgroundColor: "#d3d3d3",
                borderRadius: 6,
              }}>
              {/* <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left> */}
              <Body>
                <Text style={{fontSize: 18}}>Name</Text>
                <View style={{flexDirection: "row"}}>
                  <Text note>age</Text>
                  <Text note style={{paddingHorizontal: 5}}>-</Text>
                  <Text note>gender</Text>
                  <Text note style={{paddingHorizontal: 5}}>-</Text>
                  <Text note>email</Text>
                  <Text note style={{paddingHorizontal: 5}}>-</Text>
                  <Text note>grade</Text>
                </View>
                
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </View>
    </View>
  )
}
