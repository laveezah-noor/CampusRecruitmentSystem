import React, { useState, useEffect } from 'react';
import { View, 
  Text, TouchableOpacity, Image, StyleSheet,  } from 'react-native';
import {H1, Card, CardItem } from 'native-base'
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

function CardMade({icon, text, badge}) {
  return (
    <Card style={styles.container}>
      <CardItem style={styles.icon}>
      <Image source={icons[icon]} resizeMode="contain" 
      style={{width: 25,
       height: 25,
        // tintColor: props.focused ? Colors.primary : Colors.secondary
       }}/>
      </CardItem>
      <CardItem style={styles.cardContent}>
      <Text style={styles.cardText}>{text}</Text>
      <Text style={styles.cardBadge}>{badge}</Text>
      </CardItem>
    </Card>
  );
}

export default function CompanyDashboardScreen({navigation}) {
  const cardHandler = (place) => {
    console.log(place)
    navigation.navigate(place)    
  }
  return(
    <View style={{
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 100,
    }}>
      <H1
        style={{
          textAlign: "center",
          paddingVertical: 20
      }}
        >Dashboard</H1>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=>cardHandler('Applications')}><CardMade icon="file" text="My Applications" badge="200K"/></TouchableOpacity>
          <TouchableOpacity onPress={()=>cardHandler('Applications')}><CardMade icon="group" text="New Application" badge="200K"/></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=>cardHandler('Students')}><CardMade icon="person_search" text="Students" badge="200K"/></TouchableOpacity>
          <TouchableOpacity onPress={()=>cardHandler('Students')}><CardMade icon="profile" text="Profile" badge="200K"/></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 138,
    height: 180,
    paddingVertical: 18,
    borderRadius: 15,
    marginRight: 10,
  },
  icon:{
    backgroundColor: "pink",
    borderRadius: 25,
    justifyContent: "center",
    height: 50,
    width: 50,
    textAlign: "center",
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center"
  },
  cardText:{
    fontWeight: "900",
    fontSize: 15,
    textAlign: "center",

  },
  cardBadge:{
    backgroundColor: "#48ba95",
    borderRadius: 50,
    textAlign: "center",
    height: 20,
    paddingHorizontal: 5,
    fontSize: 13,
    marginTop: 5,
  }
});

