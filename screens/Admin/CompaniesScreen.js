import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {CardItem, H2, ListItem, Left, Body, Right, Thumbnail, Card} from 'native-base'
import database from '@react-native-firebase/database';
import {icons} from '/home/home/Development/React Native/RecruitmentSystem/constants/index'

const CompanyList = ({item}) => {
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
          <Text note style={{fontWeight: "bold", color: "#8243D2"}}>{item.category}</Text>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
            <View style={{flexDirection: "row"}}>
              <Text note style={{color: "#868e96", fontFamily: "normal", fontSize: 12}}>{item.address}</Text>
              <Text note style={{paddingHorizontal: 5, color: "#868e96", fontWeight: "900"}}>·</Text>
              <Text note style={{color: "#868e96", fontFamily: "monospace", fontSize: 12}}>{item.email}</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem style={{borderRadius: 15}}>
          <Text style={{paddingHorizontal: 5, color: "#000", fontWeight: "900", fontFamily: "Cochin", fontSize: 12}}>Jobs Available: </Text>
        </CardItem>
      </Card>
  )}
var Companies = [
  {
    "address": "Street ABC",
    "city": "Karachi", 
    "contact": "0 0 0 0 0 0 1",  
    "email": "ios@ios.com", 
    "id": "iuesw",
    "name": "Ios",
    "category": "Mobile"
  }
]

export default function CompaniesScreen({navigation}) {
  
  React.useEffect(() => {    
    // Update the document title using the browser API    
    database().ref('/Companies')
    .on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        Companies.push(childData) 
        // console.log("Companies: ",(Companies))
      });
    });
  })

  
  console.log("THis....",Companies)
  
  const renderItem = ({ item }) => 
  { console.log("Item: ",item)
    return(
    <CompanyList item={item} />
  )};
  
  return(
    
    <View style={{
      backgroundColor: "#e8e5ec",
      padding: 5,
      flex: 1
    }}>
        <View>
          <FlatList
          renderItem={renderItem}
          data={Companies}
          keyExtractor={item => item.id}
          />
        </View>
    </View>
  )
}
