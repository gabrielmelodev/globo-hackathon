import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, Animated, Image, Text } from "react-native";
import Imagem from "../../../assets/profile.png";
import SiderNav from "../../components/Sidernav";
import Feed from "../../pages/Feed";

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
  ProdutoCard,
  ProdutoPicture,
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
} from "../../Layout/Loja/element";
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
        <TextName>
          Troque suas estalecas por produtos ou experiências Globo
        </TextName>
        <ProdutoCardContainer>
          <ProdutoCard>
            <ProdutoPicture
              source={require("../../../assets/capa-loja02.png")}
              resizeMode="contain"
            />
            <View>
              <Text>Live com Deborah Secco</Text>
            </View>
          </ProdutoCard>
        </ProdutoCardContainer>
      </View>
      <SiderNav />
    </View>
  );
}
