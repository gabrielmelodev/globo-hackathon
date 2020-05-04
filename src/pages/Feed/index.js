import React from "react";

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

//Photo at Icon
import ImagemFavicon from "../../../assets/profile.png";
import MarinaRuyBarbosa from "../../../assets/marina-profile.jpg";
import Bruna from "../../../assets/Feed_2.jpg";
import Like from "../../../assets/gostei-positivo.png";
//import desLike from "../../../assets/like-ok.jpg";
import { ScrollView } from "react-native";
import Posts from "../../db/Posts";

export default function Login({ navigation }) {
  const navigate = (page) => navigation.navigate(page);
  return (
    <FeedWrrapper>
      <ScrollView
        scrollEventThrottle={15}
        showsVerticalScrollIndicator={false}
        vertical
      >
        {Posts.map(({ filename, text, username }) => (
          <CardFeed onPress={() => navigate("Login")}>
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
                  //
                  //  Trocar para:
                  //  source={require(`../../../assets/${filename}`)}
                  //
                    source={require(`../../../assets/feed-1.jpg`)}
                    accessibilityViewIsModal={true}
                    resizeMode="cover"
                  />
                </CardViewImg>
              </CardName>
              <View>
                <BarraAction>
                  <ProfileAction>
                    <ImgProfileAction source={MarinaRuyBarbosa} />
                    <ImgProfileAction source={MarinaRuyBarbosa} />
                    <PhotoLike source={Like} />
                    <ActionPhoto>20k</ActionPhoto>

                    <TextViewComment>{text}</TextViewComment>
                  </ProfileAction>
                </BarraAction>
              </View>
            </Card>
          </CardFeed>
        ))}
      </ScrollView>
    </FeedWrrapper>
  );
}
