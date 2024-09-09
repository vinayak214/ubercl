import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return(
    <View>
      <Text style={styles.textColor}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textColor:{
      color:'red'
    }
})

export default Home;

