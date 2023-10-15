import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import stylesHome from './Home.styles'
import Nasainfo from '../components/Nasainfo';

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Nasainfo />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
