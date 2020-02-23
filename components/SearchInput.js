import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput
                placeholder="Search ..."
                placeholderTextColor="#dddddd"
                style={styles.input}
             //   value={this.props.query}
                onChangeText={value => this.props.searchWords(value)}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#2f363c',
        height: 70,
        fontSize: 36,
        padding: 15,
        color: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#7d90a0',
        marginTop: 20
    }
});

export default SearchInput;