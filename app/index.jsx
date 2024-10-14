import React from 'react';
import { View, Text } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const MyComponent = () => {
  return (
    <View>
      <Text>Watch this video</Text>
      <YoutubeIframe
        height={200}
        videoId={'dQw4w9WgXcQ'}  // Example video ID
      />
    </View>
  );
};

export default MyComponent;
