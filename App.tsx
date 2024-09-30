// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({ navigation }: Props) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }: Props) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
