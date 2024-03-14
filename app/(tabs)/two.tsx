import { StyleSheet } from "react-native";
import React from "react";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { TextInput } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function TabTwoScreen() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Nom de l'organisme</Text>
      <TextInput
        label="Catégorie"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Nom de l'orgarnisme"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Modalité"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Nom de l'orgarnisme"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Nom de l'orgarnisme"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
