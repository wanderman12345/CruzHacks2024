import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* You can add your navigation bar here */}
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Profile info</Text>
        <Text style={styles.subtitle}>Fill in the data for profile. It will take a couple of minutes. You only need a passport</Text>

        {/* Personal Data Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Name" />
          {/* <Text style={styles.label}>Second name</Text>
          <TextInput style={styles.input} placeholder="Second name" /> */}
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} placeholder="Gender" />
          <Text style={styles.label}>Age</Text>
          <TextInput style={styles.input} placeholder="Age" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1953E8', // Light blue background
    opacity: 0.8,
  },
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
    color: 'white',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white', // Gold border for inputs
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
});

export default ProfileInfoScreen;
