import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./src/routes/routes";
import { Login } from "./src/screen/Login";

export default function App() {
  return ( 
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}
