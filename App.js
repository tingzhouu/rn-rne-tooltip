import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tooltip } from 'react-native-elements';

const TOOLTIP_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae urna non leo maximus placerat id vel justo. Nulla in egestas risus. Ut ac sapien lorem. Sed non massa non diam sodales viverra. Curabitur non vestibulum erat, id efficitur justo.';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <View style={styles.fieldHeader}>
          <Text>Field Title</Text>
          <Tooltip popover={<Text>{TOOLTIP_TEXT}</Text>}>
          <Text>Press me</Text>
        </Tooltip>
        </View>
        <View style={styles.fieldInput}>
          <Text>Dummy Input Text</Text>
        </View>

        <View style={styles.tooltipDisplaySection}>
          <Text>Tooltip Text:</Text>
          <Text>{TOOLTIP_TEXT}</Text>
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
    marginBottom: 5,
  },
  fieldInput: {
    width: '80%',
    height: 50,
    borderColor: 'red', borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
  },
  tooltipDisplaySection: {
    marginTop: 20,
  },
  fieldTooltip: {

  },
  fieldTitle: {

  },
});
