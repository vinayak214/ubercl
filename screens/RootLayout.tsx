import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home.tsx';
import SplashScreen from './SplashScreen.tsx';
import onboarding from './Onboarding.tsx';
const RootLayout =()=>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash"
                      component={SplashScreen}
                      options={{headerShown: false}} />
        <Stack.Screen name="Home"
                    component={onboarding}
                    options={{headerShown: false}} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}
export  default RootLayout;
