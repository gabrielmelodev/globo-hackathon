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

export default function Login({ navigation }) {

  const navigate = (page) => navigation.navigate(page);
  return (
    <FeedWrrapper>
      <ScrollView
        scrollEventThrottle={15}
        showsVerticalScrollIndicator={false}
        vertical>
        <CardFeed onPress={() => navigate("Login")}>
          <Card>
            <CardName>
              <ProfileLink>

                <ImgProfile source={ImagemFavicon}  />
                <CardProfileName>
                  <TextProfile>Bruna Marquezine</TextProfile>
                </CardProfileName>

              </ProfileLink>

              <CardViewImg>

                <CardImg source={Bruna} accessibilityViewIsModal={true} resizeMode="cover" />

              </CardViewImg>

            </CardName>
            <View>
              <BarraAction>
                <ProfileAction>

                  <ImgProfileAction source={MarinaRuyBarbosa} />
                  <ImgProfileAction source={MarinaRuyBarbosa} />
                  <PhotoLike source={Like} />
                  <ActionPhoto>20k</ActionPhoto>
                
                
                <TextViewComment>
              
               <NomeofUser>Gabriel Melo</NomeofUser> is simply dummy text of the printing 
                typesetting industry.Lorem Ipsum has been the industry
              
                </TextViewComment>
         

                </ProfileAction>
              </BarraAction>

            </View>
          </Card>











        </CardFeed>




        <CardFeed>
          <Card>
            <CardName>
              <ProfileLink>

                <ImgProfile source={ImagemFavicon} />
                <CardProfileName>
                  <TextProfile>Marina Ruy Barbosa</TextProfile>
                </CardProfileName>

              </ProfileLink>

              <CardViewImg>

                <CardImg source={MarinaRuyBarbosa} accessibilityViewIsModal={true} resizeMode="cover" />

              </CardViewImg>

            </CardName>
            <View>
              <BarraAction>
                <ProfileAction>

                  <ImgProfileAction source={MarinaRuyBarbosa} />
                  <ImgProfileAction source={MarinaRuyBarbosa} />
                  <PhotoLike source={Like} />
                  <ActionPhoto>20k</ActionPhoto>
                
                
                <TextViewComment>
              
               <NomeofUser>Gabriel Melo</NomeofUser> is simply dummy text of the printing 
                typesetting industry.Lorem Ipsum has been the industry
              
                </TextViewComment>
         

                </ProfileAction>
              </BarraAction>

            </View>
          </Card>



        </CardFeed>


        <CardFeed>
          <Card>
            <CardName>
              <ProfileLink>

                <ImgProfile source={ImagemFavicon} />
                <CardProfileName>
                  <TextProfile>Gabriel Melo</TextProfile>
                </CardProfileName>

              </ProfileLink>

              <CardViewImg>

                <CardImg source={Bruna} accessibilityViewIsModal={true} resizeMode="cover" />

              </CardViewImg>

            </CardName>
            <View>
              <NameUser>Gabriel Melo</NameUser>
              <BarraAction></BarraAction>
            </View>
          </Card>



        </CardFeed>


      </ScrollView>



    </FeedWrrapper>

  );
}