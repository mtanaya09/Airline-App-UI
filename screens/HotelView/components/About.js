import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { gs, colors } from "../../../styles";

const hotel = {
  name: "Airline Sample",
  price: "₱6,920",
  location: "Hong Kong",
  about:
    "Ranked based on price and conveniencePrices include required taxes + fees for 1 adult. Optional charges and bag fees may apply.",
};

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>

      <View style={gs.divider} />

      <Text style={gs.sectionTitle}>About {hotel.name}</Text>

      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBG,
    marginTop: -50,
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
});
