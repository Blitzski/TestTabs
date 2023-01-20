import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  Alert,
  TextInput,
  View,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PopupScreen(
  { name }: { name: string },
  { service }: { service: string }
) {
  //export default function PopupScreen() {
  const [data, setData] = useState([] as any[]);
  const [selectedId, setSelectedId] = useState<string>();
  const [selectedName, setSelectedName] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedService, setSelectedService] = useState<string>();
  const [selectedSeasons, setSelectedSeasons] = useState<string>();
  const [selectedRated, setSelectedRated] = useState<string>();
  const [selectedImdb, setSelectedImdb] = useState<string>();
  const [selectedtvShowUrl, setSelectedtvShowUrl] = useState<string>();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            {/* Here is the View for the Modal */}

            <Image
              style={styles.modalLogo}
              source={{
                uri: "http://www.nolansapps.com/images/tvshows/1/1.jpg",
                //"http://www.nolansapps.com/images/tvshows/" +selectedId+"/"+selectedId+".jpg",
              }}
            />
            <Text style={styles.modalText}>{name}</Text>
            <Text style={styles.modalText}>Seasons: {service}</Text>
            <Text style={styles.modalText}>Rated: {selectedRated}</Text>
            <Text style={styles.modalText}>IMDb: {selectedImdb}</Text>
            <Text style={styles.serviceText}>Available On </Text>

            <Pressable
              style={styles.servicePressable}
              onPress={() => {
                console.log(selectedtvShowUrl);
                Linking.openURL("" + selectedtvShowUrl);
              }}
            >
              <Image
                style={styles.serviceLogo}
                source={{
                  uri: "http://www.nolansapps.com/images/services/Netflix.png",
                  // "http://www.nolansapps.com/images/services/" +selectedService+".png",
                }}
              />
            </Pressable>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: 240,
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: windowWidth - 10,
  },

  modalLogo: {
    width: windowWidth - 10,
    height: 128,

    borderRadius: 10,
  },

  serviceLogo: {
    width: 65,
    height: 65,
    top: -75,
    left: 230,
  },

  searchView: {},
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    top: 8,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
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
  item: {
    marginVertical: 8,
  },
  tinyLogo: {
    width: windowWidth,
    height: 128,

    marginVertical: 2,
  },
  textInputStyle: {
    width: windowWidth - 10,
    left: 25,
    margin: 5,
    top: -30,
    height: 30,
    backgroundColor: "#F0F0F6",
    borderRadius: 8,
  },

  listStyle: {
    width: windowWidth,
    height: 128,
    top: -25,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },

  servicePressable: {
    width: 65,
    height: 65,
  },

  serviceText: {
    top: -75,
    marginBottom: 2,
    textAlign: "left",
    left: 220,
    fontSize: 15,
    color: "black",
  },
  modalText: {
    top: 5,
    marginBottom: 2,
    textAlign: "left",
    fontSize: 15,
    left: 15,
    color: "black",
  },

  service: {
    fontSize: 10,
  },
  seasons: {
    fontSize: 10,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  blurredView: {
    // For me android blur did not work until applying a background color:
    backgroundColor: "white",
  },
});
