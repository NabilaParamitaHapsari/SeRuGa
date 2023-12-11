import {ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import {Edit, Logout, Setting2} from 'iconsax-react-native';
import React, { useState, useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData} from '../../../data';
import {ItemSmall} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import {formatNumber} from '../../utils/formatNumber';
import axios from 'axios';

const Profile = () => {
  // const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  // const getDataBlog = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://6571705ed61ba6fcc0128652.mockapi.io/serugaapp/blog',
  //     );
  //     setBlogData(response.data);
  //     setLoading(false)
  //   } catch (error) {
  //       console.error(error);
  //   }
  // };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     getDataBlog();
  //   }, [])
  // );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>SeRuGa </Text>
          <Setting2 color={colors.white()} variant="Linear" size={24} />
          
        <TouchableOpacity>
            <Logout color={colors.white()} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{gap: 15, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{gap: 5, alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>
              ---- Halo --- {ProfileData.createdAt}
            </Text>
          </View>
          {/* <View style={{flexDirection: 'row', gap: 20}}>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>{ProfileData.blogPosted}</Text>
              <Text style={profile.tag}>Posted</Text>
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.following)}
              </Text>
              <Text style={profile.tag}>Following</Text>
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.follower)}
              </Text>
              <Text style={profile.tag}>Follower</Text>
            </View>
          </View> */}
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich(),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 5,
    gap: 10,
    backgroundColor: colors.pich2(),
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
const profile = StyleSheet.create({
  pic: {width: 150, height: 150, borderRadius: 80},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.pich1(),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
});