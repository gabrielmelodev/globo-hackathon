import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Animated } from "react-native";
import { getUser } from "../../storage";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
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
} from "../../Layout/Application/element";

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
          <Title>
            Olá, <TextName>{name}</TextName>
          </Title>
        </ViewContent>
      </StatuscNav>
      <ViewStory>
        <ViewContainer>
          <ScrollView
            horizontal
            scrollEventThrottle={10}
            scrollIndicatorInsets={false}
          >
            <CardUser></CardUser>
            <CardUser></CardUser>
          </ScrollView>
        </ViewContainer>
      </ViewStory>
      <SiderNav />
    </View>
  );
}
