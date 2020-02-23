import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import PageHeader from './PageHeader';

const heads = ['بلوچی', 'English', 'Latin', 'POS'];
const heightArr = [70, 70, 70, 70]
const widthArr = [35, 35, 35, 35]

class Translation extends React.Component {

    constructor(props) {
        super(props);
        let lex = props.navigation.state.params.LexEntry;
        this.state = {

            id: lex.id,
            bcc: lex.bcc,
            eng: lex.eng,
            fa: lex.fa,
            bccLatinCom: lex.bccLatinCom,
            bccLatinSci: lex.bccLatinSci,
            pos: lex.pos,
            ur: lex.ur
        }
    }

    render() {
        const colData = [this.state.bcc, this.state.eng, this.state.bccLatinCom, this.state.pos];
        return (
            <View style={styles.container}>
                <PageHeader />
                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 2 }}>
                        <TableWrapper style={styles.wrapper}>
                            <Col data={heads} style={styles.title} heightArr={heightArr} textStyle={styles.head} />
                            <Col data={colData} style={styles.title} heightArr={heightArr} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button
                            title="Details"
                            onPress={() => this.props.navigation.navigate('DetailsScreen', { 'LexEntry': this.props.navigation.state.params.LexEntry })}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button
                            title="Go to Home"
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default Translation;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { textAlign: 'center', height: 40, backgroundColor: '#f1f8ff', fontWeight: 'bold', fontSize: 18 },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: 20 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    button: { flex: 1, margin: 20 }
});