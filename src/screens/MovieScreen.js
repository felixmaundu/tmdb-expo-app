import { StyleSheet, Text, View,Dimensions,TouchableOpacity,FlatList,Image,StatusBar ,ScrollView} from 'react-native';
import NowPlaying from '../components/NowPlaying';
import TopSection from '../components/TopSection';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const MovieScreen = (props)=> {




  return (
    <ScrollView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#151C26" />
      <TopSection/>
      
  

      <View style={styles.containerNowPlaying}>
        <Text style={styles.containerSeeMore}>See more</Text>
         <NowPlaying/>
      </View>
  
  
    

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151C26',
  },
  containerNowPlaying: {
   width: deviceWidth,
   marginTop:20,
  },
  containerSeeMore:{
    height:10,
    color:'red',
    margin:20,
  }
 
});
export default MovieScreen;

