import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import PageHeader from './PageHeader';
import SearchInput from './SearchInput';
import SearchListResult from './SearchListResult';
import { getWords, validateLang } from '../api/ApiService';
import SelectLanguage from './SelectLanguage';

class Lexicon extends React.Component {

    constructor() {
        super();
        this.state = {
            words: [],
            inMemoryWords: [],
            isLoading: true,
            lang: "eng",
            query: ""
        }
        this._onPress = this._onPress.bind(this);
     //   this.searchWordsFromApi = this.searchWordsFromApi.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.searchWords = this.searchWords.bind(this);
    }

    changeLanguage(lang) {
        //Validate lang
        let validatedLang = validateLang(lang);
        this.setState({ lang: validatedLang, words:[], query: '' });
    }

    _onPress(item) {
        this.props.navigation.navigate('TranslationScreen', { 'LexEntry': item });
    }
/*
    searchWordsFromApi = value => {
        if (value.length > 2) {
            getWords(value)
                .then((resp) => this.setState({ words: resp.words }));
        } else
            this.setState({ words: [] });
    }
*/
    searchWords = value => {

        if (value.length > 2) {
            getWords(value, this.state.lang)
                .then((resp) => this.setState({ words: resp.words, query: value }));
        } else
            this.setState({ words: [], query: value });

    };

    render() {

          return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <PageHeader />
                </View>
                <SafeAreaView style={{ backgroundColor: '#2f363c' }} />
                <View style={styles.select}>
                    <SelectLanguage language={this.state.lang} changeLanguage={this.changeLanguage} />
                </View>
                <View style={styles.input}>
                    <SearchInput query={this.state.query} searchWords={this.searchWords} />
                </View>
                <View style={styles.list}>
                    <SearchListResult words={this.state.words} lang={this.state.lang} onPress={this._onPress} />
                </View>

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
export default Lexicon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {
        flex: 2,
        width: '80%',
    },
    select: {
        flex: 1,
        width: '80%',
     //   alignItems: 'center'
    },
    input: {
        flex: 1,
        width: '80%',
    },
    list: {
        flex: 4,
        width: '80%',
    },
});