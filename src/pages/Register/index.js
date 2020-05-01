import React, { useState } from "react";
import { setUser } from "../../storage";
import {
  View,
  ViewForm,
  TextInput,
  Img,
  TextH1,
  Button,
  TextButton,
  SmallButton,
  SpanButton,
  SmallLink,
} from "../../Layout/Login/element";
import ImagemFavicon from "../../../assets/minhacontaglobo.jpg";
import { Platform } from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = (page) => navigation.navigate(page);

  const handleRegister = () => {
    if (name && email && password) {
      setUser({ name, email, password });
      clearForm();
      alert("Cadastro realizado com sucesso");
      navigate("Login");
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View enabled={Platform.OS === "ios"} behavior="padding">
      <Img source={ImagemFavicon} />
      <ViewForm>
        <TextH1>CADASTRO</TextH1>

        <TextInput
          placeholderTextColor="#999"
          autoCorrect={false}
          returnKeyType="next"
          autoCapitalize="words"
          placeholder="Nome"
          value={name}
          onChangeText={(e) => setName(e)}
        />

        <TextInput
          placeholderTextColor="#999"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />

        <TextInput
          placeholderTextColor="#999"
          secureTextEntry={true}
          maxLength={8}
          placeholder="Senha"
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <Button>
          <TextButton onPress={() => handleRegister(name)}>
            Cadastrar
          </TextButton>
        </Button>
        <SmallButton>
          <SpanButton>
            Já tem conta?{" "}
            <SmallLink onPress={() => navigate("Login")}>Faça login</SmallLink>
          </SpanButton>
        </SmallButton>
      </ViewForm>
    </View>
  );
}
