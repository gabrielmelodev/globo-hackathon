import React from "react";
import { withNavigation } from "react-navigation";
//Styles
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

import { ScrollView, Image } from "react-native";
import Posts from "../../db/Posts";
 
function Story({ navigation }) {
  const navigate = (page) => navigation.navigate(page);
  return (

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
              <TextProfile>
              {username.length > 15
                  ? username.substr(0, 12) + "..."
                  : username}
              </TextProfile>
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
 
  );
}

export default  withNavigation(Story);