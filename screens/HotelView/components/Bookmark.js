import { StyleSheet, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Bookmark() {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    height: 56,
    width: 56,
    alignSelf: "flex-end",
    marginRight: 25,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 50,
    zIndex: 10,
  },
});
