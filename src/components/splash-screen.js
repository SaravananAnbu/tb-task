import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

const win = Dimensions.get('window');

class SplashScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    navigate = () => {
        this.props.navigation.navigate('App')
    }
    render() {
        console.log(this.props)
        return (
            <View style={styles.body}>
                <ImageBackground source={{ uri: "https://image.freepik.com/free-vector/top-view-cups-tea-with-tea-pot_52683-32344.jpg" }} style={styles.image}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.navigate}>
                            <Text style={{ color: '#fff', fontSize: 21, padding: 15, textAlign: "center" }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column"
    },
    button: {
        backgroundColor: "#8b9f76",
        textAlign: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end"
    }
});


export default SplashScreen;