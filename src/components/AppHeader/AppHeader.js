import {
  MainContainer,
  MainHeaderComponent,
  DrawerBtn,
  MainHeaderView,
  MainHeaderImg,
  DrawerIcon,


} from './AppHeaderStyles';
import {View, Text} from 'react-native';
import React from 'react';
import Images from '../../helper/Image';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Color from '../../helper/Color';

const AppHeader = ({}) => {
  const navigation = useNavigation()
  function MainComponent() {
    return (
      <MainHeaderComponent>
        <DrawerBtn onPress={()=> {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
          <DrawerIcon source={Images.drawer} resizeMode='contain'  />
        </DrawerBtn>
        <MainHeaderView>
      <MainHeaderImg resizeMode='contain' source={Images.MainApplogo} />
      </MainHeaderView>
    </MainHeaderComponent>
    )
  }
  return(
    <MainContainer
    style={{
      shadowColor: Color.Orange,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity:  0.20,
      shadowRadius: 2.62,
      elevation: 10
    }}
    >{MainComponent()}</MainContainer>
  );
};

export default AppHeader;
