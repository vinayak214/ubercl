import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**The ...props in your CustomButton component is a way to pass down any additional props that you haven't explicitly defined in the component's arguments. These extra props are collected into an object called props and then spread onto the TouchableOpacity component. **/
const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  return <TouchableOpacity onPress={onPress} style={style.container}>
    {IconLeft && <IconLeft/>}
    <Text>{title}</Text>
    {IconRight && <IconRight/>}
  </TouchableOpacity>;
};

const style = StyleSheet.create({
  container: {
    padding:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    borderRadius:20,
    backgroundColor:'blue',
    margin:10
  }
})
export default CustomButton;

