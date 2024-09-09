import {Image, View} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SplashScreen = () => {

  type RootStackParamList = {
      Home:undefined
  }
  type NavigationProps = NativeStackNavigationProp<RootStackParamList,'Home'>
  const navigation = useNavigation<NavigationProps>();

   useEffect(()=>{
     const timer = setTimeout(()=>{
       navigation.navigate('Home')
     },2000)
       return ()=>{
         clearTimeout(timer);
       }
   },[]
   )

  return (
    <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <Image
        source={require('../assets/images/splash.png')}
        resizeMode="stretch"
        style={{marginBottom:10 }}/>
    </View>
  )
}
export default SplashScreen;
