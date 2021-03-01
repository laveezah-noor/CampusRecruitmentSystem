import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {H1, Thumbnail, Left, Body, Right, CardItem} from 'native-base'
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

const List = () => {
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
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Job Name</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96"}}>Address</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96"}}>City</Text>
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

)}

export default function ApplicationsScreen({navigation}) {
  return(
    <View style={{
      justifyContent: "center",
      padding: 5,
    }}>
      <H1
        style={{textAlign: "center"}}
        >Applications</H1>
        {/* <FlatList
          data={DATA}
          renderItem={List}
          keyExtractor={item => item.id}
        /> */}
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
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Job Name</Text>
                <View style={{flexDirection: "row"}}>
                  <Text note style={{color: "#868e96"}}>Address</Text>
                  <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
                  <Text note style={{color: "#868e96"}}>City</Text>
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
  )
}
