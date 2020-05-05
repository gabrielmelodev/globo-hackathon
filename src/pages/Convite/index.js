import React from "react";
import {Text,StatusBar} from "react-native"
import { 
  CardInfo,
  View,
  Title,
  ImgEsta,
  CardEmail,
  ImgIcon,
  CardFacebook,
  CardWhatsApp,
  CardOutros,
  TitleH1,
  ViewDivide,
 } from "./element";

import Estaleca from "../../../assets/estaleca.png";
import Email from "../../../assets/email_black.png";
import Mensagem from "../../../assets/speaker_notes.png";
import Outros from "../../../assets/menu.png";
import Whatsapp from "../../../assets/whatsapp.png";
import SiderNav from "../../components/Sidernav";
export default function Convite() {
  return(
  <>
  <StatusBar/>    
      <View>
      <CardInfo>
      <ImgEsta source={Estaleca} />
      <Title>Convide seus amigos e junte estalecas :)</Title> 
      
      </CardInfo>
     
      <CardEmail>
         <ImgIcon source={Email}/>
         <TitleH1>Email</TitleH1>
      </CardEmail> 
      
      <CardFacebook>
         <ImgIcon source={Mensagem}/>
         <TitleH1>Facebook Messenger</TitleH1>
      </CardFacebook>

      <CardWhatsApp>
      <ImgIcon source={Whatsapp}/>
      <TitleH1>Whatsapp</TitleH1>
      </CardWhatsApp>
     
      <CardOutros>
      <ImgIcon source={Outros}/>
      <TitleH1>Outros</TitleH1>
      </CardOutros>  
    </View>
    <SiderNav/>
    </>
      

    
    
  )
}