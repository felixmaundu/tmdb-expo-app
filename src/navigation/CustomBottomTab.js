import {createStackNavigator} from '@react-navigation/stack';
import Collection from '../screens/Collection';
import MovieScreen from '../screens/MovieScreen';
import SearchMovie from '../screens/SearchMovie';
import NowPlaying from '../components/NowPlaying';



const Stack = createStackNavigator()


const Movies = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="MovieScreen"   component={MovieScreen}  options={{ headerShown: false }}/>
            {/* <Stack.Screen name="NowPlaying"   component={NowPlaying}  options={{ headerShown: false }}/>  */}
        </Stack.Navigator>
    )
}
export {Movies};


const Searches = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen  name="SearchMovie"  component={SearchMovie} options={{ headerShown: false }}/>          
        </Stack.Navigator>
    )
}
export {Searches};


const Collections = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Collections" component={Collection} options={{ headerShown: false }}/>          
        </Stack.Navigator>
    )
}
export {Collections};