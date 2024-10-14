import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Alert, Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as MediaLibrary from 'expo-media-library'

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

  const cameraRef = useRef(null)

  if (!permission || !mediaPermission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted || mediaPermission.status !== "granted") {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={() => {
          requestPermission;
          requestMediaPermission;
        }} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePic = async () => {
    console.log('take a pic');
    if (cameraRef.current) {
      const options = {
        quality: 1,
        based64: true,
        exif: false
      }
      const takePhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takePhoto.uri);
      console.log(takePhoto.uri);

    }

  }

  const handleRetake = () => {
    setPhoto(null);
    console.log(photo);
  }

  if (photo) {
    return (<PhotoSection photo={photo} handleRetake={handleRetake} />)
  }
  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        mirror={true}
      />
      <View style={{
        flex: 1,
        position: 'absolute',
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50

      }}>
        <View></View>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 50
          }} onPress={toggleCameraFacing}>
            <Ionicons name='camera-reverse-outline' size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: 'rgba(0,0,0, 0.3)',
            padding: 20,
            borderRadius: 50,
            borderWidth:2,
            borderColor:'#FFF'
          }} onPress={takePic}>
            <Ionicons name='camera-outline' size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity disabled style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 50
          }} onPress={takePic}>
            <Ionicons name='videocam-outline' size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    position: 'absolute',
    // alignItems:'end',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});



const PhotoSection = ({ photo, handleRetake }) => {
  const { width, height } = Dimensions.get('window');
  const savePic = async () => {
    if (photo) {
      try {
        const asset = await MediaLibrary.createAssetAsync(photo);
        const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id)
        console.log(asset);
        console.log(assetInfo);
      } catch (error) {
        console.log(error);

      }
    }
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image style={{
          width: width,
          height: height * 0.9
        }} source={{ uri: photo }} />
      </SafeAreaView>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        gap: 50,
        alignItems: 'center',
        height:height * 0.1,
        // backgroundColor:'red'
      }}>
        <TouchableOpacity onPress={handleRetake}>
          <Ionicons name='sync-outline' size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{savePic();handleRetake();}}>
          <Ionicons name='checkmark' size={40} />
        </TouchableOpacity>
      </View>
    </View>
  )
}