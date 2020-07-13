import React from 'react';
import { Dimensions } from 'react-native';
import { withNavigationFocus, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from '../../components/splash-screen';
import HomePageScreen from '../home';
import InventoryScreen from '../inventory';

const { width, height } = Dimensions.get('window');

const AppContainer = createStackNavigator(
    {
        HomePage: {
            screen: HomePageScreen,
            navigationOptions: {
                gestureEnabled: false,
            }
        },
        Inventory: {
            screen: InventoryScreen,
            navigationOptions: {
                gestureEnabled: true,
            }
        }
    }, {
        initialRouteName: 'HomePage'
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000',
            },
        },
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false,
            headerTitleAlign: 'center',
        }
    }
);


const switchScreen = createDrawerNavigator({
    myDrawer: {
        screen: AppContainer
    }
})

export const myDrawerScreen = createSwitchNavigator({
    AuthLoading: withNavigationFocus(SplashScreen),
    App: switchScreen
})