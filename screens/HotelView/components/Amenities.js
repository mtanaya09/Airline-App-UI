import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Feather,
  Ionicons,
  FontAwesome5,
  Entypo,
  AntDesign,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Amenities() {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Amenities</Text>

      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="wifi" size={24} color={colors.lightHL} />
          </View>
          <Text style={styles.amenityName}>WI-FI</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="md-airplane" size={24} color={colors.lightHL} />
          </View>
          <Text style={styles.amenityName}>Philippine Airports</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <MaterialCommunityIcons
              name="bag-suitcase"
              size={28}
              color={colors.lightHL}
            />
          </View>
          <Text style={styles.amenityName}>Luggage Area</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <AntDesign name="rest" size={24} color={colors.lightHL} />
          </View>
          <Text style={styles.amenityName}>Waiting Areas</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="ios-car" size={24} color={colors.lightHL} />
          </View>
          <Text style={styles.amenityName}>Parking Spot</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Foundation
              name="clipboard-notes"
              size={26}
              color={colors.lightHL}
            />
          </View>
          <Text style={styles.amenityName}>Schedules</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 5,
    ...gs.rowBetween,
    flexWrap: "wrap",
  },
  amenityContainer: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: "#444",
  },
  amenityName: {
    color: colors.lightHL,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});
