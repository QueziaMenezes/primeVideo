import { All, Blue, Movie, Original, Philip, Series, Sport, Watch } from "./style.js";
import { Container } from "../../components/Body/style";
import { PhilipKDicks } from "../../../assets/PhilipKDicks.png";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/index.js";
import { TouchableOpacity } from "react-native";
export const Home = () => {
    const navigation = useNavigation();

    const [movie, setMovie] = useState([]);

    return (
        <Container>
            <Header/>
                    <TouchableOpacity >
                        <All>Todos</All>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Movie>Filmes</Movie>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Series>Séries</Series>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Sport>Esportes</Sport>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Watch>Continue assistindo</Watch>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Blue>Prime</Blue>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Original>- Amazon Originais e exclusivos</Original>
                    </TouchableOpacity>   
        </Container>
    );
};