import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <View style={styles.footerItem}>
                    <Image
                        source={require('../assets/icon/icon_home.png')}
                        style={styles.icon}
                    />
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ManageBookingScreen')}>
                <View style={styles.footerItem}>
                    <Image
                        source={require('../assets/icon/icon_calender.png')}
                        style={styles.icon}
                    />
                    <Text>Room</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.footerItem}>
                <Pressable style={styles.addButton}
                    onPress={() => navigation.navigate('PlanUpScreen')}
                >
                    <Image source={require('../assets/icon/icon_plus.png')} style={{
                        tintColor: '#24BAEC',
                        width: 40,
                        height: 40,
                    }} />
                </Pressable>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('TripManageScreen')}>
                <View style={styles.footerItem}>
                    <Image
                        source={require('../assets/icon/icon_gps.png')}
                        style={styles.icon}
                    />
                    <Text>Trip Plan</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footerItem}>
                <Image
                    source={require('../assets/icon/icon_profile.png')}
                    style={styles.icon}
                />
                <Text>Profile</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        tintColor: '#24BAEC',
        width: 32,
        height: 32,
    },
    footer: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        bottom: 10,
        width: '94%',
        left: '3%',
        borderRadius: 15,
        position: 'absolute',
        elevation: 3,

    },
    footerItem: {
        tintColor: '#24BAEC',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Footer;
