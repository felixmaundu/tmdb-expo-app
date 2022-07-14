import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {Movies,Searches,Collections} from './src/navigation/CustomBottomTab';




 const Tab = createMaterialBottomTabNavigator();


export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Movies"
      activeColor="#00008b"
      barStyle={{ backgroundColor: '#151C26' }}>

      <Tab.Screen
        name="Movie"
       
        component={Movies}
       
        options={{
          tabBarLabel: 'movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" color={color} size={26} />
          ),
        }}
      >
     
      </Tab.Screen>

      <Tab.Screen
        name="Searchs"
       
        component={Searches}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Collection"
       
        component={Collections}
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="collage" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
