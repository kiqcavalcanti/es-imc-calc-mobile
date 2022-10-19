import { Dimensions, StyleSheet, View } from "react-native";

import Form from "./Create.form";
import Subheader from "./Subheader.component";

export default function Page(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Subheader />
        <Form navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Dimensions.get("screen").height * 0.05,
  },
  mainContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
