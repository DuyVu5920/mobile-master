import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import { trips } from "../constants/data/TRIPS";
import { useNavigation, useRoute } from '@react-navigation/native';

const DaysCarousel = ({ tripID }) => {
    const navigation = useNavigation();
    const myTrip = trips.find(trip => trip.id == tripID);

    return (
        <FlatList data={myTrip.plan}
            horizontal
            keyExtractor={dayPlan => dayPlan.day_id}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            renderItem={({ item, index }) => {

                return (
                    <View><TouchableOpacity style={{ marginRight: 15 }}
                        onPress={() => navigation.navigate('DayPlanScreen', { dayID: item.day_id })}
                    >
                        <View style={styles.card}>
                            <Image source={{ uri: item.places[0].place_image }}
                                style={styles.image}
                            />
                            
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Ngày {index + 1}</Text>
                            <Text>{item.places.length} địa điểm - {item.travel_distance}</Text>
                        </View>
                    </TouchableOpacity></View>

                )
            }} />

    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 230,
        // borderColor: '#000',
        // borderWidth: 1,
    },
    image: {
        width: 140,
        height: 180,
        borderRadius: 8,
    }
});

export default DaysCarousel;