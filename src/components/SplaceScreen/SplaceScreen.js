import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Color from '../../helper/Color'
import Images from '../../helper/Image'


const SplaceScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (navigation.isFocused()) {
                navigation.push ("App", {
                    splace: "splace"
                });
            }
        }, 2000);

        return () => clearTimeout(timeout); // Clean up the timeout on unmount
    }, [navigation]);
  return (
    <View style={{flex: 1 , backgroundColor: Color.MainApp , justifyContent: 'center' , alignItems: 'center'}}>
    <Image resizeMode='contain' source={Images.MainApplogo} style={{
        height: "100%",
        width: "100%"
    }} />
    </View>
  )
}

export default SplaceScreen