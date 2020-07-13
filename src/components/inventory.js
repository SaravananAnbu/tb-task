import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Inventory extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            isCreate: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit() {
        if(this.state.isCreate) {
            if(this.state.name !== "" && this.state.description !== "" && !isNaN(Number(this.state.price))) {
                this.props.createItemToInventory({ name: this.state.name, description: this.state.description, price: Number(this.state.price) }).then(
                    res => {
                        this.props.navigation.goBack()
                    }
                )
            }
        } else {
            this.props.navigation.goBack()
        }
    }
    componentDidMount() {
        console.log(this.props)
        if(this.props.navigation.state.params && this.props.navigation.state.params.id) {
            this.props.fetchInventorybyId(this.props.navigation.state.params.id); 
        } else {
            this.setState({ isCreate: true })
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.inventory !== this.props.inventory) {
            this.setState({ 
                name: this.props.inventory.name,
                description: this.props.inventory.description,
                price: this.props.inventory.price.toString(),
            })
        }
    }
    render() {
        const { inventory } = this.props;
        const { isCreate, name, description, price } = this.state;
        console.log(inventory, "inventory")
        return (
            <View style={styles.body}>
                <ImageBackground source={{ uri: "https://image.freepik.com/free-vector/top-view-cups-tea-with-tea-pot_52683-32344.jpg" }} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText1}>Sadguru Amrit-Tulya's</Text>
                        <Text style={styles.titleText2}>Tea Shop</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.container, { width: '80%'}}>
                            <Image
                                resizeMode="contain"
                                style={{ width: '50%', height: 200, alignSelf: 'center'}}
                                source={{ uri: "https://image.freepik.com/free-photo/top-view-cup-chamomile-tea-with-lemon-mint-leaves-sugar-white-surface-horizontal_176474-5080.jpg "}}
                            />
                            <Text style={styles.label}>Details</Text>
                            <TextInput
                                style={styles.text_input}
                                placeholder="Name"
                                placeholderTextColor="#8b9f76d1"
                                onChangeText={(text) => this.setState({ name: text })}
                                value={name}
                                editable={isCreate}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Description"
                                placeholderTextColor="#8b9f76d1"
                                onChangeText={(text) => this.setState({ description: text })}
                                value={description}
                                editable={isCreate}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Price"
                                placeholderTextColor="#8b9f76d1"
                                onChangeText={(text) => this.setState({ price: text })}
                                value={price}
                                editable={isCreate}
                                keyboardType="numeric"
                            />
                            <TouchableOpacity style={{ width: '100%',  marginTop: 30 }} onPress={this.handleSubmit}>
                                <View style={styles.button}>
                                    <Text style={styles.button_text}>{ isCreate ? "Create" : "OK"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
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
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffb8'
    },
    label: {
        color: '#8b9f76d1',
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 25,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#8b9f76d1',
        padding: 15,
    },
    button_text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    text_input: {
        borderWidth: 2,
        borderColor: '#8b9f76d1',
        borderRadius: 5,
        width: '100%',
        color: '#8b9f76d1',
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
        marginBottom: 20
    },
})

export default Inventory;