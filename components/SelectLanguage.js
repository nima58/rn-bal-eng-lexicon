import React from 'react';
import { View, Text, Picker } from 'react-native';
//import {Picker} from '@react-native-community/picker';

class SelectLanguage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{
                height: 60, width: 260, borderColor: 'blue', borderRadius: 4,
                borderWidth: 1.5,
            }}>
                <Text>Select Language</Text>
                <Picker
                    selectedValue={this.props.language}
                    style={{ height: 50, width: 250 }}
                    itemStyle={{fontWeight:'bold', color:'red'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.props.changeLanguage(itemValue)
                    }>
                    <Picker.Item label="English" value="eng" />
                    <Picker.Item label="Baluchi Latin Com" value="bcc_latin_com" />
                    <Picker.Item label="Baluchi Latin Sci" value="bcc_latin_sci" />
                    <Picker.Item label="بلوچی" value="bcc" />
                    <Picker.Item label="فارسی" value="fa" />
                    <Picker.Item label="اردو" value="ur" />
                </Picker>
            </View>

        );
    }
}
export default SelectLanguage;