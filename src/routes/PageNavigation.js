import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile, Detail } from '../pages';
import DrawerNavigation from '../routes/DrawerNavigation';

const Stack = createStackNavigator();
const PageNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DrawerNavigation} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default PageNavigation;