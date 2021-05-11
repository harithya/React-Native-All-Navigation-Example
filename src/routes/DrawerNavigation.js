import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, Register } from '../pages';
import BottomNavigation from '../routes/BottomNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomNavigation} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation;