import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { auth } from '../../Backend/firebaseConfig';
import { updateDoc } from '@firebase/firestore';

const QuestionnaireScreen = () => {
  const [addiction, setAddiction] = useState('');
  const [duration, setDuration] = useState('');
  const [treatment, setTreatment] = useState('');
  const [goals, setGoals] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const addictionTags = ['Alcohol', 'Tobacco', 'Gambling', 'Internet', 'Sexual', 'Food'];

  const nav = useNavigation()

  const handleSubmit = async () => {
    const uid = auth.currentUser;
    const data = {
      "Addiction": addiction,
      "Duration": duration, 
      "Treatment": treatment,
      "Goals": goals, 
      "Tags": selectedTags,
    }
    await updateDoc(uid, data);
    // console.log({
    //   addiction,
    //   duration,
    //   treatment,
    //   goals,
    // });
  };

  const handleBack = () => {
    nav.navigate("ProfileInfo")
  }
  const toggleTag = (tag) => {
    setSelectedTags(prevTags => {
      if (prevTags.includes(tag)) {
        // If tag is already selected, unselect it
        return prevTags.filter(t => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const isTagSelected = (tag) => {
    return selectedTags.includes(tag);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.circleYellow} />
      <View style={styles.circleBlue} />
      <Text style={styles.header}>Some Questions</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.question}>What addiction have you faced?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddiction}
          // value={addiction}
          placeholder="Your addiction"
        />
        <Text style={styles.question}>How long have you gone through the addiction?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDuration}
          // value={duration}
          placeholder="Duration of addiction"
        />
        <Text style={styles.question}>What methods of treatment have you taken?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTreatment}
          // value={treatment}
          placeholder="Treatment methods"
        />
        <Text style={styles.question}>What are your goals in overcoming addiction?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setGoals}
          // value={goals}
          placeholder="Your goals"
        />
        <Text style={styles.question}>How would you characterize your addiction?</Text>
        <View style={styles.tagsContainer}>
        {addictionTags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, isTagSelected(tag) && styles.selectedTag]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 35,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  inputContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1, // Each button will take half of the container width
  },
  backButton: {
    backgroundColor: 'lightgray',
    marginRight: 10, // Add margin to separate the buttons
  },
  nextButton: {
    backgroundColor: 'yellow',
    marginLeft: 10, // Add margin to separate the buttons
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    margin: 4,
    backgroundColor: '#f7f7f7',
  },
  selectedTag: {
    backgroundColor: '#ffe0b2', // A light orange color to indicate selection
    borderColor: '#ffa726', // A darker orange color to highlight the border
  },
  tagText: {
    color: '#000',
    fontSize: 14,
  },
});

export default QuestionnaireScreen;
