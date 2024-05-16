import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DaysCarousel from '../../components/DaysCarousel';
import { trips } from '../../constants/data/TRIPS';
import { users } from '../../constants/data/USERS';

function TabTrip() {
    const navigation = useNavigation();
    const router = useRoute();
    const { tripID } = router.params;
    const myTrip = trips.find(trip => trip.id == tripID);

    return (
        <View style={styles.container}>
            <Text style={styles.labelHeader}>Lịch trình</Text>
            <View style={styles.tripByDaysSection}>
                <DaysCarousel tripID={myTrip.id} />
            </View>
            <Text style={styles.labelHeader}>Thành viên</Text>
            <FlatList horizontal data={users} showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                keyExtractor={user => user.id}
                renderItem={({ item, index }) => {return (
                    <View style={styles.userNav}>
                        <Image
                            source={item.avatar}
                            style={styles.avatar}
                        />
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                )}}
            />
            <Text style={styles.labelHeader}>Chi phí dự tính <Text style={{color: '#24BAEC'}}>{myTrip.total_cost}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',

        padding: 20,
    },
    labelHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        tintColor: '#24BAEC',
        width: 32,
        height: 32,
        margin: 5,
    },
    tripByDaysSection: {
        marginVertical: 15,
    },
    listTrip: {

    },
    itemTrip: {

    },
    tripImage: {

    },
    userNav: {
        alignItems: 'center',
        marginVertical: 20,
        marginRight: 15,
        // height: ,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    username: {
        marginLeft: 10,
        marginRight: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TabTrip;