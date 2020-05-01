import { AsyncStorage } from "react-native";

export const setUser = ({ name, email, password }) =>
  AsyncStorage.setItem("user", JSON.stringify({ name, email, password }));

export const getUser = async () =>
  JSON.parse(await AsyncStorage.getItem("user"));
