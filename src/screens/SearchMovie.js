import { StyleSheet, StatusBar, Text, View, SafeAreaView, input, TouchableOpacity, ActivityIndicator, FlatList, Dimensions, ScrollView } from 'react-native';
import { Searchbar } from "react-native-paper";
import TopSection from '../components/TopSection';
import { useState, useEffect } from 'react';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SearchMovie = () => {
  const [loading, setLoading] = useState(false);//false
  const [nowPlaying, setNowPlaying] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);



  const handleLoadMore = () => {
    console.log('load more item')
    setPageCurrent(pageCurrent + 1);
    setLoading(true);
  }
  const renderFooter = () => {

    return (
      loading ?
        <View style={styles.loader}>
          <ActivityIndicator size="large" color='#aaa' backgroundColor='#151C26' />
        </View> : null

    );
  }

  const fetchData = (text) => {

    const apiURL =
      `https://api.themoviedb.org/3/search/tv?api_key=53939b3da3d575c42c212fb77c52c5a5&language=en-US&query=${text}&page=${pageCurrent}`
      //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        //setNowPlaying([...nowPlaying,...responseJson.results]);
        setResults([...results, ...responseJson.results]);
        console.log(responseJson);
      }).catch((error) => {
        console.log(error);
      })
  }




  useEffect(() => {

    //getMovies();
    fetchData();

  }, [pageCurrent, searchTimer]
  );

  const BottomFlatList = () => {
    return(
      <View>
         <FlatList
          data={results}
          keyExtractor={(item) => "" + item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.viewText}
              onPress={() => {
                props.navigation.push('TvDetails', { tvId: item.id });
              }}>
              <Text style={styles.text}>{item.original_name} </Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={renderFooter} //this.renderFooter
          onEndReached={handleLoadMore}//this.handleLoadMore
          onEndReachedThreshold={0}
        />
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#151C26" />
      {/* <TopSection/> */}
      <SafeAreaView style={styles.safeAreaView}>
        <Searchbar
          placeholder="Search"
          style={styles.searchbar}
          onChangeText={(text) => {
            if (searchTimer) {
              clearTimeout(searchTimer);
            }
            setInput(text);
            setSearchTimer(setTimeout(() => { fetchData(text); }, 2000),);//fetchData
            console.log(text);
          }}
          //onChangeText={(text) => getMovies(text)}
          value={input}
        />
      </SafeAreaView>

      <View  style={styles.scrollView}>


      <FlatList
          data={results}
          keyExtractor={(item) => "" + item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.viewText}
              onPress={() => {
               // props.navigation.push('TvDetails', { tvId: item.id });
              }}>
              <Text style={styles.text}>{item.original_name} </Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={renderFooter}
          //ListFooterComponent={<BottomFlatList/>}
          onEndReached={handleLoadMore}//this.handleLoadMore
          onEndReachedThreshold={0}
        />
      </View>


    </View>
  );
}






const styles = StyleSheet.create({
  container: {

    backgroundColor: '#151C26',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  safeAreaView: {
    backgroundColor: '#151C26',
    height: '10%',
    width: deviceWidth,
    marginBottom: '10%',

  },
  scrollView:{
    height:'87%',
  },
  searchbar: {
    marginTop: '4%',
    margin: 5,
    marginStart: 2,
    backgroundColor: '#fff',
    color: '#fff'
  },
  mainListView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forImage: {
    height: 10,
    width: 100,
  },
  listImage: {
    height: 200,
    width: 150,
    marginStart: 10,
  },
  viewText: {
    marginStart: 10,
    marginTop: 20
  },
  textH: {
    color: '#000'
  },
  loader: {
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#000',
    //color: '#151C26',
    //color='#aaa',
    backgroundColor:'#151C26'
  },
  text: {
    marginTop: 2,
    color: '#ffffff',
    marginBottom: 10,
    marginStart: 15,
  },
  list: {
    marginBottom: 15,
    height: 200,
  },

});

export default SearchMovie;
