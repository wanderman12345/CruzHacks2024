import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Login/Login';

export default function App() {
  return (
    <LoginScreen></LoginScreen>
    // <View style={styles.container}>
    //   <Text>Open !</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
