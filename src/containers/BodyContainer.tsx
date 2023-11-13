import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import ProductList from '../components/ProductsList';

export default function BodyContainer() {
  return (
    <View style={styles.titleContainer}>
            <ProductList/>
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
    titleContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});