import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {onboarding} from '../constants';
import Swiper from 'react-native-swiper'
import {useRef, useState} from 'react';
import CustomButton from '../components/CustomButton.tsx';

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        console.log("buttonClicked")
      }} style={{width:'100%', alignItems:'flex-end',padding:10}}>
        <Text style={{color: 'black', fontFamily:'PlusJakartaSans-Bold'}}>
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
       ref={swiperRef}
       loop={false}
       dot={<View style={{width:32,height:4,marginHorizontal:1, backgroundColor:'#E2E8F0'}}></View>}
       activeDot={<View style={{width:32,height:4,marginHorizontal:1, backgroundColor:'#0286FF'}}/>}
       onIndexChanged={(index)=>setActiveIndex(index)}>
        {onboarding.map((item) => (
          <View key={item.id} style={{justifyContent:'center',alignItems:'center',padding:10,marginVertical:20}}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descText}>{item.description}</Text>
            </View>
          </View>
        ))}

      </Swiper>
     <CustomButton title="Next" />
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-between',
  },
  image: {
    height:300,
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    gap:10
    // width:300
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  descText: {
    color: '#858585',
    fontFamily: 'PlusJakartaSans-SemiBold',
    textAlign:'center',
    fontSize: 20,
    marginHorizontal:30
  },
  customBtn:{
    marginVertical:10
  }
});
