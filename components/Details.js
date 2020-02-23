import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import PageHeader from './PageHeader';

const heads = [ 'بلوچی', 'English', 'Latin', 'Latin SCI', 'POS', 'فارسی ', 'اردو'];
const heightArr = [50, 50, 50, 50, 50, 50, 50]
const widthArr = [ 35, 35, 35, 35, 35, 35, 35]

class Details extends React.Component {

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
        const colData = [this.state.bcc, this.state.eng, this.state.bccLatinCom, this.state.bccLatinSci,
            this.state.pos, this.state.fa, this.state.ur];
        return (
            <View style={styles.container}>
                <PageHeader />
                <View style={styles.container}>
                    <Table borderStyle={{borderWidth: 2}}>
                        <TableWrapper style={styles.wrapper}>
                            <Col data={heads} style={styles.title} heightArr={heightArr} textStyle={styles.head} />
                            <Col data={colData} style={styles.title} heightArr={heightArr}  textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </View>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
export default Details;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', borderRadius:20},
    head: { textAlign: 'center', height: 40, backgroundColor: '#f1f8ff', fontWeight: 'bold', fontSize: 18 },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center', color: 'red',fontWeight: 'bold', fontSize: 18 }
});