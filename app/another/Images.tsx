import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';

const Gallery = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);

  // Request permission to access media library
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status === 'granted') {
        loadPhotos();
      }
    })();
  }, []);

  // Fetch photos from media library
  const loadPhotos = async () => {
    const albums = await MediaLibrary.getAlbumsAsync();
    const dcmiAlbum = await MediaLibrary.getAlbumAsync(albums[3].title);
    const media = await MediaLibrary.getAssetsAsync({
      album :dcmiAlbum,
      sortBy : [[MediaLibrary.SortBy.creationTime, false]],
      mediaType: [MediaLibrary.MediaType.photo, MediaLibrary.MediaType.video], // You can also use 'video' or 'all'
      first: 100,         // Number of photos to load
    });

    setPhotos([...media.assets]);
  };

  if (!hasPermission) {
    return <Text>No access to media library. Please allow permissions.</Text>;
  }

  return (
    <View style={styles.container}>
    <StatusBar style='dark'/>
      <FlatList
        contentContainerStyle={{
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center'
        }}
        data={photos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    paddingTop:30
  },
  image: {
    width: Dimensions.get('window').width * 0.3,
    aspectRatio:1/1,
    margin: 5,
    borderRadius:10
  },
});

export default Gallery;
