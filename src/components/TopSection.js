import {View,SafeAreaView,Text,StyleSheet} from 'react-native';


const TopSection = () =>{
return (
    <View style={styles.container}>
        <Text>Movies</Text>
    </View>
)
}



const styles = StyleSheet.create({
    container: {
        height:'20%',
    }

})
export default TopSection;