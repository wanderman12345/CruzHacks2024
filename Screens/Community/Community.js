import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform, ScrollView} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Community = ({navigation}) => {
 const nav = useNavigation();
 // Sample data for cards (replace this with your actual data)
 const cardData = [
    { id: 1, image: require("../../Images/Rectangle_4.png"), title: "Eduardo", addiction: "Alcoholism", Description: "Have been sober for 2.5 years, and willing to help anyone in need."},
    { id: 2, image: require("../../Images/Rectangle_4.png"), title: "John", addiction: "marijuana", Description: "Hi there"},
    { id: 3, image: require("../../Images/Rectangle_4.png"), title: "Bob" },
    // Add more card data as needed
  ];
  return (
    <View style={styles.container}>
      <View style={styles.circleYellow} />
      <View style={styles.circleBlue} />

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Community Page</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="search"
        placeholderTextColor= "black"
      />
     <ScrollView contentContainerStyle= {styles.cards}>
    {cardData.map((card) => (
        <View key={card.id} style={styles.card}>
        <Text style={styles.cardText}>{card.title}</Text>
          <Image
            style={styles.cardImage}
            source={card.image}
          />
           <Text style={styles.cardAddiction}> Addiction: {card.addiction}</Text>
           <Text style={styles.Description}> {card.Description}</Text>
           <Image
            style={styles.cardButton}
            source={require("../../Images/Rectangle_5.png")}
          />
           <Text style={styles.chat}> chat now!</Text>
        </View>
        ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'flex-start',
    paddingTop: 60, // Adjust this for status bar height and top spacing
    paddingHorizontal: 20, // Side padding for the whole screen
    backgroundColor: 'white',
  },
  textInput: {
    color: 'black'
  },
  chat: {
    position: 'absolute',
    marginTop: 300,
    marginLeft: 90,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardButton: {
    position: 'absolute',
    marginTop: 290,
    marginLeft: 65
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
  cardAddiction:{
    position: 'absolute',
    color: 'red',
    alignContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 175, // Adjust as needed
    marginLeft: 50,
    textAlign: 'center', // Center the text
    zIndex: 1,

  },
  header: {
    alignSelf: 'center', // aligns the text to the left
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
    //marginTop: 3, // or adjust according to your status bar height
    marginLeft: 10, // or adjust for desired padding from the left edge
  },
  headerContainer: {
    width: '100%', // Take full width to align the text to the left
    marginBottom: 20,
  },
  cards: {
    flexDirection: 'row', // Align cards horizontally
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,

  },
  Description: {
    fontFamily: 'System',
    position: 'absolute',
    color: 'black',
    alignContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 200, // Adjust as needed
    marginLeft: 50,
    textAlign: 'center', // Center the text
    zIndex: 1,
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
  cardText: {
    alignContent: 'center',
    position: 'absolute',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 130, // Adjust as needed
    marginLeft: 80,
    textAlign: 'center', // Center the text
    zIndex: 1,
  },
  input: {
    color: 'red',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    height: 48,
    alignItems: 'flex-start',
    width: '80%',
    marginVertical: 10,
    borderWidth: 0.6,

    borderRadius: 6,
    padding: 7,
  },
  loginButton: {
    marginLeft: 30,
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

export default Community;
