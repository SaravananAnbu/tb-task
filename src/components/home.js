import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet, ScrollView, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';

class HomePage extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }
    componentDidMount() {
        this.props.fetchInventories(); //Am tring to fetch but it shows CORS error. Hence I used JSON
    }
  
    deleteItem = (id) => {
        this.props.deleteItemFromInventory(parseInt(id))
    }
    render() {
        const { inventories } = this.props;
        console.log(this.props.inventories)
        return (
            <View style={styles.body}>
                <ImageBackground source={{ uri: "https://image.freepik.com/free-vector/top-view-cups-tea-with-tea-pot_52683-32344.jpg" }} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText1}>Sadguru Amrit-Tulya's</Text>
                        <Text style={styles.titleText2}>Tea Shop</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "orange", margin: 10 }}
                        onPress={() => this.props.navigation.navigate('Inventory')}>
                        <View style={[ styles.button, { padding: 8, paddingHorizontal: 20, borderLeftWidth: 1}]}>
                            <Text style={[ styles.button_text, { fontSize: 18 }]}>CREATE NEW</Text>
                        </View>
                    </TouchableOpacity>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={inventories}
                            renderItem={(data, i) => {
                                const item = data.item;
                                return (
                                    <View key={i} style={styles.card}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <View style={{ textAlign: "center", flex: 1, alignItems: "center", padding: 10}}>
                                            <Image source={{ uri: "https://image.freepik.com/free-photo/top-view-cup-chamomile-tea-with-lemon-mint-leaves-sugar-white-surface-horizontal_176474-5080.jpg" }} style={{ height: 100, marginBottom: 10, width:"50%" }}/>
                                            <Text style={styles.text}>Description: {item.description}</Text>
                                            <Text style={styles.text}>Price: {item.price}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: "100%", backgroundColor: "#8b9f76d1" }}>
                                            <TouchableOpacity style={{ flex: 1 }}
                                                onPress={() => this.props.navigation.push('Inventory', { id: item.id })}>
                                                <View style={[ styles.button, { padding: 8, paddingHorizontal: 20, borderRightWidth: 1}]}>
                                                    <Text style={[ styles.button_text, { fontSize: 18 }]}>View</Text>
                                                </View>
                                            </TouchableOpacity> 
                                            <TouchableOpacity style={{ flex: 1 }}
                                                onPress={() => this.deleteItem(item.id)}>
                                                <View style={[ styles.button, { padding: 8, paddingHorizontal: 20, borderLeftWidth: 1}]}>
                                                    <Text style={[ styles.button_text, { fontSize: 18 }]}>Delete</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
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
    card: {
        height: 300,
        margin: 20,
        backgroundColor: '#ffffffb8',
        elevation: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        opacity: 1,
    },
    titleContainer: {
        backgroundColor: '#8b9f76d1',
        padding: 10
    },
    titleText1: {
        color: '#fff',
        textAlign: "center",
        fontSize: 21
    },
    titleText2: {
        color: 'orange',
        textAlign: "center", 
        fontSize: 18
    },
    container: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: '#8b9f76d1'
    },
    text: {
        color: '#000',
        textAlign: "left",
        padding: 5,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8b9f76d1',
        borderColor: "#fff",
        padding: 15
    },
    button_text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
})

export default HomePage;