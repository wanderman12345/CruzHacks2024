import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Account</Text>
      <Text style={styles.titleSlug}>Slug</Text>
      <Text style={styles.titleCare}>Care</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        <View style={styles.socialButton}>
          {/* Add Google Icon */}
        </View>
        <View style={styles.socialButton}>
          {/* Add Facebook Icon */}
        </View>
        <View style={styles.socialButton}>
          {/* Add Apple Icon */}
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={styles.signUpWithText}>Or sign up with</Text>
      <View style={styles.divider} />

      <Text style={styles.notRegisteredText}>Not register yet ?</Text>
      <TouchableOpacity>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      {/* Replace with your actual image */}
      <Image
        style={styles.imageStyle}
        source={{ uri: 'https://via.placeholder.com/381x378' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  titleSlug: {
    color: '#000088',
    fontSize: 60,
    fontWeight: '500',
  },
  titleCare: {
    color: '#FFC600',
    fontSize: 60,
    fontWeight: '700',
  },
  input: {
    height: 48,
    width: '80%',
    marginVertical: 10,
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    borderRadius: 8,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#FFC600',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: 'black',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  socialButton: {
    width: 75,
    height: 48,
    backgroundColor: 'white',
    // Add shadow styling
    borderRadius: 8,
  },
  divider: {
    height: 0.6,
    backgroundColor: '#A39797',
    width: '80%',
    marginVertical: 10,
  },
  signUpWithText: {
    fontSize: 12,
    color: '#757171',
  },
  notRegisteredText: {
    color: '#636363',
    fontSize: 13,
  },
  createAccountText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0C1F22',
  },
  imageStyle: {
    width: 381,
    height: 378,
    position: 'absolute',
    top: '60%', // Adjust as needed
  },
  // Add additional styling as needed
});

export default LoginScreen;
