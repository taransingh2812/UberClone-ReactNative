import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data =[
  {
    id:"Uber-X-123", 
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456", 
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-LUX-789", 
    title:"Uber LUX",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  },
]

const surgeChargeRate = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (

    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}
         onPress={()=> navigation.navigate("NavigateCard")}>
          <Icon
          name="chevron-left" type="fontawesome"
         />
        </TouchableOpacity >
      <Text style={tw`text-center py-5 text-xl`}>Select A Ride - {travelTimeInformation?.distance?.text} </Text>
      </View>

      <FlatList
      data={data}
      keyExtractor={(item)=> item.id}
      renderItem={({item : {id, title,multiplier, image},item})=>(
         <TouchableOpacity 
         style={tw`flex-row justify-between items-center px-10 ${id===selected?.id && "bg-gray-200"}`}
         onPress={()=> setSelected(item)}>
          <Image
          style={{
            width:100,
            height:100,
            resizeMode:"contain",
          }}
          source={{uri: image}}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>{travelTimeInformation?.duration?.text}</Text>
          </View>
          <Text style={tw`text-xl`}>
            {new Intl.NumberFormat('en-gb',{
              style:"currency",
              currency:"CAD"
            }).format(
              (travelTimeInformation?.duration.value*surgeChargeRate*multiplier)/100
            )}
          </Text>
        </TouchableOpacity>
      )}
      />
      <SafeAreaView style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity 
        style={tw`bg-black py-3 m-3 ${!selected &&"bg-gray-300"}`} 
        disabled={!selected}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
            </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})