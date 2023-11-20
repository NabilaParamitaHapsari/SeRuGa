import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Message, Setting2 } from 'iconsax-react-native';
import {BlogList} from '../../../data';
import { ItemBookmark } from '../../components';
import { fontType, colors } from '../../theme';
const Informasi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header }backgroundColor= {colors.pich2()}>
        <Message color={colors.white()} variant="Linear" size={24} />
        <Text style={styles.title}>SeRuGa</Text>
        <Setting2 color={colors.white()} variant="Linear" size={24} />
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
export default Informasi;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich1(),
  },
  header: {
    paddingHorizontal: 25,
    gap: 107,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
   
  },
  header2: {
    paddingHorizontal: 25,
    gap: 80,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
});