import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {renderedItem} from './RenderedItem';
class SearchListResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: props.words,
            update: true,
            //lang: 'baluchi'
            lang: props.lang
        }
        console.log(this.state.words);
        this.doUpdate = this.doUpdate.bind(this);

    }

    doUpdate(item) {
        const rev = this.state.update;
        this.setState({ update: rev });
        this.props.onPress(item);
    }

    componentDidUpdate(prevProps, prevState) {
       // console.log('componentDidUpdate');
        if (this.props.words !== prevProps.words) {
            console.log('componentDidUpdate did update ... words size: ' + this.props.words.length);
            this.setState({ words: this.props.words });
        }
        if(this.props.lang !== prevProps.lang){
          //  console.log('componentDidUpdate did pdate ... lang: ' + this.props.lang);
            this.setState({lanag: this.props.lang});
        }
    }
    componentDidMount() {
       // console.log('SearchListResult::componentDidMount');
    }
    renderItem = ({ item }) => {
/*        var firstLang = item.LexEntry.eng;
        var secondLang = item.LexEntry.bcc;
        var textAlign = 'left';
        if (this.state.lang === 'baluchi') {
            firstLang = item.LexEntry.bcc;
            secondLang = item.LexEntry.eng;
            textAlign = 'right';
        } 
        console.log('Current lang: ' + this.state.lang);
        console.log('firstLang: ' + firstLang + ', secondLang: ' + secondLang);*/
        return(
        <TouchableOpacity onPress={() => this.doUpdate(item)}>
            <View style={{ minHeight: 70, width: '80%', padding: 5 }}>
                <View>
                    <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start' }}>
                        {item.eng}
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start' }}>
                        {item.bcc_latin_sci + ' '}
                        {item.bcc}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )};
    render() {
        return (
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
                            marginTop: 50,
                            width: '100%',
                        }}
                    >
                        <Text style={{ color: '#bad555' }}>               No Words Found ...          </Text>
                    </View>
                )}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
    backgroundColor: '#2f363c',
        width: '100%'
    }
})

export default SearchListResult;