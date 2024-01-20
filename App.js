import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './Backend/firebaseConfig';
import LoginScreen from './Screens/Login/Login';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {
  // const getSomething = async() => {
  //   console.log("the fuck")
  //   const userCollection = collection(db, "users");
  //   console.log("umm")
  //   try{
  //     console.log("First")
  //     let data = await getDocs(userCollection);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data()
  //     }))
  //     console.log(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // getSomething();

  // console.log("hello");
  // console.log("anything");

  return (
    <LoginScreen></LoginScreen>
    // <View style={styles.container}>
    //   <Text>Open !</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
