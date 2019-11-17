import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <View style={styles.fieldHeader}>
          <Text>First Name</Text>
          <Text>TOOLTIP!</Text>
        </View>
        <View style={styles.fieldInput}>
          <Text>Dummy Text</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    width: '100%',
    alignItems: 'center',
  },
  fieldHeader: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldInput: {
    width: '80%',
    height: 50,
    borderColor: 'red', borderWidth: 2,
    justifyContent: 'center',
  },
  fieldTooltip: {

  },
  fieldTitle: {

  },
});
