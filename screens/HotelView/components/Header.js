import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { gs } from "../../../styles";

export default function Header() {
  return (
    <View style={styles.components}>
      <Image
        source={require("../../../assets/travelPic.jpg")}
        style={{ width: "100%", height: 290 }}
      />
      <View style={styles.topButtons}>
        <AntDesign name="close" size={25} color="#fff" />

        <View style={gs.rowCenter}>
          <AntDesign name="save" size={24} style={styles.topButtonRight} />
          <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
          <Entypo
            name="dots-three-vertical"
            size={18}
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  components: {},
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 30,
    left: 32,
    right: 32,
  },
  topButtonRight: {
    marginLeft: 12,
    color: "#fff",
  },
});
