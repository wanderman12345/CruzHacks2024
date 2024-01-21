import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { googleProvider, facebookProvider,auth } from '../../Backend/firebaseConfig';


const LoginScreen = ({navigation}) => {
  const nav = useNavigation();
  const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function changeUserName(e){
        setUserName(e.target.value);
    }
    function changePassWord(e) {
        setPassword(e.target.value);
    }
    function respondBack(){
        if(userName.length === 0){
            setErrorMsg("Need to set UserName to more than 0 characters");
        }else if(password.length === 0){
            setErrorMsg("Need to set Password to more than 0 characters");
        }else{
            console.log(userName, password);
            signInWithEmailAndPassword(auth,userName,password)
            .then((userCredential) => {
                setIsSignedIn(true)
                navigate("../Introhome");

            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode === 'auth/user-not-found'){
                    setErrorMsg("Email is not found");
                }else if(errorCode === 'auth/wrong-password'){
                    setErrorMsg("Password is Incorrect")
                }
            });
        }
    }
    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err){
            console.error(err);
        }
    }
    const signInWithFacebook = async() => {
        try {
            await signInWithPopup(auth, facebookProvider);
        } catch (err){
            console.error(err);
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.circleYellow} />
      <View style={styles.circleBlue} />

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Login Account</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleSlug}>Slug</Text>
        <Text style={styles.titleCare}>Care</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChange={changeUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChange={changePassWord}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={respondBack}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Text style={styles.signUpWithText}>Or sign up with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialButtonsContainer} onPress={signInWithGoogle}>
        <Image
            style={styles.googleIcon}
            source={require('../../Images/GoogleIcon.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonsContainer2} onPress={signInWithFacebook}>
        <Image
            style={styles.googleIcon}
            source={require('../../Images/Facebook.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonsContainer3} >
        <Image
            style={styles.googleIcon}
            source={require('../../Images/Linkedin.png')}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    
      <Text style={styles.notRegisteredText}>Not register yet ?</Text>
      <View style={styles.buttons}>
      <TouchableOpacity onPress={() => nav.navigate('Register')}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      </View>
      {/* Replace with your actual image */}
      <Image
        // style={styles.imageStyle}
        // source={require('../../Images/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60, // Adjust this for status bar height and top spacing
    paddingHorizontal: 20, // Side padding for the whole screen
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'center', // Center the titles
    marginBottom: 30, // Add space below the title
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  header: {
    alignSelf: 'flex-start', // aligns the text to the left
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    //marginTop: 3, // or adjust according to your status bar height
    marginLeft: 10, // or adjust for desired padding from the left edge
  },
  headerContainer: {
    width: '100%', // Take full width to align the text to the left
    marginBottom: 20,
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
    // zIndex: 3,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'black',
  },
  socialButtons: {
    flex: 1, // This will expand the box to fill its container
    backgroundColor: 'white',
    borderRadius: 8,
    // React Native doesn't support CSS box-shadows directly. Elevation is used for Android, and shadow properties for iOS.
    // You may need to adjust the shadow properties to achieve the effect you want.
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  socialButton1: {
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
    zIndex: 3
  },
  imageStyle: {
    width: 381,
    height: 378,
    position: 'absolute',
    top: '60%',
    opacity: 0.1,
    zIndex:1
  },
  imageIcon: {
    width: 381,
    height: 378,
    position: 'absolute',
    top: '45%',
    opacity: 0.1,
  },
  socialButtonsContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // width: '100%',
    marginTop: 10, // Adjust as needed
    right: 50,
    justifyContent: 'center',
    marginHorizontal: 10, // Space between buttons
    padding: 10, // Padding inside the touchable area
    borderRadius: 22, // Half of the width/height to make it a circle
    backgroundColor: '#e6e6e6', // Light grey background for the button
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Soft shadow around the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  socialButtonsContainer2: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // width: '100%',
    marginTop: 10, // Adjust as needed
    right: 0,
    justifyContent: 'center',
    marginHorizontal: 10, // Space between buttons
    padding: 10, // Padding inside the touchable area
    borderRadius: 22, // Half of the width/height to make it a circle
    backgroundColor: '#e6e6e6', // Light grey background for the button
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Soft shadow around the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  socialButtonsContainer3: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // width: '100%',
    marginTop: 10, // Adjust as needed
    left: 50,
    justifyContent: 'center',
    marginHorizontal: 10, // Space between buttons
    padding: 10, // Padding inside the touchable area
    borderRadius: 22, // Half of the width/height to make it a circle
    backgroundColor: '#e6e6e6', // Light grey background for the button
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Soft shadow around the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow,
  },
  googleIcon: {
    width: 24, // Typically, icons can be within 24x24 to 48x48 for mobile apps
    height: 24,
    resizeMode: 'contain', // Ensures the icon scales without distortion
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

export default LoginScreen;
