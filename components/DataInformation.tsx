import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  DataTable,
  Provider as PaperProvider,
  Modal,
  Portal,
  Text,
  Button,
} from "react-native-paper";
import data from "../components/data.json"; // données de la CNIL -> data.json
import SearchInput from "./SearchInput";

export default function DataInformation() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 30, 50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider>
      <ScrollView>
        <DataTable>
          <SearchInput></SearchInput>
          <DataTable.Header>
            <DataTable.Title style={{}}>Catégorie</DataTable.Title>
            <DataTable.Title>Organisme</DataTable.Title>
            <DataTable.Title>Modalité</DataTable.Title>
            <DataTable.Title>Département</DataTable.Title>
            <DataTable.Title>Ville</DataTable.Title>
            <DataTable.Title>Pays</DataTable.Title>
            <DataTable.Title>Activité</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={showModal}>
              <DataTable.Cell>{item.Catégorie}</DataTable.Cell>
              <DataTable.Cell>{item.Organisme}</DataTable.Cell>
              <DataTable.Cell>{item.Modalité}</DataTable.Cell>
              <DataTable.Cell>{item.Département}</DataTable.Cell>
              <DataTable.Cell>{item.Ville}</DataTable.Cell>
              <DataTable.Cell>{item.Pays}</DataTable.Cell>
              <DataTable.Cell>{item.Activité}</DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Ligne par page :"}
          />
        </DataTable>
      </ScrollView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    color: "#000",
  },
});
