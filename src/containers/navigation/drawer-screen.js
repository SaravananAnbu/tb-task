import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { Text, View, StyleSheet, Modal, ActivityIndicator, ScrollView } from 'react-native';
import { Content, List, ListItem } from 'native-base';

class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigateName: "",
            userName: '',
            userEmail: '',
            userImage: '',
            isVisible: false,
            modalVisible: false,
            networkStatus: true,
            doNotDisturb: false,
            confirmationStatus: false
        }
    }


navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
} 

componentDidMount() {
    this.setState({ isVisible: false })
}

handleConnectivityChange = (isConnected) => {
    if ((isConnected && true === isConnected) || (isConnected.type !== 'none')) {
        this.setState({ networkStatus: true });
    } else {
        this.setState({ networkStatus: false });
    }
};

render() {
    const { user } = this.props;
    return (
        <View style={{ flex: 1 }}>
            <Content style={{ marginTop: 0, marginLeft: -5 }}>
                <ScrollView>
                    <List>
                        <ListItem style={{ marginLeft: 0, paddingLeft: 15 }} onPress={() => this.props.descriptors.myDrawer.navigation.push('Dashboard')}>
                            <Text style={styles.link_text}>Dashboard</Text>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0, paddingLeft: 15 }} onPress={() => this.props.descriptors.myDrawer.navigation.push('ItemList')}>
                            <Text style={styles.link_text}>Items List</Text>
                        </ListItem> 
                    </List>
                </ScrollView>
            </Content>

            <Modal style={{ width: 50, height: 50, borderRadius: 50 / 2 }} transparent={true} animationType={'none'} visible={this.state.isVisible} onRequestClose={() => null}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size="large" animating={this.state.isVisible} />
                    </View>
                </View>
            </Modal>
        </View>
        );
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#000000b8'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    link_text: {
        fontSize: 17,
        color: '#000'    
    }
});


export default DrawerScreen;
