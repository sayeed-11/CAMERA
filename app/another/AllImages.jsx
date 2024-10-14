import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import * as MediaLibrary from 'expo-media-library'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'

const Images = () => {
  const { title } = useLocalSearchParams()

  const [img, setImg] = useState([]);
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
        first: dcmiAlbum.assetCount,         // Number of photos to load
      });
      setImg(media.assets)
      console.log(media.assets[0]);


    } catch (error) {
      console.log(error);

    }

  }
  return (
    <View style={{
      flex: 1,
      padding: 5
    }}>
      <FlatList
        data={img}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{ position: 'relative' }}
          onLongPress={() => {console.log('long press');
          }}
            onPress={() => {
              router.push({
                pathname: '/Img',
                params: { img: JSON.stringify(img), index: index }
              })
            }}>
            <Image style={{
              width: Dimensions.get('window').width * 0.3,
              aspectRatio: 1 / 1,
              margin: 5,
              borderRadius: 10
            }} source={{ uri: item.uri }} />
            <View style={{
              position: 'absolute',
              zIndex: 100,
              bottom: 5,
              right: 5
            }}>
              {
                item.mediaType === "video" ? <Text style={{
                  backgroundColor: 'black',
                  color: 'white',
                  paddingHorizontal: 5,
                  borderRadius: 5,
                  fontSize: 10
                }}>{
                    `${((item.duration) / 60).toFixed(0)} : ${((item.duration) % 60).toFixed(0)}`
                  }</Text> : <Text></Text>
              }
            </View>
          </TouchableOpacity>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      // initialNumToRender={10}
      // windowSize={5}
      />
    </View>
  )
}

export default Images