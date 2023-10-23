/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput} from 'react-native';
import {Element3, SearchNormal, Message, ShoppingBag, SearchNormal1, Category, Profile2User, Task, Shop, NotificationBing, Notification1, Notification, Information, Star1, Star, StarSlash, Note, Note1, NoteFavorite, NoteAdd} from 'iconsax-react-native';
import {BlogList, CategoryList} from './data';
import { fontType, colors } from './src/theme';
import { ListHorizontal, ItemSmall } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header }backgroundColor= {colors.pich1()}>
       <Message color={colors.white()} variant="Linear" size={24} />
        <Text style={styles.title}>SeRuGa</Text>
        <Profile2User color={colors.white()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <View style={styles.header}>
          
          <Star color={colors.black()} variant="Linear" size={25} style={styles.searchIcon} />
          <Information color={colors.black()} variant="Linear" size={25} style={styles.searchIcon} />
          <Task color={colors.black()} variant="Linear" size={25} style={styles.searchIcon} />
          <Shop color={colors.black()} variant="Linear" size={25} style={styles.searchIcon} />
          <Note color={colors.black()} variant="Linear" size={25} style={styles.searchIcon} />
      
      </View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  const horizontalData = BlogList.slice(0,4);
  const verticalData = BlogList.slice(4,9);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCard}>
        <View style={styles.header}>
          <TextInput
            // style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
      </View>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
    
  );
  
};

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};
const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.white() : colors.black();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
    
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
  // searchbar: {
  //   width: '90%',
  //   height: 40,
  //   borderColor: colors.pich1(),
  //   // borderColor: 'gray',
  //   borderWidth: 1,
  //   borderRadius: 20,
  //   paddingLeft: 40,
  //   fontFamily: fontType['Pjs-Bold'],
  //   fontSize: 15,
  // },
  // searchIcon: {
  // position: 'absolute',
  // top: 15,
  // right: 30,
  // },
});