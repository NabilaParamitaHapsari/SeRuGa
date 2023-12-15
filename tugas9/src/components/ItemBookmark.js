import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const ItemBookmark = ({item, onPress, variant}) => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity style={styles.cardItem} onPress={()=>navigation.navigate('BlogDetail', {blogId: item.id})}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <View style={styles.cardContent}>
            <View style={styles.cardCategory}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryLabel}>{item.category}</Text>
              </View>
            </View>
          </View>
        </FastImage>
        <View style={{gap: 20, paddingHorizontal: 15, paddingVertical: 10}}>
          <View style={{gap: 10}}>
            <Text
              style={styles.blogTitle}>
              {item.title}
            </Text>
            <Text
              style={styles.blogContent}>
              {truncateTextByWords(item.content, 10)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default ItemBookmark;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.pich2(),
    borderRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 145,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
 
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(0.6),
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  categoryBadge: {
    backgroundColor: colors.pich1(),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryLabel: {
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  blogTitle:{
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  blogContent:{
    fontSize: 12,
    lineHeight: 20,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(),
  }
});