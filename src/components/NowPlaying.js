 import { StyleSheet, Text, View,Dimensions,TouchableOpacity,FlatList,Image ,ScrollView} from 'react-native';
import { useEffect,useState } from 'react';
import {IMAGE_POSTER_URL } from '../utils/Config';
import {getNowPlaying} from '../services/Api';
import ItemSeparator from '../utils/ItemSeparator';
import {Loader} from '../utils/Loader';
import { Ionicons } from "@expo/vector-icons";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const NowPlaying = props =>{
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState();

  
    
    useEffect(() => {
        const getNowPlayings = async () => {
          const data = await getNowPlaying(props.url);
          setNowPlaying(data.results);
          setLoading(false);
        };
       
    
       
        getNowPlayings();
      }, []);
return (
    <View style={styles.container}>
        <Text>
            Now NowPlaying
        </Text>
         <View style={styles.containerOne}>

            <FlatList
              keyExtractor={item => item.id}
              data={nowPlaying}
              horizontal
              ItemSeparatorComponent={() => <ItemSeparator width={15} />}
              ListHeaderComponent={() => <ItemSeparator width={5} />}
              ListFooterComponent={() => <ItemSeparator width={20} />}
              renderItem={item => displayMovies(item, props)}
            />
      </View>
    </View>
)
}



const displayMovies = ({item}, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
         // props.navigation.push('movieDetails', {movieId: item.id});
        }}
        style={{marginHorizontal: 10}}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={styles.posterImage}
        />
         <View style={styles.rowAndCenter}>
         <Ionicons
              name="heart"
              size={17 }
              color={'yellow'}
              style={{ marginRight: 3,marginTop:3 }}
            />
            <Text style={styles.vote_count}>{item.vote_count}</Text>
            {/* <Text style={styles.movieTitle}>{item.title}</Text> */}
            </View>
        <Text style={styles.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
export default NowPlaying;






const styles = StyleSheet.create({
//    container:{
//        fontSize:30,
//    },
  rowAndCenter:{
    flexDirection: "row",
    justifyContent:"space-between",
    //alignItems: "stretch",
  },
  posterImage: {
   
    height: 250,
    width: 175,
    borderRadius: 5,
  },
  vote_count:{
    color:'orange',

  },
  movieTitle: {
    color: '#fff',
    width: 150,
    //height:20,
    textAlign: 'center',
    marginTop: 1,
    fontSize: 16,
  },



   

});


