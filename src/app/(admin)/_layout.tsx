import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '../../components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen name="index" options={{ href : null ,headerShadowVisible : false }}/>
      <Tabs.Screen name="menu" options={{ title : "Menu" ,  tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,href: "/(admin)/menu" }} />
      <Tabs.Screen name="order" options={{ title : "Orders" ,  tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />, href: "/(admin)/order" }} />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          href : "/"
        }}
      />

    </Tabs>
  );
}
