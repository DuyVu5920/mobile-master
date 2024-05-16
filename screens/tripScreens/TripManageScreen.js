import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
    Pressable,
} from 'react-native';
import Footer from '../../components/Footer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TabView } from 'react-native-tab-view';
import FavouriteButton from '../../components/FavouriteButton';
import ShareButton from '../../components/ShareButton';
import { trips } from '../../constants/data/TRIPS';
import { users } from '../../constants/data/USERS';

function TripItem(tripID) {
    const navigation = useNavigation();
    const router = useRoute();
    const myTrip = trips.find(trip => trip.id == tripID);
    const user = users.find(user => user.id == 1);

    return (
        <View key={tripID}>
            <View style={styles.itemTrip}>

                <View style={styles.userNav}>
                    <View style={styles.userNav}>
                        <Image
                            source={user.avatar}
                            style={styles.avatar}
                        />
                        <Text style={styles.username}>{user.name}</Text>
                        <Text>{myTrip.creation_date}</Text>
                    </View>
                    <View style={styles.userNav}>
                        <View style={styles.userNavItem}>
                            <ShareButton style={styles.icon} />
                        </View>
                        <View style={styles.userNavItem}>
                            <FavouriteButton active={myTrip.favoredByUser} style={styles.icon} />
                        </View>
                    </View>
                </View><Image
                    source={require('../../assets/image/address/danang.jpg')}
                    style={styles.tripImage}
                />
                <Text style={styles.labelHeader}>{myTrip.name}</Text>
                <View style={styles.tripInfo}>
                    <View style={styles.tripInfoItem}>
                        <Image
                            source={require('../../assets/icon/icon_clock.png')}
                            style={styles.icon}
                        />
                        <Text>{myTrip.duration} ngày</Text>
                    </View>
                    <View style={styles.tripInfoItem}>
                        <Image
                            source={require('../../assets/icon/icon_dollar.png')}
                            style={styles.icon}
                        />
                        <Text>{myTrip.total_cost}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.tripInfoItem}
                        onPress={() => navigation.navigate('TripDetailScreen', { tripID: myTrip.id })}>
                        <Image
                            source={require('../../assets/icon/icon_right.png')}
                            style={styles.icon}
                        />
                        <Text style={{ color: '#24BAEC', textDecorationLine: 'underline', fontWeight: 'bold' }}>Chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const TripItemsCategorized = status => (
    <ScrollView style={styles.listTrip} showsVerticalScrollIndicator={false} overScrollMode="never">
        {trips
            .filter(trip => trip.status === status)
            .map(trip => TripItem(trip.id))}
    </ScrollView>
);

const FavouriteTripItemsCategorized = status => (
    <ScrollView style={styles.listTrip} showsVerticalScrollIndicator={false} overScrollMode="never">
        {trips
            .filter(trip => trip.status === status && trip.favoredByUser)
            .map(trip => TripItem(trip.id))}
    </ScrollView>
);

function TripManageScreen() {
    const navigation = useNavigation();
    const router = useRoute();
    const layout = useWindowDimensions();
    const [routes] = useState([
        { key: 'upcoming', title: 'sắp đi' },
        { key: 'ongoing', title: 'đang đi' },
        { key: 'completed', title: 'đã đi' },
    ]);
    const [index, setIndex] = useState(0);
    const [favouriteFilter, setFavouriteFilter] = useState(false);

    const FilterFavouriteButton = ({ active, style }) => {
        const imgHeart = require('../../assets/icon/icon_heart.png');
        const imgHeartEmpty = require('../../assets/icon/icon_heart_empty.png');

        let [flag, setFlag] = useState(active);
        let toggleSwitch = () => setFlag(previousState => !previousState);
        let toggleFilter = () => setFavouriteFilter(previousState => !previousState)
        let imgSrc = flag ? imgHeart : imgHeartEmpty;

        return (
            <Pressable onPress={() => { toggleSwitch(); toggleFilter() }}>
                <Image style={style} source={imgSrc} />
            </Pressable>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                    <Image
                        source={require('../../assets/icon/icon_back.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.labelHeader}>Lịch trình của tôi</Text>
                <FilterFavouriteButton active={favouriteFilter} style={styles.icon} />
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={({ route }) => {
                    switch (route.key) {
                        case 'upcoming':
                            return (favouriteFilter ? FavouriteTripItemsCategorized(route.key) : TripItemsCategorized(route.key));
                            break;
                        case 'ongoing':
                            return (favouriteFilter ? FavouriteTripItemsCategorized(route.key) : TripItemsCategorized(route.key));
                            break;
                        case 'completed':
                            return (favouriteFilter ? FavouriteTripItemsCategorized(route.key) : TripItemsCategorized(route.key));
                            break;
                        default:
                            return null;
                    }
                }}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />

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
    header: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        paddingLeft: 10,
        paddingRight: 10,
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
    listTrip: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 52,
    },
    itemTrip: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'start',
        borderRadius: 8,
        marginBottom: 20,
        elevation: 3,
        height: 300,
        padding: 10,
    },
    tripImage: {
        height: '50%',
        width: '100%',
        borderRadius: 4,
    },

    userNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    tripInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tripInfoItem: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default TripManageScreen;
