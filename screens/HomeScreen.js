import {  Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5 h-20 w-40 `}>
            <Image
            style={{
                width:'100%', 
                height:'100%', 
                resizeMode:'contain',
                marginBottom:15
            }}
            source={{
                uri:"https://links.papareact.com/gzs"
            }}
                />
               <GooglePlacesAutocomplete
                placeholder="Where from?"
                  nearbyPlacesAPI = "GooglePlacesSearch"
                  debounce={400}
                  styles={{
                    container:{
                      flex:0,
                      width:370,
                 
                    },
                    textInput:{
                      fontSize:18,
                    },
                  }}
                  onPress={(data, details=null)=>{
                   dispatch(setOrigin({
                      location:details.geometry.location,
                      description: data.description
                    }))
                    dispatch(setDestination(null));
                  }}
                  returnKeyType={"search"}
                  fetchDetails={true}
                  minLength = {2}
                  query={{
                    key:"AIzaSyCAB58dnrj-VPCNl99ptPM00CDo9Uomv_A",
                    language:"en"
                  }}
              />
                <NavOptions/>
                <NavFavourites/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen