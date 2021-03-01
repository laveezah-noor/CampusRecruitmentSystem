import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {H1, List, ListItem, CardItem, Thumbnail, Body, Right} from 'native-base'
import database from '@react-native-firebase/database';
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

const CustomList = () => {
  return(
    <View>
      <CardItem
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,}}>
        <View style={{paddingRight: 10}}>
          <Body style={{ backgroundColor: "#eceff4", padding: 10, borderRadius: 35}}>
            <Thumbnail style={{width:40, height:40,}} source={icons.work} />
          </Body>
        </View>
        <Body>
          <Text note style={{fontWeight: "bold", color: "#8243D2"}}>Full Time</Text>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Name</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96"}}>Name</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>gender</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>email</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>grade</Text>
            </View>
          </Body>
      </CardItem>
      <CardItem>
        <Text style={{paddingHorizontal: 5, color: "#000", fontWeight: "900", fontFamily: "Cochin", fontSize: 12}}>Rs 12000/Monthly</Text>
      </CardItem>
    </View>
   )
}

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
      justifyContent: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Students</H1>
        <View>

    <View>
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
          <Text note style={{fontWeight: "bold", color: "#8243D2"}}>Full Time</Text>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Name</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96"}}>age</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>gender</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>email</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>grade</Text>
            </View>
          </Body>
      </CardItem>
      <CardItem>
        <Text style={{paddingHorizontal: 5, color: "#000", fontWeight: "900", fontFamily: "Cochin", fontSize: 12}}>Rs 12000/Monthly</Text>
      </CardItem>
    </View>
        </View>
    </View>
  )
}
