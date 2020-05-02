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

} from "../../components/Feed/element";
import ImagemFavicon from "../../../assets/profile.png";
import { ScrollView } from "react-native";

export default function Login({ navigation }) {


  return (
   
    <FeedWrrapper>
      <ScrollView 
    scrollEventThrottle={3}
    showsVerticalScrollIndicator={false}
    vertical
    >
               <CardFeed>
       
       
      
               <CardName>
         <ProfileLink>
              <ImgProfile source={ImagemFavicon} />
              <CardProfileName>
              <TextProfile>Gabriel Melo</TextProfile>
              </CardProfileName>
              
         </ProfileLink> 
         <CardImg>
           

         </CardImg>
         <NameUser>Gabriel Melo</NameUser>
         
        </CardName>

      
      
        
     



       </CardFeed>
       <CardFeed>
       
       
      
       <CardName>
 <ProfileLink>
      <ImgProfile source={ImagemFavicon} />
      <CardProfileName>
      <TextProfile>Gabriel Melo</TextProfile>
      </CardProfileName>
      
 </ProfileLink> 
 <CardImg>
   

 </CardImg>
 <NameUser>Gabriel Melo</NameUser>
 
</CardName>








</CardFeed>

        </ScrollView>
 
      

    </FeedWrrapper>

  );
}