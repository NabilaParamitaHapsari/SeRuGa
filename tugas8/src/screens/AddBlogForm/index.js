import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {ArrowLeft, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const AddBlogForm = () => {
  const dataCategory = [
    { id: 1, name: "Keramik" },
    { id: 2, name: "Tanah Liat" },
    { id: 3, name: "Kerajinan" },
    { id: 4, name: "Tiga Dimensi" },
  ];
  const [blogData, setBlogData] = useState({
    title: "",
    harga: "",
    content: "",
    category: {},
    totalLikes: 0,
    totalComments: 0,
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios.post('https://6571705ed61ba6fcc0128652.mockapi.io/serugaapp/blog', {
          title: blogData.title,
          category: blogData.category,
          harga: blogData.harga, 
          image,
          content: blogData.content,
          totalComments: blogData.totalComments,
          totalLikes: blogData.totalLikes,
          createdAt: new Date(),
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Jual');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.white()} variant="Linear" size={24} />
      </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Masukkan Konten</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Gambar"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.black()}
            style={textInput.content}
        />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Barang"
            value={blogData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.black()}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Harga"
            value={blogData.harga}
            onChangeText={(text) => handleChange("harga", text)}
            placeholderTextColor={colors.black()}
            multiline
            style={textInput.title2}
        />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="Deskripsi"
            value={blogData.content}
            onChangeText={(text) => handleChange("content", text)}
            placeholderTextColor={colors.black()}
            multiline
            style={textInput.content}
          />
        </View>
      
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType["Pjs-Regular"],
              color: colors.black(),
            }}
          >
            Category
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
                  ? colors.white(0.8)
                  : colors.pich2();
              const color =
                item.id === blogData.category.id
                  ? colors.black()
                  : colors.black();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange("category", { id: item.id, name: item.name })
                  }
                  style={[category.item, { backgroundColor: bgColor }]}
                >
                  <Text style={[category.name, { color: color }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
      </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.white()} />
        </View>
      )}
    </View>
  );
};

export default AddBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pich(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.pich2(),
  },
  title: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 16,
    color: colors.white(),
  },
  bottomBar: {
    backgroundColor: colors.pich(),
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white(),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.white(),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  title2: {
    fontSize: 12,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType["Pjs-Medium"],
  },
});