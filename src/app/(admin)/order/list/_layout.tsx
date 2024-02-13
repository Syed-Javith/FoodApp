import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { SafeAreaView } from 'react-native';

const TopNav = withLayoutContext(createMaterialTopTabNavigator().Navigator)

export const layout = () => {
    return <SafeAreaView>
        <TopNav />
    </SafeAreaView>
}