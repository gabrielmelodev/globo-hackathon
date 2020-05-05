import React from "react";

import { withNavigation } from "react-navigation";
//Styles
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
  View,
  BarraAction,
  ProfileAction,
  ImgProfileAction,
  ActionPhoto,
  PhotoLike,
  Comment,
  NomeofUser,
  TextViewComment,
} from "../../components/Feed/element";

//Photo at Icons  
import ImagemFavicon from "../../../assets/avatar.png";
import MarinaRuyBarbosa from "../../../assets/marina-profile.jpg";
import Bruna from "../../../assets/marina-profile.jpg";
import Like from "../../../assets/gostei-positivo.png";
//import desLike from "../../../assets/like-ok.jpg";
import { ScrollView, Image } from "react-native";
import Posts from "../../db/Posts";
 
function Feed({ navigation }) {
  const navigate = (page) => navigation.navigate(page);
  return (
    <FeedWrrapper>
      <ScrollView
        scrollEventThrottle={15}
        showsVerticalScrollIndicator={false}
        vertical
      >
        {Posts.map(({ filename, text, username }) => {
          return (
            <CardFeed key={filename} onPress={() => navigate("Login")}>
              <Card>
                <CardName>
                  <ProfileLink>
                    <ImgProfile source={ImagemFavicon} />
                    <CardProfileName>
                      <TextProfile>{username}</TextProfile>
                    </CardProfileName>
                  </ProfileLink>

                  <CardViewImg>
                    <CardImg
                      source={{
                        uri: `https://raw.githubusercontent.com/RenanTKN/globo-app/master/src/images/${filename}`,
                      }}
                      resizeMode="contain"
                    />
                  </CardViewImg>
                </CardName>
                <View>
                  <BarraAction>
                    <ProfileAction>
                      <ImgProfileAction source={MarinaRuyBarbosa} />
                      <ImgProfileAction source={Bruna} />
                      <PhotoLike source={Like} />
                      <ActionPhoto>20k</ActionPhoto>

                      <TextViewComment>{text}</TextViewComment>
                    </ProfileAction>
                  </BarraAction>
                </View>
              </Card>
            </CardFeed>
          );
        })}
      </ScrollView>
    </FeedWrrapper>
  );
}

export default  withNavigation(Feed);
