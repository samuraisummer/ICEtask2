import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 25 }}>This is the header for ICE Task 2.</Text>
      <br></br>
      <Image
        source={{uri: 'https://images.theconversation.com/files/651621/original/file-20250226-32-jxjhmy.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5991%2C3997&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'}}
        style={styles.image}
      />
      <Text style={styles.description}>
        This is a local image component.
      </Text>
      <Image
        source={
          require('./assets/music.jpg')}
        style={styles.image}
      />
      <Text style={styles.description}>
        This is a image component.
      </Text>
      <Text style={styles.sectionTitle}>Yeah</Text>
      <FlatList
        data={[
          { key: 'Item 1' },
          { key: 'Item 2' },
          { key: 'Item 3' },
          { key: 'Item 4' },
        ]}
        renderItem={({ item }) => <Text style={styles.description}>{item.key}</Text>}
        keyExtractor={item => item.key}
      />
      <Button title='Click Me!' onPress={() => alert('This is an alert.')} />
      <StatusBar style="auto" />
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