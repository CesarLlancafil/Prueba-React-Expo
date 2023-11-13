import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import TitleContainer from '../containers/TitleContainer';
import BodyContainer from '../containers/BodyContainer';


export default function HomeView() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TitleContainer />
          <BodyContainer /> 
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
