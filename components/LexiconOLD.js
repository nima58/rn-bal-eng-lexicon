import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Button, ThemeConsumer } from 'react-native-elements';
import PageHeader from './PageHeader';
import DemoLexicon from './DemoLexicon';

class Lexicon extends React.Component {
    constructor() {
        super();
        console.log('Lexicon constructor ...');
        this.state = {
            words: [{ "LexEntry": { "id": 17, "bcc": "چوٚلستان", "eng": "name of a desert in Sindh", "pos": "Noun", "bccLatinCom": "chólestán", "bccLatinSci": "čōlistāk", "fa": "NULL", "ur": "NULL" } },
            ],
            isLoading: true,
            lang: 'eng'
        }
        this._onPress = this._onPress.bind(this);
        this.searchWords = this.searchWords.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
       // console.log('DemoLexicon.words length <<<<<< ' + DemoLexicon.words.length);
        // let myWords = ApiConnector('name');
        //  console.log('componentWillMount:>>>>>>>>>>>> ' + JSON.stringify(myWords));
        this.setState({ words: DemoLexicon().words, isLoading: false, inMemoryWords: DemoLexicon().words });
        console.log('DemoLexicon Words length: ' + DemoLexicon().words);
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this._onPress(item)}>
            <View style={{ minHeight: 70, width: '80%', padding: 5 }}>
                <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 20 }}>
                    console.log('ITEM-> ' + item.eng;
                    {item.LexEntry.eng}
                </Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {item.LexEntry.bccLatinSci + ' '}
                    {item.LexEntry.bcc}
                </Text>
            </View>
        </TouchableOpacity>
    );

    _onPress(item) {
        //  alert('Navigate to details page for ' + item.LexEntry.eng + ',' + item.LexEntry.bcc);
        let lex = JSON.stringify(item.LexEntry);
        console.log('Lexicon LexEntry: ' + lex);
        // let word = { "LexEntry": { "id": 17, "bcc": "چوٚلستان", "eng": "name of a desert in Sindh", "pos": "Noun", "bccLatinCom": "chólestán", "bccLatinSci": "čōlistāk", "fa": "NULL", "ur": "NULL" } };
        this.props.navigation.navigate('DetailsScreen', { 'LexEntry': item.LexEntry });
    }

    searchWords = value => {
        console.log('SearchWords .....' + value);
    //  console.log(this, this.state.words.length);
        const filteredWords = this.state.inMemoryWords.filter(word => {
            let wordLowercase = (
                word.LexEntry.eng
            ).toLowerCase();

            let searchTermLowercase = value.toLowerCase();
            console.log('searchTermLowercase: ' + searchTermLowercase);
            return wordLowercase.indexOf(searchTermLowercase) > -1;
        });
        this.setState({ words: filteredWords });
    };

    render() {
      //  console.log('rendering words.length: ' + this.state.words.length);
        return (
            <View style={StyleSheet.container}>
                <View style={StyleSheet.head}>
                    <PageHeader />
                </View>
                <View style={styles.content}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#dddddd"
                        style={{
                            backgroundColor: '#2f363c',
                            height: 70,
                            width: '80%',
                            fontSize: 36,
                            padding: 15,
                            color: 'white',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#7d90a0'
                        }}
                        onChangeText={value => this.searchWords(value)}
                    />
                    <Text>List here {this.state.words.length}</Text>
                    <View style={styles.list}>
                        <FlatList
                            data={this.state.words}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => (
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: 50
                                    }}
                                >
                                    <Text style={{ color: '#bad555' }}>No Contacts Found</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Go to Home"
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                        <Button
                            title="Go to Details"
                            onPress={() => this.props.navigation.navigate('DetailsScreen')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        flex: 2
    },
    content: {
        flex: 1,
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',

    },
    list: {
        flex: 3,
        marginTop: 150,
        backgroundColor: '#2f363c'
    },
    button: {
        flex: 1,

    }
});
export default Lexicon;