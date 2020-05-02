import React from "react";
import {
  FeedWrrapper,
  CardFeed,
  CardName,
  ProfileLink,
  ImgProfile,
  TextProfile,
  CardProfileName,
  CardImg,
  NameUser,
  CardViewImg,
  Card,

} from "../../components/Feed/element";
import ImagemFavicon from "../../../assets/profile.png";
import Bruna from "../../../assets/Feed_2.jpg";
import { ScrollView } from "react-native";

export default function Login({ navigation }) {


  return (
   
    <FeedWrrapper>

      <ScrollView 
       scrollEventThrottle={3}
       showsVerticalScrollIndicator={false}
       vertical >
             <CardFeed>
               <Card>
               <CardName>
         <ProfileLink>
              <ImgProfile source={ImagemFavicon} />
              <CardProfileName>
              <TextProfile>Gabriel Melo</TextProfile>
              </CardProfileName>
              
         </ProfileLink> 
        
         <CardImg source={Bruna}  accessibilityViewIsModal={true}  style={{
     width: 900,
     height: 400,
     marginRight: 10,
     marginBottom: 12,
     marginTop: 12}} />
        
       
     
         <NameUser>Gabriel Melo</NameUser>
         
        </CardName>

               </Card>
               

      
      
        
     



       </CardFeed>
       <CardFeed>
       
       
      
       <CardName>
 <ProfileLink>
      <ImgProfile source={ImagemFavicon} />
      <CardProfileName>
      <TextProfile>Gabriel Melo</TextProfile>
      </CardProfileName>
      
 </ProfileLink> 
 <CardViewImg>
         <CardImg source={Bruna} resizeMode="stretch"/>
         </CardViewImg>
 <NameUser>Gabriel Melo</NameUser>
 
</CardName>








</CardFeed>

        </ScrollView>
 
      

    </FeedWrrapper>

  );
}