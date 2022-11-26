import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./src/routes/routes";
import { Login } from "./src/screen/Login";
import { Oops } from "./src/screen/Oops";
import { Home } from "./src/screen/Home";

export default function App() {
  return ( 
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
}
