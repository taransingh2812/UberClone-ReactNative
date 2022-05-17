import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from "twrnc";
import {GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {setDestination} from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation= useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl`}>Good Morning, Mr. Taran</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete 
        styles={toInputBoxStyles}
        placeholder="Where to ?"
        fetchDetails={true}
        minLength={2}
        onPress={(data,details=null)=>{
            dispatch(setDestination({
                location: details.geometry.location,
                description:data.description,
            }))
            
            navigation.navigate('RideOptionsCard')
        }}
        enablePoweredByContainer={false}
        query={{
            key:GOOGLE_MAPS_APIKEY,
            language:"en",
        }}
        debounce={300}
        nearbyPlacesAPI="GooglePlacesSearch"
        
        />
      </View>

      {/* <NavFavourites/> */}
    <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}
        onPress={()=>navigation.navigate("RideOptionsCard")}
        >
            <Icon name="car" 
            type="font-awesome" 
            color="white" 
            size={16}/>

            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name="fast-food-outline" 
            type="ionicon" 
            color="black" 
            size={16}/>
            
            <Text style={tw`text-white text-center`}>Eats</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:10,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:15,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }

})
export default NavigateCard