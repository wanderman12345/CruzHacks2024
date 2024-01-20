import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleYellow} />
      <View style={styles.circleBlue} />
        <Text style={styles.header}>Register Account</Text>
        <View style={styles.titleContainer}>
            <Text style={styles.titleSlug}>Slug</Text>
            <Text style={styles.titleCare}>Care</Text>
        </View>

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
        <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        secureTextEntry
        />

        <TouchableOpacity style={styles.createAccount}>
            <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
            <Text style={styles.accountHaveText}>Already have an account? </Text>
            <TouchableOpacity>
                <Text style={styles.loginHereText}>Login Here</Text>
            </TouchableOpacity>
        </View>

        <Image
            style={styles.imageStyle}
            source={require('../../Images/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 260,
    height: 87,
    flexShrink: 0,
    marginBottom: 30,
    justifyContent: 'center',
  },
  titleSlug: {
    height: 70,
    right: 10,
    color: '#000088',
    fontSize: 60,
    fontWeight: '500',
  },
  titleCare: {
    height: 70,
    right: 10,
    color: '#FFC600',
    fontSize: 60,
    fontWeight: '700',
  },
  input: {
    height: 48,
    width: 328,
    marginVertical: 10,
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    fontWeight: '400',
    borderRadius: 8,
    padding: 10,
    zIndex: 2,
  },
  createAccount: {
    backgroundColor: '#FFC600',
    borderRadius: 8,
    padding: 10,
    width: 328,
    height: 48,
    alignItems: 'center',
    marginVertical: 10,
    zIndex: 2,
  },
  createAccountText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 217,
    height: 16,
    marginVertical: 50,
    zIndex: 2,
  },
  accountHaveText: {
    color: '#636363',
    fontSize: 13,
    fontWeight: '400',
  },
  loginHereText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0C1F22',
  },
  imageStyle: {
    width: 381,
    height: 378,
    position: 'absolute',
    top: '60%',
    opacity: 0.1,
    zIndex: 1,
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
    zIndex: 1,
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
    zIndex: 1,
  },
});

export default RegisterScreen;