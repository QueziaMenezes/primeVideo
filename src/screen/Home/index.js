import { StyleSheet, text, View } from "react-native";
import icon from "../../../assets/icon.png";
import { Container } from "../../components/Body/style";
import { ImageLogo } from "./style.js";
export const Home = () => {
    return (
        <Container>
                <ImageLogo source={icon}/>
        </Container>
    );
};