import { ButtonCreate, ButtonLogin, ContainerLogin, DoLogin, EmailInput, FooterText, ForgotPass, Help, LoginText, Logo, NewAmazon, PassInput, PoliticText, TextCreate, TextEnd } from "./styles.js";
import icon from "../../../assets/icon.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
    const [user, setUser] = useState({
      email: " ",
      pass: " ",
    });
    const navigation = useNavigation();
  
    return (
      <ContainerLogin>
        <Logo source={icon} />
        <DoLogin>Fazer login</DoLogin>
        <EmailInput
          onChangeText={setUser}
          placeholder={"E-mail ou número de telefone"}
          style={{textAlign: "center", color: "#FFF", borderBottom: "1px solid #898989"}}>
        </EmailInput>
        <PassInput
          onChangeText={setUser}
          placeholder={"Senha Amazon"}
          style={{textAlign: "center", color: "#FFF", borderBottom: "1px solid #898989"}}>
        </PassInput>
        <ForgotPass onPress={()=>navigation.navigate("Oops")}>Esqueceu a senha?</ForgotPass>
        <ButtonLogin onPress={() => navigation.navigate("Home")}></ButtonLogin>
        <LoginText>Fazer login</LoginText>
        <PoliticText>Ao continuar, você concorda com as Condições de Uso e com a Política de Privacidade da Amazon</PoliticText>
        <NewAmazon>É novo na Amazon?</NewAmazon>
        <ButtonCreate onPress={() => navigation.navigate("Oops")}></ButtonCreate>
        <TextCreate>Criar sua conta da Amazon</TextCreate>
        <TextEnd>Condições de Uso         Política de Privacidade</TextEnd>
        <Help>Ajuda</Help>
        <FooterText>c 2021-2022 Amazon.com, Inc. ou suas afiliadas</FooterText>
      </ContainerLogin>
    );
};