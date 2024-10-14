import { useState, useRef } from 'react';
import { View, StyleSheet, Button, Dimensions, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av'

const {width, height} = Dimensions.get('window');

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  // console.log(status);

  // console.log(video.current);
  
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        // useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        isMuted={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        usePoster={true}
        posterSource={{uri: 'https://i.pinimg.com/564x/e6/ea/6b/e6ea6bf24d576df48b6f64ebfd8539d4.jpg'}}
        posterStyle={{
          width:width,
          height : height * 0.35
        }}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      {/* <Image style={{
        width:100,
        height:100
      }} source={{uri : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: width,
    height: height * 0.35,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
