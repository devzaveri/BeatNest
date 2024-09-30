import {
  MainContainer,
  MainBodyContainer
} from './HomeScreenStyles'
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/AppHeader/AppHeader';
import Color from '../../../helper/Color';
import Carousel from 'react-native-reanimated-carousel';
import Images from '../../../helper/Image';
const HomeScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
    function HandleMainBody(){
      return(
        <MainBodyContainer>
           <Carousel
                loop
                width={100}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source={Images.first} />
                    </View>
                )}
            />
        </MainBodyContainer>
      )
    }
   
  return (
    <ScrollView style={{backgroundColor: Color.MainApp}}>
    <MainContainer>
      <AppHeader />
   
   {HandleMainBody()}
     
    </MainContainer>

    </ScrollView>
  )
}

export default HomeScreen