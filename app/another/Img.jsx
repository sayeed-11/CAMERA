import { View, FlatList, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

const Img = () => {
    const { img, index } = useLocalSearchParams();
    const [data] = useState(JSON.parse(img));

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const getItemLayout = (data, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index,
    });

    const MemoizedImage = React.memo(({ uri }) => (
        <Image
            style={{
                width: windowWidth,
                height: windowHeight,
                borderRadius: 10,
                objectFit: 'contain',
            }}
            source={{ uri }}
        />
    ));

    const renderItem = ({ item }) => <MemoizedImage uri={item.uri} />;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                initialScrollIndex={index}
                getItemLayout={getItemLayout}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                }}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                initialNumToRender={5} // Render 5 items initially
                windowSize={5}          // Only render 5 screens worth of items
                removeClippedSubviews={true} // Remove items that are off-screen
                maxToRenderPerBatch={5}
            />
        </View>
    );
};

export default Img;
