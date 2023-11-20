import {StyleSheet, Text, View, ScrollView, FlatList, TextInput} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal1,Profile2User, Message, Information, Shop, Note, Home3, Setting3, Setting, Setting2} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const Daftar = () => {
  const recentBlog = BlogList.slice(5);
  return (
    <View style={styles.container}>
     
      <View style={styles.header }backgroundColor= {colors.pich1()}>
        <Message color={colors.white()} variant="Linear" size={24} />
        <Text style={styles.title}>SeRuGa</Text>
        <Setting2 color={colors.white()} variant="Linear" size={24} />
      </View>  
      <View style={styles.header3}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.black()} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>  
       

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Daftar;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.pich(),
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  title2: {
    fontSize: 15,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    paddingLeft : 25,
    paddingTop : 20,
    paddingBottom : 15,
  },
  header: {
    paddingHorizontal: 25,
    gap: 100,
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
  header3: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 3,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    lineHeight: 18,
  },
});
// const recent = StyleSheet.create({
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 25,
//     borderColor: colors.white(),
//     borderWidth: 1,
//     backgroundColor: colors.pich(),
//   },
//   label: {
//     fontSize: 12,
//     fontFamily: fontType['Pjs-Medium'],
//     color: colors.black(),
//   },
//   text: {
//     fontSize: 14,
//     fontFamily: fontType['Pjs-Bold'],
//     color: colors.black(),
//     paddingVertical: 20,
//     paddingHorizontal: 25,
//   },
// });