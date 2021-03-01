import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {H1, Thumbnail, List, ListItem, Left, Body, Right} from 'native-base'

export default function AddApplicationsScreen({cmd}) {
  return(
    <View style={{
      // backgroundColor: "red",
      justifyContent: "center",
      // alignItems: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Applications</H1>
        <View>
            {/* <H2>Applications</H2> */}
            <List>
            <ListItem avatar
            style={{
              backgroundColor: "#d3d3d3",
              borderRadius: 6,}}>
              <Left>
                <Thumbnail source={require("/home/home/Development/React Native/RecruitmentSystem/assets/Icons/home.png")} />
              </Left>
              <Body>
                <Text style={{fontSize: 18}}>Job Name</Text>
                <View style={{flexDirection: "row"}}>
                  <Text note>Name</Text>
                  <Right>
                    <Text note>Aggregate</Text>
                  </Right>
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
