import React from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import Navigation from "./src/navigation";

const theme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        color: "white",
      },
    },
  },
  colors: {
    main: "#28374c",
    panel: "#3e4b5e",
    darkPanel: "#525d6e",
    grayBg: "#f6f5fc",
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </>
  );
}
