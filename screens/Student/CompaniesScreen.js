import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {H1, H2, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base'
import database from '@react-native-firebase/database';

export default function CompaniesScreen({cmd}) {
  const Companies = database().ref('/Companies')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
  return(
    <View style={{
      // backgroundColor: "red",
      justifyContent: "center",
      // alignItems: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Dashboard</H1>
        <View>
            <H2>Applications</H2>
            <List>
            <ListItem>
              {/* <Left>
                <Thumbnail />
              </Left> */}
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
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
