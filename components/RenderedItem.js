import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const renderedItem = ( {item} , lang) => {
    console.log(' item.LexEntry.eng: ' +  item.LexEntry.eng);
    let firstLang = item.LexEntry.eng;
    let secondLang = item.LexEntry.bcc;
    let textAlign = 'left'
    if (lang === 'baluchi') {
        firstLang = item.LexEntry.bcc;
        secondLang = item.LexEntry.eng;
        textAlign = 'right';
    } 
    return
    <TouchableOpacity onPress={() => this.doUpdate(item)}>
        <View style={{ minHeight: 70, width: '80%', padding: 5 }}>
            <View>
                <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', textAlign:{textAlign} }}>
                    {firstLang}
                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start' }}>
                    {item.LexEntry.bccLatinSci + ' '}
                    {secondLang}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
}

export { renderedItem };