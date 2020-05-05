import React, { useState } from "react";
import { getUser } from "../../storage";
import {
  View,
  ViewForm,
  TextInput,
  Img,
  TextH1,
  Button,
  TextButton,
  ButtonLink,
  SmallButton,
  SpanButton,
  SmallLink,
  SpartentDivide,
  SpanOr,
} from "../../Layout/Login/element";
import ImagemFavicon from "../../../assets/minhacontaglobo.jpg";
import { Platform } from "react-native";

export default function Login({ navigation }) {
  const [emailLogin, setEmailLogin] = useState("renanwds@gmail.com");
  const [passwordLogin, setPasswordLogin] = useState("123");

  const navigate = (page) => navigation.navigate(page);

  const handleLogin = () => {
    if (emailLogin && passwordLogin) {
      (async () => {
        const { email, password } = await getUser();
        if (email === emailLogin && password === passwordLogin) {
          navigate("Application");
        } else {
          alert("Email ou senha incorretos");
        }
      })();
    } else {
      alert("Preencha os campos!");
    }
  };
  return (
    <View enabled={Platform.OS === "ios"} behavior="padding">
      <Img source={ImagemFavicon} />
      <ViewForm>
        <TextH1>Uma só conta para todos os produtos Globo</TextH1>

        <TextInput
          placeholderTextColor="#999"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Digite seu email"
          value={emailLogin}
          onChangeText={(e) => setEmailLogin(e)}
        />

        <TextInput
          placeholderTextColor="#999"
          secureTextEntry={true}
          maxLength={8}
          autoCapitalize="none"
          placeholder="Digite sua senha"
          value={passwordLogin}
          onChangeText={(e) => setPasswordLogin(e)}
        />
        <ButtonLink>Esqueceu sua senha?</ButtonLink>
        <Button>
          <TextButton onPress={handleLogin}>Entrar</TextButton>
        </Button>
        <SmallButton>
          <SpanButton>
            Não tem conta?{" "}
            <SmallLink onPress={() => navigate("Register")}>
              Cadastre-se
            </SmallLink>
          </SpanButton>
        </SmallButton>

        <SpartentDivide>
          <SpanOr>ou entre com</SpanOr>
        </SpartentDivide>
      </ViewForm>
    </View>
  );
}