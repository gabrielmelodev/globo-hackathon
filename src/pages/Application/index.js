import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Animated, Image } from "react-native";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
import Feed from "../../pages/Feed";
import Posts from "../../db/Posts";
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
  ImageStory,
} from "../../Layout/Application/element";
import { getUser } from "../../storage";

export default function Application({ navigation }) {
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
      <ViewStory>
        <ViewContainer>
          <ScrollView
            horizontal
            scrollEventThrottle={20}
            showsHorizontalScrollIndicator={false}
          >
            <CardUser>
              <ImageStory
                source={require("../../../assets/feed-7.jpg")}
                resizeMode="contain"
              />
              <CardName>
                <TextProfile>Seu Story</TextProfile>
              </CardName>
            </CardUser>
            {Posts.map(({ filename, username }) => (
              <CardUser key={filename}>
                <ImageStory
                  source={{
                    uri: `https://raw.githubusercontent.com/RenanTKN/globo-app/master/src/images/${filename}`,
                  }}
                  resizeMode="contain"
                />
                <CardNameUser>
                  <TextProfile>Seu Story</TextProfile>
                </CardNameUser>
              </CardUser>
            ))}
            <CardUser>
              <CardNameUser>
                <TextProfile>Seu Story</TextProfile>
              </CardNameUser>
            </CardUser>
            <CardUser>
              <CardNameUser>
                <TextProfile>Seu Story</TextProfile>
              </CardNameUser>
            </CardUser>
          </ScrollView>
        </ViewContainer>
      </ViewStory>
      <Feed />
      <SiderNav />
    </View>
  );
}
