import {ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import {Edit, Setting2} from 'iconsax-react-native';
import React, { useState, useCallback} from 'react';
import {ItemSmall} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import {formatNumber} from '../../utils/formatNumber';
import axios from 'axios';

const Jual = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://6571705ed61ba6fcc0128652.mockapi.io/serugaapp/blog',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>SeRuGa </Text>
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
        
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Jual;

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
    backgroundColor: colors.pich1(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.pich2(),
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
  pic: {width: 100, height: 100, borderRadius: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.white(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.white(),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white(),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});