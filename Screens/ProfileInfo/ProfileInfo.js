import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { auth } from '../../Backend/firebaseConfig';
import { createUserDb, setUserInfo, getAllUserInfo} from '../../Backend/backend';
import { useState } from 'react';

const ProfileInfoScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const nav = useNavigation()
    const MoveNextScreen = () => {
        const uid = auth.currentUser;
        const data = {
            "Name": name, 
            "Gender": gender, 
            "Age": age
        }
        console.log("hello")
        setUserInfo(uid, data);
        console.log("map")
        console.log(getAllUserInfo());
        nav.navigate("QuestionScreen");
    }
    return (
        <View style={styles.container}>
        <View style={styles.circleYellow} />
        <View style={styles.circleBlue} />
        <View style={styles.header}>
        </View>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Profile info</Text>
            <Text style={styles.subtitle}>Fill in the data for profile. It will take a couple of minutes.</Text>

            {/* Personal Data Section */}
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>setName(text)}/>
            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input} placeholder="Gender" onChangeText={(text)=>setGender(text)}/>
            <Text style={styles.label}>Age</Text>
            <TextInput style={styles.input} placeholder="Age" onChangeText={(text) => setAge(text)}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={MoveNextScreen} >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <Image
                source={require('../../Images/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png')}
            />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1953E8', // Light blue background
//     opacity: 0.8,
//   },
  header: {
    // Style your header here
  },
  formContainer: {
    padding: 20,
    marginTop: 100,
    // other styles
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    // other styles
  },
  label: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue', // Gold border for inputs
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FFD700', // Gold background for button
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  circleYellow: {
    position: 'absolute',
    width: 1000, // Large enough to extend off screen
    height: 1000, // Large enough to extend off screen
    borderRadius: 500, // Half of the width/height to make it a circle
    backgroundColor: '#FFC600',
    top: -450, // Adjust these values to position the circle
    left: -250, // Adjust these values to position the circle
    opacity: 0.2,
  },
  circleBlue: {
    position: 'absolute',
    width: 800, // Slightly smaller than the yellow one
    height: 800, // Slightly smaller than the yellow one
    borderRadius: 400, // Half of the width/height to make it a circle
    backgroundColor: '#1953E8',
    top: -350, // Adjust these values to position the circle
    right: -400, // Adjust these values to position the circle
    opacity: 0.2,
  },
});

export default ProfileInfoScreen;
