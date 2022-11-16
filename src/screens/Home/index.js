import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { TouchableOpacity } from "react-native-web";
import logo from "../../../assets/logo.png";
import clariceTop from "../../../assets/clariceTop.png";
import PhilipKDicksElectricDreams from "../../../assets/PhilipKDicksElectricDreams.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
            </View>
           
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Esportes</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Image source={clariceTop}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={PhilipKDicksElectricDreams}/>
            </TouchableOpacity>

        </View>
    );
};
        

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#00020B",
            alighItems: "flex-start",
        },

        header: {
            width: "100%",
            paddingTop: 80,
            alignItems: "center",
            justifyContent: "center",

        },

        category: {
            width:  "100%",
            flexDirection: "row",
            alignItems: "center",

            justifyContent: "space-evenly",
            marginTop: 30,
            marginBottom: 15,
        },

        categoryText: {
            color: "#FFF",
            fontSize: 14,
            fontWeight: "700",
        }

    });