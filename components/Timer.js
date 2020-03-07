import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TimerButton from './TimerButton';

const Timer = ({ title, project, elapsed }) => {

   return (
      <View style={styles.timerContainer}>
         <Text style={styles.title}>{title}</Text>
         <Text>{project}</Text>
         <Text style={styles.elapsedTime}>1</Text>
         <View style={styles.buttonGroup}>
            <TimerButton color="blue" small title="Edit" />
            <TimerButton color="blue" small title="Remove" />
         </View>
         <TimerButton color="#21BA45" title="Start" />
      </View>
   );
}

const styles = StyleSheet.create({
   timerContainer: {
      backgroundColor: 'white',
      borderColor: '#d6d7da',
      borderWidth: 2,
      borderRadius: 10,
      margin: 15,
      marginBottom: 0,
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   elapsedTime: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15,
   },
   buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   }
})

export default Timer