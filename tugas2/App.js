/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput} from 'react-native';
import {Notification, Receipt21, Clock, Message, SearchNormal1, ProfileCircle, ShoppingBag} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
const ListBlog = () => {
  return (
      <View>
        
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
          <Text>1. </Text>
            <Image 
              style={itemVertical.cardImage}
              source={{
                uri: 'https://balitteknologikaret.co.id/wp-content/uploads/2023/04/Apa-Itu-Seni-Rupa-Tiga-Dimensi.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  // flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Info</Text>
                  <Text style={itemVertical.cardTitle}>
                    Apa Itu Seni Rupa
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
          <Text>2. </Text>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqYfI3QaLJVErTx3mzEWKtJq6tE8-q6o_jQ&usqp=CAU',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Penjelasan</Text>
                  <Text style={itemVertical.cardTitle}>
                    Seni Rupa Tiga DImensi
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              
              source={{
                uri: 'https://imgx.sonora.id/crop/0x27:547x391/360x240/photo/2023/06/06/screenshot-2023-06-06-111704jpg-20230606111718.jpg',
              }}
              >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Penjualan Karya Seni Rupa
                  </Text>
                  <Text style={itemHorizontal.cardText}>Penjualan ini dilakukan melalui aplikasi online</Text>
                  <Text style={itemHorizontal.cardText}>Semoga membantu para pelanggan dan pengrajin</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
         </ScrollView>
         <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Text style={{...category.title, color: colors.white()}}>
                Popular
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Info</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Daftar</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Penjualan</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Keterangan</Text>
            </View>
          </ScrollView>
          </View>
          <View style={itemVertical.cardItem}>
          <Text>3. </Text>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://berita.99.co/wp-content/uploads/2021/11/topeng.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Daftar</Text>
                  <Text style={itemVertical.cardTitle}>
                    Macam-Macam Seni Rupa Tiga Dimensi
                  </Text>
                </View>
                {/* <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                /> */}
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
          <Text>4. </Text>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://imgx.sonora.id/crop/0x0:0x0/x/photo/2022/12/07/patung-pixabay-raplhjpg-20221207103136.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Penjualan</Text>
                  <Text style={itemVertical.cardTitle}>
                   List Penjualan
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} backgroundColor= {colors.pich1()}>
        <ShoppingBag color={colors.black()} variant="Linear" size={24} />
        
        <Text style={styles.title} >SeRuGa</Text>
        <Message color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.header}>
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
      </View>
      
      <ListBlog />
    </View>
  );
}
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
    paddingVertical: 1,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  searchbar: {
    width: '90%',
    height: 40,
    borderColor: colors.pich(),
    // borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    right: 30,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
  },
})

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    // paddingRight: 0,
    gap: 20,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.white(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: { 
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 400,
  },
  cardImage: {
    width: '93%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    // gap: 5,
    maxWidth: '100%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 25,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});