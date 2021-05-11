import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello World</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <Text>To Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
