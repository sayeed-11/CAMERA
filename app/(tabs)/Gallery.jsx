import { View, Text, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from 'expo-media-library'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Gallery = () => {
    const [hasMediaPermission, setMediaPermission] = useState(false);
    const [images, setImages] = useState([]);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setMediaPermission(status === 'granted');
            if (status === 'granted') {
                getFolders()
            }
        })();
    }, []);

    const getFolders = async () => {
        const albums = await MediaLibrary.getAlbumsAsync();
        setFolders(albums);
    }

    if (!hasMediaPermission) {
        return <Text>No access to media library. Please allow permissions.</Text>;
    }
    return (
        <View style={{
            flex: 1,
            // paddingHorizontal: 10,
            // backgroundColor: 'gray'
        }}>
            <SafeAreaView style={{
                backgroundColor: '#2e4e5f',
                paddingVertical:10,
                paddingHorizontal:10
            }}>
                <Text style={{
                    color: 'white',
                    fontSize:25
                }}>Gallery</Text>
            </SafeAreaView>
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <FlatList
                    data={folders}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        width: '100%',
                        // alignItems:'center'
                    }}
                    renderItem={({ item }) => {
                        return (
                            <ImageFolder title={item.title} />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Gallery


const ImageFolder = ({ title }) => {
    const [img, setImg] = useState();
    useEffect(() => {
        loadFhoto();
    }, [])

    const loadFhoto = async () => {
        try {
            const dcmiAlbum = await MediaLibrary.getAlbumAsync(title);
            const media = await MediaLibrary.getAssetsAsync({
                album: dcmiAlbum,
                sortBy: [[MediaLibrary.SortBy.creationTime, false]],
                mediaType: [MediaLibrary.MediaType.photo, MediaLibrary.MediaType.video], // You can also use 'video' or 'all'
                first: 1,         // Number of photos to load
            });
            setImg(media.assets[0].uri)

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <TouchableOpacity onPress={() => {
            router.push({
                pathname : "/AllImages",
                params : {title : title}
            })
        }} style={{
            width: width * 0.3,
            aspectRatio: 1 / 1.2,
            // backgroundColor: 'white',
            margin: 5
        }}>
            <View>
                <Image style={{
                    width: '100%',
                    aspectRatio: 1 / 1,
                    borderRadius:10
                }} source={{ uri: img }} />
            </View>
            <Text>{title.length > 10 ? title.slice(0, 10) + "...." : title}</Text>
        </TouchableOpacity>
    )
}