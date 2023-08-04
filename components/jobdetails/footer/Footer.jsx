import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  // TODO: "Add onPress to likeBtn";
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          style={styles.likeBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
