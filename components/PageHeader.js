import React from 'react';
import { Header, Image } from 'react-native-elements';

const Picture = require('../pics/uu-logo-s.jpg');

class PageHeader extends React.Component {
    render() {
        return (
            <Header 
            containerStyle={{ 
                height: 100, 
                width: '100%', 
                backgroundColor: '#3D6DCC',
            justifyContent: 'space-around' }}
                leftComponent={<Image source={Picture}
                style={{ width: 80, height: 80 }}/> }
                centerComponent={{ text: 'بلۆچی انگرێزی دیکشنری', style: { color: '#fff' , textAlign: 'right'} }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );

    }
}
export default PageHeader;