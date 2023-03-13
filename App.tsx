import "react-native-gesture-handler";
import { LogBox, StyleSheet } from "react-native";
import { AuthProvder } from "./src/providers/AuthProvider";
import Navigation from "./src/navigation/Navigation";
import { DataProvider } from "./src/providers/DataProvider";
import StoryContainer from "./src/components/Stories/StoryContainer";

export default function App() {
  return (
    <AuthProvder>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvder>
  );
}

LogBox.ignoreAllLogs();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
