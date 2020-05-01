import React from "react";
import { View,ViewForm,TextInput,Img,TextH1,Button,TextButton,ButtonLink,SmallButton,SpanButton,SmallLink,SpartentDivide,SpanOr } from "../../Layout/Login/element";
import ImagemFavicon from "../../../assets/minhacontaglobo.jpg";
import { Platform } from 'react-native';

export default function Login({navigation}) {
  
    return(
         <View enabled={Platform.OS === 'ios'} behavior="padding">
         <Img source={ImagemFavicon} />
         <ViewForm>
         <TextH1>Uma só conta para todos os produtos Globo</TextH1>
        
         
          <TextInput placeholderTextColor="#999" autoCorrect={false} returnKeyType="next"  
          keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email"/>
          
          <TextInput placeholderTextColor="#999" secureTextEntry={true} maxLength={8}  placeholder="Digite sua senha"/>
           <ButtonLink>Esqueci minha senha?</ButtonLink>
          <Button>
          <TextButton onPress={() => navigation.navigate("Application")}>Entrar</TextButton>
          </Button>
          <SmallButton>
            <SpanButton>Não tem conta? <SmallLink>Cadastra-se</SmallLink></SpanButton>
          </SmallButton>

          <SpartentDivide>
            <SpanOr>ou entre com</SpanOr>
          </SpartentDivide>

         </ViewForm>
     
  
      </View>

     
    );
  
}
 

