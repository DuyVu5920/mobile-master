import { React } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import Share from 'react-native-share';

const ShareButton = ({ style }) => {

    const options = {
        title: '123',
        url: 'www.facebook.com',
        message: 'Hello',
    };

    const shareTrip = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Pressable onPress={async () => {
            await shareTrip();
        }} >
            <Image
                source={require('../assets/icon/icon_share.png')}
                style={style} />
        </Pressable>
    );
};

export default ShareButton;