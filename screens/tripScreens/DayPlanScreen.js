import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { plans } from "../../constants/data/PLANS";
import { useNavigation, useRoute } from '@react-navigation/native';

const DayPlanScreen = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const { dayID } = router.params;
    const myDayPlan = plans.find(plan => plan.id == dayID)

    return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../assets/icon/icon_back.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Text style={styles.labelHeader}>Lịch trình ngày {myDayPlan.day}</Text>
        </View>
        <View style={styles.listContainer}>
            <FlatList data={myDayPlan.places} showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                keyExtractor={place => place.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.dayPlanNav}>
                            <Image
                                source={{ uri: item.place_image }}
                                style={styles.placeImage}
                            />
                            <Text style={styles.username}>{item.place_name}</Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Thêm địa điểm</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#24BAEC',
    },
    header: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,

        elevation: 3,
    },
    labelHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#24BAEC',
    },
    icon: {
        tintColor: '#24BAEC',
        width: 32,
        height: 32,
        margin: 5,
    },
    listContainer: {
        backgroundColor: '#fff',
        padding: 20,
        width: '95%',
        height: '90%',
        borderRadius: 10,
        marginTop: 10,
    },
    dayPlanNav: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 50,
        borderWidth: 1,
        borderColor: '#24BAEC',
        borderRadius: 4,
    },
    placeImage: {
        width: 120,
        height: 120,
    },  
    button: {
        backgroundColor: '#24BAEC',
        padding: 10,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },

});

export default DayPlanScreen;