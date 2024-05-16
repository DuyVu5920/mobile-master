import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Footer from '../../components/Footer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavouriteButton from '../../components/FavouriteButton';
import ShareButton from '../../components/ShareButton';
import TabTrip from './TabTrip';
import TabHotel from './TabHotel';
import TabFlight from './TabFlight';
import { trips } from '../../constants/data/TRIPS';
import { users } from '../../constants/data/USERS';

const TripTab = createMaterialTopTabNavigator();

function TripDetailScreen() {
    const navigation = useNavigation();
    const router = useRoute();
    const { tripID } = router.params;
    const myTrip = trips.find(trip => trip.id == tripID);
    const user = users.find(user => user.id == myTrip.user_id)

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/image/address/danang.jpg')} resizeMode='cover' style={styles.image}>
                <TouchableOpacity onPress={() => navigation.navigate('TripManageScreen')}>
                    <Image
                        source={require('../../assets/icon/icon_back.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <View style={styles.userNav}>
                    <View style={styles.userNavItem}>
                        <ShareButton style={styles.icon} />
                    </View>
                    <View style={styles.userNavItem}>
                        <FavouriteButton active={myTrip.favoredByUser} style={styles.icon} />
                    </View>
                </View>
            </ImageBackground>


            <View style={styles.tirpHeader}>
                <Text style={styles.labelHeader}>{myTrip.name}</Text>
                <Text style={{ fontSize: 18, }}>{myTrip.start_date} - {myTrip.end_date} , {myTrip.total_member} người</Text>
                <Text>Tạo bởi: <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>, ngày tạo <Text style={{ fontWeight: 'bold' }}>{myTrip.creation_date}</Text></Text>
            </View>
            <View style={styles.tripContent}>
                <TripTab.Navigator screenOptions={{
                    tabBarActiveTintColor: '#04CDFA',
                    tabBarInactiveTintColor: '#666',
                    swipeEnabled: false,
                    tabBarIndicatorStyle: { height: 3,backgroundColor: '#04CDFA'},
                    tabBarLabelStyle: { fontSize: 16, textTransform: 'capitalize' },
                }}>
                    <TripTab.Screen name="chuyến đi" component={TabTrip} initialParams={{tripID: myTrip.id}}/>
                    <TripTab.Screen name="chuyến bay" component={TabFlight} />
                    <TripTab.Screen name="Khách sạn" component={TabHotel} />
                </TripTab.Navigator>
            </View>
            <Footer />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        width: '100%',
        height: '100%',
    },

    image: {
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        padding: 10,
    },
    icon: {
        tintColor: 'white',
        width: 32,
        height: 32,
        margin: 5,
    },
    userNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tirpHeader: {
        backgroundColor: 'white',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'start',
        position: 'absolute',
        left: "5%",
        zIndex: 3,
        elevation: 5,
        top: 150,
        padding: 10,
        borderRadius: 10,
    },
    labelHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#24BAEC',
    },
    tripContent: {
        paddingTop: 50,
        backgroundColor: '#fff',
        height: '80%',
    },
});

export default TripDetailScreen;