import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';


const PlanUpScreen = () => {
    const navigation = useNavigation();
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [numMembers, setNumMembers] = useState(1);
    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [isDepartureListVisible, setDepartureListVisibility] = useState(false);
    const [isDestinationListVisible, setDestinationListVisibility] = useState(false);
    const [departureOptions, setDepartureOptions] = useState(['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng']);
    const [filteredDepartures, setFilteredDepartures] = useState([]);
    const [destinationOptions, setDestinationOptions] = useState(['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Phú Quốc', 'Nha Trang', 'Quy Nhơn']);
    const [filteredDestinations, setFilteredDestinations] = useState([]);

    const categories = [
        { key: '1', value: 'Biển' },
        { key: '2', value: 'Thiên nhiên' },
        { key: '3', value: 'Lịch sử' },
        { key: '4', value: 'Sôi động' },
        { key: '5', value: 'Sang trọng' },
        { key: '6', value: 'Văn hóa địa phương' },
        { key: '7', value: 'Ẩm thực' },
        { key: '8', value: 'Mua sắm' },
    ];

    const increaseMember = () => setNumMembers(numMembers + 1);
    const decreaseMember = () => {
        if (numMembers > 1)
            setNumMembers(numMembers - 1)
    };

    const handleStartDateConfirm = (selectedDate) => {
        setStartDate(selectedDate);
        hideStartDatePicker();
    };


    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true)
    };

    const hideStartDatePicker = () => {
        setStartDatePickerVisibility(false);
    };
    const handleEndDateConfirm = (selectedDate) => {
        setEndDate(selectedDate);
        hideEndDatePicker();
    };
    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true)
    };

    const hideEndDatePicker = () => {
        setEndDatePickerVisibility(false);
    };
    const handleDepartureSelection = (selectedDeparture) => {
        setDeparture(selectedDeparture);
        setDepartureListVisibility(false); // Ẩn danh sách khi người dùng chọn
        Keyboard.dismiss(); // Ẩn bàn phím
    };

    const handleDestinationSelection = (selectedDestination) => {
        setDestination(selectedDestination);
        setDestinationListVisibility(false); // Ẩn danh sách khi người dùng chọn
        Keyboard.dismiss(); // Ẩn bàn phím
    };

    const searchDepartures = (text) => {
        const filtered = departureOptions.filter(option =>
            option.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredDepartures(filtered);
        setDepartureListVisibility(!!text); // Hiển thị danh sách nếu có dữ liệu trong ô input
    };

    const searchDestinations = (text) => {
        const filtered = destinationOptions.filter(option =>
            option.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredDestinations(filtered);
        setDestinationListVisibility(!!text); // Hiển thị danh sách nếu có dữ liệu trong ô input
    };

    const handleSubmit = () => {
        if (endDate <= startDate) {
            Alert.alert(
                'Thời gian không hợp lệ',
                'Ngày đi phải sớm hơn ngày về.',
            );
        }
        else if (!departure || !destination) {
            Alert.alert(
                'Địa điểm không hợp lệ',
                'Điểm khởi hành và điểm đến không được để trống',
            );
        } else {
            navigation.navigate('TripDetailScreen', {tripID: 1})
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/icon/icon_back.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.labelHeader}>Lên lịch trình mới</Text>
            </View>
            <View style={styles.centeredView}>
                <Text style={styles.detailLabel}>Điểm khởi hành</Text>
                <TextInput
                    style={styles.input}
                    value={departure}
                    onChangeText={text => {
                        setDeparture(text);
                        searchDepartures(text);
                    }}
                    placeholder="Chọn điểm khởi hành"
                    require
                />
                {isDepartureListVisible && (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={filteredDepartures}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    handleDepartureSelection(item);
                                    Keyboard.dismiss(); // Ẩn bàn phím
                                }}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                        />
                    </View>
                )}
                <Text style={styles.detailLabel}>Điểm đến</Text>
                <TextInput
                    style={styles.input}
                    value={destination}
                    onChangeText={text => {
                        setDestination(text);
                        searchDestinations(text);
                    }}
                    placeholder="Chọn điểm đến"
                />
                {isDestinationListVisible && (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={filteredDestinations}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    handleDestinationSelection(item);
                                    Keyboard.dismiss(); // Ẩn bàn phím
                                }}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                        />
                    </View>
                )}
                <Text style={styles.detailLabel}>Ngày khởi hành</Text>
                <TouchableOpacity style={styles.input} onPress={showStartDatePicker}>
                    <Text>{startDate.toDateString()}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isStartDatePickerVisible}
                    mode="date"
                    onConfirm={handleStartDateConfirm}
                    onCancel={hideStartDatePicker}
                />
                <Text style={styles.detailLabel}>Ngày về</Text>
                <TouchableOpacity style={styles.input} onPress={showEndDatePicker}>
                    <Text>{endDate.toDateString()}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isEndDatePickerVisible}
                    mode="date"
                    onConfirm={handleEndDateConfirm}
                    onCancel={hideEndDatePicker}
                /><Text style={styles.detailLabel}>Sở thích</Text>
                <MultipleSelectList
                    setSelected={(val) => setSelectedCategories(val)}
                    data={categories}
                    save="value"
                    label='Bạn đã chọn:'
                    placeholder='Chọn sở thích'
                    searchPlaceholder='tìm kiếm'
                    notFoundText='không có dữ liệu'
                />
                <Text style={styles.detailLabel}>Số thành viên</Text>
                <View style={styles.numMemberNav}>
                    <TouchableOpacity style={styles.numMemberNavBtn} onPress={decreaseMember}><Text style={styles.numMemberNavBtnTxt}>-</Text></TouchableOpacity>
                    <Text style={styles.labelHeader}>{numMembers}</Text>
                    <TouchableOpacity style={styles.numMemberNavBtn} onPress={increaseMember}><Text style={styles.numMemberNavBtnTxt}>+</Text></TouchableOpacity></View>


                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Lên lịch trình</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    centeredView: {

        width: '90%',
        overflow: 'hidden',
        marginTop: 50,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        textAlign: 'left',
    },
    detailLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
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
    numMemberNav: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numMemberNavBtn: {
        marginHorizontal: 20,
        borderColor: '#24BAEC',
        borderWidth: 2,
        padding: 8,
        borderRadius: 4,
    },
    numMemberNavBtnTxt: {
        color: '#24BAEC',
        fontSize: 20,
    },
});

export default PlanUpScreen;