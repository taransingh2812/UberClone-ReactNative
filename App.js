import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import {  Provider  } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';


//1. Set up REDUX
export default function App() {


  const Stack = createNativeStackNavigator();
  return (

      <Provider store={store}>
        <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          style={{flex:1}}
          behavior={Platform.OS=="ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS=="ios" ? -64 : 0}
          >
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} 
            options={{
              headerShown:false,
            }}/>
             <Stack.Screen name='EatsScren' component={EatsScreen} 
            options={{
              headerShown:false,
            }}/>
            <Stack.Screen name='MapScreen' component={MapScreen} 
            options={{
              headerShown:false,
            }}/>
           
          </Stack.Navigator>
          </KeyboardAvoidingView>
          
        </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    
  );
}

