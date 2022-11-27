import { Image, style, TouchableOpacity } from "react-native";

export const Movies = (props) => {
    return (
        <TouchableOpacity>
            <Image style={style.img} source={props.movieURL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,
    },
});