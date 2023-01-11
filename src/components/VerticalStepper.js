import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Step extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <MapProgress data={[...data]} />
      </View>
    );
  }
}

const MapProgress = (props) => {
  if (!props.data || props.data.lenght === 0) return null;

  const firstItem = props.data.shift();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.verticalLine}></View>
      <View style={styles.verticalWrap}>
        <View style={styles.itemWrap}>
          <View style={styles.firstPoint}></View>
          <View style={{ marginLeft: 5, flex: 1 }}>
            <Text>{firstItem.title}</Text>
          </View>
        </View>

        {props.data.map((item) => (
          <View style={styles.itemWrap}>
            <View style={styles.pointWrap}>
              <Text
                style={[
                  styles.markerText,
                  item.isCurrent ? styles.currentMarker : null,
                ]}
              >
                {item.letter}
              </Text>
            </View>
            <View style={{ marginLeft: 5, flex: 1 }}>
              <Text style={item.isCurrent ? styles.currentMarker : null}>
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    backgroundColor: "black",
    width: 2,
    height: "95%",
    position: "absolute",
    marginLeft: 35,
    marginTop: 20,
  },
  verticalWrap: {
    justifyContent: "space-between",
    height: "100%",
  },
  itemWrap: {
    width: 200,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pointWrap: {
    backgroundColor: "black",
    height: 20,
    width: 20,
    marginLeft: 5,
    alignItems: "center",
  },
  firstPoint: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 10,
    width: 10,
    marginLeft: 10,
  },
  markerText: { color: "white" },
  currentMarker: { color: "green" },
});

const data = [
  { title: "Stop 1", letter: "A", isCurrent: false },
  { title: "Stop 2", letter: "B", isCurrent: false },
  { title: "Stop 3", letter: "C", isCurrent: false },
  { title: "Stop 4", letter: "D", isCurrent: false },
  { title: "Stop 5", letter: "E", isCurrent: true },
];
