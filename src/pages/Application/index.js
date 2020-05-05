import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Animated } from "react-native";
import {withNavigation} from "react-navigation";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
import Feed from "../../pages/Feed";
import Story from "../../pages/Story";

import {
  StatuscNav,
  View,
  Title,
  TextName,
  ViewContent,
  ViewStory,
  ViewContainer,
  CardUser,
  CardName,
  CardNameUser,
  TextProfile,
  Img,
  Notification,
  ViewWrapper,
  ViewCard,
  PanalAdd,
  ButtonImg,
  ImageStory,
} from "../../Layout/Application/element";
import Posts from "../../db/Posts";
import { getUser } from "../../storage";

function Application({ navigation }) {

  function handleNavigation() {
    navigation.navigate('Convite');
  }
  
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
          <Title>
            Ola, <TextName>{name}</TextName>
          </Title>
        </ViewContent>
      </StatuscNav>
   
     <Story/>


      <Feed/>

      
    <SiderNav/>
     
    </View>
  );
}

export default withNavigation(Application);