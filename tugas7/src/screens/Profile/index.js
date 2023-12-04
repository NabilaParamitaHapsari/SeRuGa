import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Setting2,Logout, Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const data = BlogList.slice(5);
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SeRuGa   </Text>
        <Setting2 color={colors.white()} variant="Linear" size={24} />
        <Logout color={colors.white()} variant="Linear" size={24} />
      </View>
      <View style={{gap: 10, alignItems: 'center'}}>
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
            <Text style={profile.info}>~~ Halo ~~{ProfileData.createdAt}
            </Text>
          </View>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
       
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
       
        <View style={{paddingVertical: 10, gap:10}}>
          {data.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddBlog")}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
         </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich2(),
  },
  header: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 5,
    gap: 10,
    backgroundColor: colors.pich1(),
  },
  header2: {
    paddingTop: 25,
    paddingHorizontal: 25,
    gap: 79,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    
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
  pic:{ width: 150, height: 150, borderRadius: 80},
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