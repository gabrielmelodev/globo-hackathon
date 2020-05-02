import React,{useState,useEffect} from "react";
import { StatusBar, ScrollView, Animated } from "react-native";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
import Feed from "../../pages/Feed";

import {
  StatuscNav,
  Profile,
  View,
  Img,
  Title,
  TextName,
  ViewContent,
  ViewStory,
  ViewContainer,
  CardUser,
  CardName,
  TextProfile
} from "../../Layout/Application/element";
import { getUser } from "../../storage";

export default function Application() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const { name } = await getUser();
      setName(name);
    })();
  });

  return (

    <View>
      <StatusBar />
     
      <StatuscNav>
        <ViewContent>
          <Title>Ola, <TextName>{name}</TextName></Title>
        </ViewContent>

      </StatuscNav>
      <Feed/>
      <ViewStory>
        <ViewContainer>
          <ScrollView horizontal scrollEventThrottle={10} showsHorizontalScrollIndicator={false}>
            <CardUser>
           
              <CardName>
              <TextProfile>Seu Story</TextProfile>
              </CardName>
            </CardUser>
            <CardUser>

            </CardUser>
            <CardUser>

            </CardUser>
            <CardUser>

            </CardUser>
          </ScrollView>

        </ViewContainer>
      </ViewStory>
      
      <SiderNav />





    </View>






  )
}




