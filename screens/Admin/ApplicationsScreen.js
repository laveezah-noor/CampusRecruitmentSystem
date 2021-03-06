import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {Card, Thumbnail, Left, Body, Right, CardItem} from 'native-base'
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

const ApplicationList = ({item}) => {
  console.log("Item: ",item)
  return( 
    <Card style={{width: 340, margin: 5, borderRadius: 15,}}>
      <CardItem
        style={{
          borderRadius: 15
          }}>
        <View style={{paddingRight: 10}}>
          <Body style={{ backgroundColor: "#eceff4", padding: 10, borderRadius: 35}}>
            <Thumbnail style={{width:40, height:40,}} source={icons.company} />
          </Body>
        </View>
          <Body>
          <Text note style={{fontWeight: "bold", color: "#8243D2", textTransform: "uppercase", fontSize: 11}}>{item.category}</Text>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.job}</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96", fontSize: 12}}>{item.company}</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96", fontSize: 12}}>{item.address}</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem style={{borderRadius: 15}}>
          <Text style={{paddingHorizontal: 5, color: "#000", fontWeight: "bold", fontFamily: "monospace", fontSize: 12}}>Rs{item.salary}/Monthly</Text>
        </CardItem>
      </Card>
  )}
var Applications = [
  {
    "company": "Microsoft",
    "address": "Karachi", 
    "job": "Developer",  
    "salary": "25000", 
    "id": "iuesw",
    "category": "Full Time"
  }
]

export default function ApplicationsScreen({navigation}) {
  const renderItem = ({ item }) => 
  { console.log("Item: ",item)
    return(
    <ApplicationList item={item} />)}
  return(
    <View style={{
      justifyContent: "center",
      padding: 5,
    }}>
        <FlatList
          data={Applications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </View>
        
  )
}
