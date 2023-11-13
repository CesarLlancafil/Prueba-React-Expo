import { Text, View, StyleSheet } from 'react-native';

export default function TitleContainer() {

    return (
        <View style={styles.titleContainer}>
            <Text>
                Lista de productos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        maxHeight:20,
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
