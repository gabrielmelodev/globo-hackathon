import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';


export const View = styled.KeyboardAvoidingView` 
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextH1 = styled.Text`
color: #000;
font-weight: normal;
font-size: 20px;
padding: 16px 0 26px;
text-align: center;
margin: 8px;

`;

export const TextButton = styled.Text`

 color: #fff;
 font-size: 15px;
 font-weight: bold;
 text-transform: uppercase;
 align-content: center;
 text-align: center;

`;
export const Button = styled.TouchableOpacity`
height: 42px;
background: red;
background: #191919;
border-radius: 3px;
box-shadow: 10px 5px 5px rgba(0,0,0,.25);
justify-content: center;
align-content: center;

`;

export const ScrollView = styled.ScrollView`
height: auto;
align-content: center;
justify-content: center;
align-items: center;

`;

export const SmallButton = styled.Text`
margin-top: 4px;
padding-bottom: 22px;
text-transform: uppercase;
text-align: center;
`;



export const SpanButton = styled.Text`
color: #000;
margin-top: 3px;
padding-bottom: 22px;
text-transform: none;

`;

export const SmallLink = styled.Text`
font-weight: bold;
margin-left: 2px;
text-transform: uppercase;

`;
export const Img = styled.Image`
    width: 50%;
    height: 50px;
    min-width: 40%;
    margin-bottom: 3px;
     
`;
export const ButtonLink = styled.Text`
  background: transparent;
  color: #000;
  padding-bottom: 15px;
  height: 30px;
  text-align: center;

  align-content: center;
  align-items: center;
  font-size: 12px;

`;



export const TextInput = styled.TextInput`
border: 1px solid #d5d5d5;
font-size: 16px;
color: #444;
background: #FFF;
height: 40px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 8px;
padding-right: 8px;
margin-bottom: 20px;
border-radius: 2px;
`;

export const ViewForm = styled.View`
align-self: stretch;
justify-content: center;
padding-top: 2px;
padding-left: 55px;
padding-right: 55px;
`;

export const Text = styled.Text`
color: #666;
padding-bottom: 25px;
padding-top: 15px;
font-weight: bold;
margin: 8px;

`;

export const SpanOr = styled.Text`
    font-size: 14px;
    padding: 0 25px;
    color: #000;
    background: #fff;
    align-content: center;
    text-align: center;
    line-height: 1;
    top: 24px;

`;
export const SpartentDivide = styled.View`
height: 1px;
padding: 0px;
color: #000;
font-size: 14px;
background: #dedede;
color: #999;
width: 100%;
text-align: center;
margin: 0px;

`;