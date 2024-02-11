import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme.web';


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
    <Stack>
    <Stack.Screen name="index" options={{ title: 'Admin Menu' , 
      headerShown : true,
      headerRight: () => (
        <Link href={"/cart"} asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="plus-square-o"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),
    } } />
    <Stack.Screen name="[id]" options={{ title: 'Admin Menu' , 
      headerShown : true,
      headerRight: () => (
        <Link href={"/cart"} asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="pencil-square-o"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),
    } } />
  </Stack>
  );
}