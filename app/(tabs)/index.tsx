import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Provider as PaperProvider } from "react-native-paper"; // Importez le Provider
import DataInformation from "@/components/DataInformation";
import ModalTest from "@/components/ModalTest";
// Titre Page Une
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contrôle de la CNIL</Text>
      <DataInformation />
      {/* Tableau Information components */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
