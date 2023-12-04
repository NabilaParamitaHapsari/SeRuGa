import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Add, Message, Setting2} from 'iconsax-react-native';
import {BlogList} from '../../../data';
import { ItemBookmark } from '../../components';
import { fontType, colors } from '../../theme';
const Bookmark = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header2}>
          <Message color={colors.white()} variant="Linear" size={24} />
          <Text style={styles.title2}>SeRuGa</Text>
          <Setting2 color={colors.white()} variant="Linear" size={24} />
        </View>
      <View style={styles.header}>
        <Text style={styles.title}>Barang Tersedia</Text>
        <Add color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:24, gap:10, paddingVertical:10}}>
        {BlogList.map((item, index) => (
          <ItemBookmark item={item} key={index} />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich1(),
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  header2: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: colors.pich(),
   
  },
  title2: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  title: {
    fontSize: 15,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
    letterSpacing: -0.3,
  },
});