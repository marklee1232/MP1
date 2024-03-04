import React, {useState} from 'react'
import { Button, TextInput, StyleSheet, View, Text, FlatList } from 'react-native';

export default function App () {

const [enteredGoalText, setEnteredGoalText ] = useState('');
const [courseGoals, setCourseGoals] =useState([]);

const [colorIndex, setColorIndex] = useState(0);

const colors = ['red', 'orange', 'yellow', 'yellowgreen', 'blue', 'violet'];


  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText);
  }
   const addGoalHandler = () => {
        if (enteredGoalText.trim() === '') {
            return; 
        }

        const newGoal = {
            id: Math.random().toString(),
            value: enteredGoalText,
            backgroundColor: colors[colorIndex]
        };

        setColorIndex((colorIndex + 1) % colors.length);

        setCourseGoals(currentCourseGoals => [...currentCourseGoals, newGoal]);
        setEnteredGoalText('');
    };

  return (




      <View style={styles.appContainer}> 
        <View style= {styles.inputContainer}>
          <TextInput style= {styles.textInput} placeholder='My Goal' onChangeText={goalInputHandler} value={enteredGoalText} /> 
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
            
         <FlatList
                data={courseGoals}
                renderItem={({ item }) => (
                    <View style={{ ...styles.goalsContainer, backgroundColor: item.backgroundColor }}>
                        <Text> {"\u2022"} {item.value}</Text>
                    </View>
                )}
            />
        </View>
  );

}



const styles = StyleSheet.create({

appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
},

inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
},

textInput: {
 borderWidth: 1,
 width: '70%',
 marginRight: 8,
 padding: 8,

},
goalsContainer: {

  paddingTop: 20,
  padding:10,

},

});