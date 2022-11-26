import icon from "../../../assets/icon.png";
import { ImageLogo, Mirror, Nora } from "./style.js";
import mirror from "../../../assets/mirror.png";
import noraUpLoad from "../../../assets/noraUpLoad.png";
import { View } from "react-native";

export const Header = () => {
    return (
        <View>
            <ImageLogo source={icon} />
            <Mirror source={mirror}/>
            <Nora source={noraUpLoad}/>
        </View>
    );
};