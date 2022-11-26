import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MyMovies } from "../screen/MyMovies/index.js";
import { AboutMe } from "../screen/AboutMe/index.js";
import { Home } from "../screen/Home/index.js";
import { Ionicons } from "@expo/vector-icons";
import { Oops } from "../screen/Oops/index.js";
import React from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShow:false,
          tabBarStyle:{
            backgroundColor: "#000",
            padding: 5,
          }
        }}
        tabBarOptions={{
          activeTintColor: "#FFF",
          inactiveTintColor: "#BEBEBE"
        }}
  
        >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
              tabBarIcon: () => (
                <Ionicons name="home-outline" size={25} color={"#BEBEBE"}/>
              ),
          }}
        />

        <Tab.Screen
          name="Pesquisar"
          component={AboutMe}
          options={{
              tabBarIcon: () => (
                <Ionicons name="home-outline" size={25} color={"#BEBEBE"}/>
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

export function StackRoutes() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Oops" component={Oops} />
        <Stack.Screen name="AboutMe" component={TabRoutes} />
        <Stack.Screen name="MyMovies" component={MyMovies} />
        <Stack.Screen name="Home" component={TabRoutes} />
      </Stack.Navigator>
    );
  }