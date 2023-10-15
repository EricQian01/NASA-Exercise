// import styles from './Nasainfo.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'expo-image';
import { Text, View, Button } from 'expo';
import { StyleSheet } from 'react-native';


export default function Nasainfo() {
    const [data, setData] = useState();

    const myAPI = process.env.EXPO_PUBLIC_API;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const year = '2023';
    const month = '01';
    const day = '01';

    const url = `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?api_key=${myAPI}`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.clear();
                console.log(response);
                setData(response.data);
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {/**
         * January 1, 2023
         */}

            {
                data && data.map((a, index) => {
                    return (
                        <View key={index} className={styles.container}>
                            <Text>Image #{index + 1}</Text>
                            <Text>{a.caption.toUpperCase()}</Text>
                            <Text>Date: {monthNames[Number(a.date.slice(5, 7)) - 1]} {Number(a.date.slice(8, 10))} {a.date.slice(0, 4)}</Text>
                            <Image src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${a.image}.png`} alt="empty" width={200} height={200} />
                            <View>Coordinates</View>
                            <Text>x: {a.centroid_coordinates.lat.toFixed(2)} </Text>
                            <Text>y: {a.centroid_coordinates.lon.toFixed(2)} </Text>
                        </View>
                    )

                })

            }


        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageNumber: {
        textAlign: 'right'
    },
    image: {
        width: 200,
        height: 200
    }
});