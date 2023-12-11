import {StyleSheet, Text, View, ScrollView, FlatList, Animated, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {Message, SearchNormal1, Setting2} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation } from "@react-navigation/native";

const data = [
  {id: 1, label: 'Tanah Liat'},
  {id: 2, label: 'Keramik'},
  {id: 3, label: 'Kerajinan'},
  {id: 4, label: 'Seni RUpa'},
];

const ItemRecent = ({item}) => {

  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Discover = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
   });
  const recentBlog = BlogList.slice(5);
  return (
    <View style={styles.container}>
       <View style={styles.header2}>
          <Message color={colors.white()} variant="Linear" size={24} />
          <Text style={styles.title}>SeRuGa</Text>
          <Setting2 color={colors.white()} variant="Linear" size={24} />
        </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
        <Animated.View style={[styles.header, {transform: [{translateY: recentY}]}]}>
          <View style={styles.bar}>
            <SearchNormal1 size={18} color={colors.black()} variant="Linear" />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>Daftar Barang</Text>
        <FlatListRecent />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 170}}>
        <View style={styles.listCard}>
        {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
        ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.pich(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 60,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.pich(),
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
    zIndex: 1000,
    backgroundColor: colors.pich1(),
   
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
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
const recent = StyleSheet.create({
  container:{
    position: 'absolute',
    backgroundColor: colors.pich(),
    zIndex: 999,
    top: 120,
    left: 0,
    right: 0,
    elevation: 1000,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.black(0.15),
    borderWidth: 1,
    backgroundColor: colors.black(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
});