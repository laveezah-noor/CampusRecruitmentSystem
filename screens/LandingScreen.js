import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { H1, Card, CardItem} from 'native-base';
import { icons } from '../constants'
import Colors from '../constants/Colors'

export default function LandingScreen({navigation}) {
    const cardHandler = (place) => {
        console.log(place)
        navigation.navigate(place)    
      }
      return(
        <View style={{
          backgroundColor: "#8243D2",
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1
        }}>
          <H1
            style={{
              textAlign: "center",
              paddingVertical: 400,
              color: "#ffffff",
              fontWeight: "bold",
          }}
            >Campus Recruitment System</H1>
            
              <TouchableOpacity 
              onPress={()=>cardHandler('Admin')}>
                <Text style={{color: "white"}}>Or are you an Admin?</Text></TouchableOpacity>
              <View style={{flexDirection: "row"}}>
              <TouchableOpacity 
               onPress={()=>cardHandler('Student')}>
                 <CardMade style={{
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25
                 }} icon="person" text="Student"/>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>cardHandler('Company')}>
                <CardMade  style={{
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25
                 }} icon="company" text="Company"/>
              </TouchableOpacity>
            </View>
        </View>    
    );
}

function CardMade({icon, text, style}) {
    return (
      <Card style={[styles.container, style]}>
        <CardItem style={styles.icon}>
        <Image source={icons[icon]} resizeMode="contain" 
        style={{
          width: 30,
          height: 30
         }}/>
        </CardItem>
        <CardItem style={styles.cardContent}>
        <Text style={styles.cardText}>{text}</Text>
        {/* <Text style={styles.cardBadge}>{badge}</Text> */}
        </CardItem>
      </Card>
    );
  }


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 150,
      height: 138,
      paddingVertical: 18,
      backgroundColor: "#F0E4FD",
    },
    icon:{
      backgroundColor: "transparent",
      justifyContent: "center",
      height: 50,
      width: 50,
      textAlign: "center",
    },
    cardContent: {
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "transparent"
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
  
  