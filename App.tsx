import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 25 }}>This is a PlayStation 5 controller.</Text>
      <br></br>
      <Image
        source={{uri: 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$'}}
        style={styles.image}
      />
      <Text style={styles.description}>
        These are some of the components of a DualSense controller.
      </Text>
      <Text style={styles.sectionTitle}>DualSense Parts</Text>
      <FlatList
        data={[
          { key: 'Face buttons' },
          { key: 'Touchpad' },
          { key: 'Home button' },
          { key: 'Analog sticks' },
        ]}

        renderItem={({ item }) => <Text style={styles.description}>{item.key}</Text>}
        keyExtractor={item => item.key}
      />
      <Button title='Click Me!' onPress={() => alert('This is an alert.')} />
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => alert('This is a touchable opacity component.')}>
        <Text style={{ color: 'green', fontSize: 20, marginTop: 10 }}>Touchable Opacity</Text>
      </TouchableOpacity>
      
    </View>
    );
  }

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 301,
    height: 300,
  },
  description: {
    marginVertical: 5,
    fontSize: 16,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'purple',
  },
}
);