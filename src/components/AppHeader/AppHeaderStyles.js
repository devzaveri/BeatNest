import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import Color from '../../helper/Color';



export const MainContainer = styled.View`
/* border-width: 1px; */
background: ${Color.MainApp};
border-bottom-left-radius: ${rw(10)}px;
border-bottom-right-radius: ${rw(10)}px;
`
export const MainHeaderComponent = styled.View`
  padding-top: ${rh(1)}px;
  padding-bottom: ${rh(1)}px;
  padding-left: ${rw(5)}px;
  padding-right: ${rw(2)}px;
  flex-direction: row;
`;
export const DrawerBtn = styled.TouchableOpacity`
padding: ${rw(1)}px;
align-self: flex-start;
`
export const DrawerIcon = styled.Image`
height: ${rh(5)}px;
width: ${rw(10)}px;
tint-color: ${Color.darkOrange};
`
export const MainHeaderView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-right: ${rw(10)}px;
`
export const MainHeaderImg = styled.Image`
height: ${rh(20)}px;
width: ${rw(70)}px;
`