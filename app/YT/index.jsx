import { View, Text, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import jsondata from '../../Data/media.json'
import YouTube from '../../assets/icons/YouTube'
import Shorts from '../../assets/icons/Shorts'
// import axios from 'axios';
import axios from 'axios'

const { width, height } = Dimensions.get('window');


const barsData = [
    "All",
    "Music",
    "Mixes",
    "Movies",
    "Sports",
    "Games",
    "Depelopment",
    "Artificial intelligence"
]

const shortsData = [
    {
        id: 1,
        url: "https://i.pinimg.com/736x/ac/ae/0f/acae0f19de54e8af64cc169466a899d5.jpg",
        title: "Thumbnail Expert 💯 || Reels Cover || Trading Thumbnail || Graphic designer 🚀"
    },
    {
        id: 2,
        url: "https://i.pinimg.com/736x/f1/96/9b/f1969bcd6c2f6eccaf6b184ef71edfcb.jpg",
        title: "Ikut Yesus Pasti Enak? - Ps. Steven Adolf Ngui"
    },
    {
        id: 3,
        url: "https://i.pinimg.com/564x/82/03/47/820347eb8c40484fa82faef9b1b4ba47.jpg",
        title: "Apakah Anda Orang yang Congkak? - Pdm. Yohana Wati"
    },
    {
        id: 4,
        url: "https://i.pinimg.com/736x/8b/fb/7a/8bfb7ae3a11d66c227138fab1f8fd16c.jpg",
        title: "Tokio Marine - Social Media design - Insurance content"
    },
    {
        id: 5,
        url: "https://i.pinimg.com/736x/27/26/6d/27266d654bd63cb611e1fb295d81ed42.jpg",
        title: "Tokio Marine - Social Media design - Insurance content"
    },
    {
        id: 6,
        url: "https://i.pinimg.com/736x/fe/4d/1c/fe4d1c36dbb758a7ec2a7f37fa8eb469.jpg",
        title: "Tokio Marine - Social Media design - Insurance content"
    },
    {
        id: 7,
        url: "https://i.pinimg.com/736x/05/5d/ac/055daccd926d6998c6f9c725da998246.jpg",
        title: "Tokio Marine - Social Media design - Insurance content"
    },
    {
        id: 8,
        url: "https://i.pinimg.com/736x/95/3f/47/953f47420d5412ac588dd7f6d5752764.jpg",
        title: "Cara Cepat Mendapatkan Ilmu Baru"
    },
    {
        id: 9,
        url: "https://i.pinimg.com/564x/44/f6/ec/44f6ec79d2604029298fa10d5d371b93.jpg",
        title: "Habib Umar bin Hafidz"
    },
    {
        id: 10,
        url: "https://i.pinimg.com/564x/4d/7b/82/4d7b827b3077081d1b0d3e0200e65874.jpg",
        title: "Arti Sebuah Nasihat"
    },
]

const index = () => {
    return (
        <View style={{
            flex: 1, backgroundColor: 'black',
            gap: 10
        }}>
            <SafeAreaView style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10
            }}>
                <View>
                    <YouTube />
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <Ionicons name='albums-outline' color={'white'} size={24} />
                    <Ionicons name='notifications-outline' color={'white'} size={24} />
                    <Ionicons name='search-outline' color={'white'} size={24} />
                </View>
            </SafeAreaView>


            <View style={{
                paddingHorizontal: 10,
            }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 5
                    }}
                    bounces={false}
                >
                    <View style={{
                        backgroundColor: 'white',
                        padding: 5,
                        borderRadius: 3
                    }}>
                        <Ionicons name='compass-outline' size={20} />
                    </View>
                    {
                        barsData.map((item, index) => {
                            return (
                                <View style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    padding: 5,
                                    borderRadius: 3,
                                    paddingHorizontal: 10
                                    // marginHorizontal:3
                                }} key={index}>
                                    <Text style={{ color: 'white' }}>{item}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <ScrollView>
                <ShortsVideo />
                <TrendingVideos />
            </ScrollView>
        </View>
    )
}

export default index


const ShortsVideo = () => {
    // const shortsData = (jsondata.categories[0].videos);

    // console.log(shortsData[0]);

    return (
        <View style={{
            // paddingHorizontal: 10,
            marginTop: 5
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingHorizontal: 10,
                paddingVertical: 10
            }}>
                <View><Shorts /></View>
                <Text style={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 18
                }}>Shorts</Text>
            </View>
            <View>
                <FlatList
                    data={shortsData}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{
                                marginLeft: width * 0.025,
                                borderRadius: 10,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <Image style={{
                                    width: width * 0.40,
                                    aspectRatio: 9 / 16,
                                    objectFit: 'cover',
                                    transform: [{ scale: 1.5 }]
                                }} source={{ uri: item.url }} />
                                <View style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    padding: 5
                                }}>
                                    <View style={{
                                        alignItems: 'flex-end'
                                    }}>
                                        <Ionicons name='ellipsis-vertical-outline' color={'white'} size={20} />
                                    </View>
                                    <Text style={{
                                        color: "white",
                                        fontWeight: 700,
                                    }}>{item.title.length > 40 ? item.title.slice(0, 30) + "..." : item.title}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}



const TrendingVideos = () => {
    const [trendingData, setTrendingData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
            geo: 'US',
            lang: 'en'
        },
        headers: {
            'x-rapidapi-key': 'ca9625797bmsh5b5956e14973788p164b53jsn887203b8cc8a',
            'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setTrendingData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchData();
    }, [])

    if (trendingData.length === 0) return null;
    return (
        <View style={{
            marginTop: 20,
            gap: 20
        }}>
            {
                trendingData.map((item, index) => {
                    return (
                        <VideoSection
                            key={item.videoId}
                            item={item}
                        />
                    )
                })
            }
        </View>
    )
}

const VideoSection = ({ item }) => {
    return (
        <View>
            <View style={{
                position:"relative"
            }}>
                <Image style={{
                    width: width,
                    aspectRatio: 16 / 9
                }} source={{ uri: item.thumbnail[0].url }} />
                <Text style={{
                    position:"absolute",
                    color:'white',
                    bottom : 5,
                    right:5,
                    backgroundColor:'rgba(0,0,0,0.5)',
                    paddingHorizontal:5,
                    fontSize:12,
                    borderRadius:3,
                    paddingVertical:3
                }}>{item.lengthText}</Text>
            </View>

            <View style={{
                padding: 15,
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15
                }}>
                    <View style={{
                        position: 'relative'
                    }}>
                        <Image style={{
                            width: 40,
                            aspectRatio: 1 / 1,
                            borderRadius: 50
                        }} source={{ uri: item.channelThumbnail[0].url }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white' }}>{item.title}</Text>
                        <Text
                            style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
                        >
                            {item.channelTitle + " • " + (Number(item.viewCount) / 1000).toFixed(0) + "K" + " • " + item.publishedText}
                        </Text>
                    </View>
                </View>
                <View>
                    <Ionicons name='ellipsis-vertical' color={'white'} size={20} />
                </View>
            </View>
        </View>
    )
}