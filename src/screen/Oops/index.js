import { Container } from "../../components/Body/style.js";
import { Ionicons } from "@expo/vector-icons";
import splash from "../../../assets/splash.png";
import { SplashPrime } from "./styles.js";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Oops = () => {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
      };

    return (
    <Container>
        <TouchableOpacity onPress={goBack}>
        <Ionicons name={"chevron-back-circle-outline"} color={"#fff"} size={30}/>
        </TouchableOpacity>
        <SplashPrime source={splash} />
    </Container>
    );
}