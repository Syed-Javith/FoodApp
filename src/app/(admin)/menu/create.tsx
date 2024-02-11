import { View, Text, TextInput, Pressable, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
const create = () => {
    const params = useLocalSearchParams();
    const isUpdate = params['id'] ? true : false;
    const [name, setName] = useState("");
    const [price, setPrice] = useState<string>("0");

    const [image, setImage] = useState<string | null>(null);

    const create = () => {

    }
    const update = () => {

    }
    const deleteItem = () => {

    }
    const validate = () => {
        if(name.length === 0) return false;
        if( isNaN( Number(price) )) return false;
        if(isUpdate) update();
        else create();
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <Text>create {name}</Text>
            <Image
                source={{ uri: image ?? "" }}
                height={200}
                width={200}
            />
            <Pressable onPress={pickImage}>
                <Text>Image</Text>
            </Pressable>
            <Text>Name</Text>
            <TextInput
                placeholder='name'
                value={name}
                onChangeText={setName}
            />
            <Text>Price</Text>
            <TextInput
                placeholder='price'
                value={price}
                onChangeText={setPrice}
                keyboardType='numeric'
            />
            <Button
            title='Submit'
            onPress={validate}
            />
            <Button
            onPress={deleteItem}
            title='delete'
            />
        </View>
    )
}

export default create
