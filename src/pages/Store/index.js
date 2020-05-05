import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Animated, Image, Text } from "react-native";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
//import Feed from "../../pages/Feed";

import {
  TextTitle,
  StoreHeader,
  Picture,
  Circle,
  TextWhite,
  BigTextWhite,
  Saldo,
  SaldoKey,
  SaldoValue,
  Estaleca,
  ProdutoCardContainer,
  TextEstaleca,
  ProdutoCard,
  ProdutoPicture,
  StatuscNav,
  View,
  Title,
  TextNameH1,
  TextName,
  ViewContent,
  ViewStory,
  ViewContainer,
  CardUser,
  CardName,
  CardNameUser,
  TextProfile,
  NewProfile,
} from "../../Layout/Store/element";
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
    <>
      <View>
        <StatusBar />
        <StatuscNav>
          <ViewContent>
            <Title>
              Ola, <TextName>{name}</TextName>
            </Title>
          </ViewContent>
        </StatuscNav>

        <View>
          <StoreHeader>
            <Picture>
              <Circle source={require("../../../assets/circle.png")} />
              <Image source={require("../../../assets/avatar.png")} />
            </Picture>
            <TextName>
              Oi, {name}, você é{"\n"}
              <TextTitle>Globo Gold</TextTitle>
            </TextName>
          </StoreHeader>
          <Saldo>
            <SaldoKey>
              <TextWhite>Seu saldo de estalecas é de</TextWhite>
            </SaldoKey>
            <SaldoValue>
              <BigTextWhite>
                {Math.floor(Math.random() * 10000) * 10}
              </BigTextWhite>
              <Estaleca
                source={require("../../../assets/estaleca.png")}
                resizeMode="contain"
              />
            </SaldoValue>
          </Saldo>
          <TextEstaleca>
            Troque suas estalecas por produtos ou experiências Globo
          </TextEstaleca>
          <ProdutoCardContainer>
            <Image source={require("../../../assets/foto-loja-1.png")} />
            <Image source={require("../../../assets/foto-loja-2.png")} />
            <Image source={require("../../../assets/foto-loja-3.png")} />
            <Image source={require("../../../assets/foto-loja-4.png")} />
          </ProdutoCardContainer>
        </View>
      </View>
      <SiderNav />
    </>
  );
}
