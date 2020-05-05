import styled from "styled-components/native";

export const View = styled.View`
 width: 90%;
 
 display: flex;
 align-items: flex-end;
 position: absolute;
flex: 1 1;
 padding: 14px;
 height: 100%;
`;

export const TextTitle = styled.Text`
  font-size: 28px;
  margin-left: 50px;
`;


export const Picture = styled.View`
  padding: 10px;
  margin-left: 30px;
  margin-top: 50px;
`;

export const StoreHeader = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  align-items: center;
  justify-content: space-around;
  margin: 15px auto;
  margin-top: 10px;
`;

export const Circle = styled.Image`
  position: absolute;
  width: 120px;
  height: 120px;
  margin: -8px;
`;

export const TextWhite = styled.Text`
  color: #fff;
`;

export const BigTextWhite = styled.Text`
  color: #fff;
  font-size: 30px;
  line-height: 45px;
`;

export const Saldo = styled.View`
  display: flex;
  flex-direction: row;
  color: #fff;
  margin: 25px auto;
  max-width: 350px;
`;

export const SaldoKey = styled.View`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #707070;
  width: 50%;
  height: 75px;
  font-size: 18px;
  margin-left: 25px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
`;

export const SaldoValue = styled.View`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #fff;
  max-width: 350px;
  background: #9a3296;
  width: 50%;
  height: 75px;  
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
`;

export const Estaleca = styled.Image`
  width: 45px;
`;

export const TextNameH1 = styled.Text`
  font-size: 23px;
  color: #000;
  padding: 10px;
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
`;

export const ProdutoCardContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const ProdutoCard = styled.View`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: blue;
  flex-wrap: wrap;
`;

export const ProdutoPicture = styled.Image`
  width: 150px;
`;

export const StatuscNav = styled.View`
  width: 100%;
  background: #fff;
  height: 70px;
  position: absolute;
  box-shadow: 20px 15px 15px rgba(0, 0, 0, 0.25);
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const TextName = styled.Text`
  font-size: 23px;
  color: #000;
  padding: 10px;
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
`;

export const ViewContent = styled.View`
  padding: 15px;
  padding-left: 4px;
  margin-left: -15%;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  text-align: center;
`;

export const Profile = styled.View`
  width: 20%;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 105%;
  margin-top: -56px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #f6f6f6;
`;

export const Img = styled.Image`
  width: 50px;
  padding: 5px;
  margin-left: 15px;
  align-items: center;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const ViewCard = styled.View`
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin-right: 15px;
  margin-left: -5px;
`;

export const ViewWrapper = styled.View`
  width: 20%;
  height: 100%;
  position: relative;
  background: #fff;
`;

export const ButtonImg = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin-right: 15px;
  margin-left: -5px;
`;

export const Notification = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

export const PanalAdd = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
`;
export const ViewStory = styled.View`
  width: 100%;
  position: absolute;
  height: 22%;
  margin-top: 17%;
`;

export const TextProfile = styled.Text`
  font-size: 14px;
  color: #000;
  color: #fff;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 24%;
  margin-right: 24%;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const CardUser = styled.View`
  width: 120px;
  background: #fff;
  margin: 9px;
  height: 150px;
  border-radius: 10px;
`;
export const CardName = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 84%;
  align-items: flex-end;
  background: #199ed8;
`;

export const CardNameUser = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 84%;
  align-items: flex-end;
  background: #000;
`;

export const ViewContainer = styled.View`
  padding-left: 10px;
  flex-direction: row;
  height: 100px;
  width: 100%;
  flex: 3;
  padding-top: 10px;
  margin-left: 19%;
`;