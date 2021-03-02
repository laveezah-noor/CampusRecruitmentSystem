import React from 'react';
import { View, 
  Text, TouchableOpacity, Image, StyleSheet,  } from 'react-native';
import {H1, H2, Card, CardItem } from 'native-base'
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'
import database from '@react-native-firebase/database'

function CardMade({icon, text}) {
  return (
    <Card style={styles.container}>
      <CardItem style={styles.icon}>
      <Image source={icons[icon]} resizeMode="contain" 
      style={{width: 30,
       height: 30,
       }}/>
      </CardItem>
      <CardItem style={styles.cardContent}>
      <Text style={styles.cardText}>{text}</Text>
      </CardItem>
    </Card>
  );
}

export default function StudentDashboardScreen({navigation}) {
  const [name, setName] = React.useState('')
  database().ref('/Current_user').once('value', (snapshot)=>
    // console.log('Current: ',snapshot.val()),
    setName(snapshot.val().name)
  )
  const cardHandler = (place) => {
    console.log(place)
    navigation.navigate(place)    
  };
  return(
    <View style={{
      justifyContent: "center",
      paddingVertical: 100,
      backgroundColor: "#fff",
      paddingHorizontal: 30,
      flex: 1
    }}>
      <H2 style={{
        color: "#DCC3FE",
        fontWeight: "bold",
        fontFamily: "Cochin"
      }}>Hello, {name}</H2>
      <H1
        style={{
          paddingVertical: 20,
          fontWeight: "bold",
      }}
        >Dashboard</H1>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
          <TouchableOpacity onPress={()=>cardHandler('Applications')}><CardMade icon="file" text="My Applications" badge="200K"/></TouchableOpacity>
          <TouchableOpacity onPress={()=>cardHandler('Applications')}><CardMade icon="group" text="New Application" badge="200K"/></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", paddingHorizontal: 5}}>
          <TouchableOpacity onPress={()=>cardHandler('Students')}><CardMade icon="person_search" text="Students List" badge="200K"/></TouchableOpacity>
          <TouchableOpacity onPress={()=>cardHandler('Students')}><CardMade icon="profile" text="Profile" badge="200K"/></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 138,
    height: 150,
    paddingVertical: 18,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: "#FBECFF",
  },
  icon:{
    backgroundColor: "transparent",
    marginTop: 5
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  cardText:{
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Cochin",
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

