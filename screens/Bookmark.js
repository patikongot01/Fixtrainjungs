import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Bookmark = () => {
  const navigation = useNavigation();
  const [ itemsBook, setItemsBook] = useState([])
  const onPressDetail = (number, name, nameDes, time, timeDes) => {
    navigation.navigate('Detail', {number: number, name: name, nameDes: nameDes, time: time, timeDes: timeDes})
  }

  const getData = () => {
  useEffect(() => {
    fetch('https://shark-app-wblp9.ondigitalocean.app/Bookmark')
        .then(res => res.json())
        .then((result) => {
          setItemsBook(result)
        })
  }, [])
  }
  getData();
  var id;
  var number;
  const convertToID = (number) => { 
    if(number == 275){
      id = 0;
    }else if(number == 997){
      id = 1;
    }else if(number == 283){
      id = 2;
    }else if(number == 285){
      id = 3;
    }else if(number == 281){
      id = 4;
    }else if(number == 367){
      id = 5;
    }else if(number == 389){
      id = 6;
    }else if(number == 279){
      id = 7;
    }else if(number == 277){
      id = 8;
    }else if(number == 379){
      id = 9;
    }else if(number == 391){
      id = 10;
    }else if(number == 371){
      id = 11;
    }else if(number == 383){
      id = 12;
    }
  }
  const deleteData = (number) => {
    number = number;
    convertToID(number);
    fetch('https://shark-app-wblp9.ondigitalocean.app/BookmarkDelete/'+id)
    console.log("deleted")
    console.log(number)
    console.log(id)
  }


  return ( <View style={styles.bookmarkBG}>
    <View style={styles.bookmark2}>
      <StatusBar barStyle="default" />
      <View style={styles.rectangleView} />
      <ScrollView style = {styles.scrollView}>
      <View style={styles.ScrollViewData}>
      {itemsBook.map(item => (
      <View style={{height: 140}}>
      <TouchableOpacity style={styles.delete} onPress = {() => deleteData(item.number)}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </TouchableOpacity>
      <Pressable
        style={styles.detail}
        onPress={() => onPressDetail(item.number, item.name, item.nameDes, item.time, item.timeDes)}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
        </View>
        <Text style={styles.oRDINARY}>{`????????????????????????????????? `}</Text>
        <Text style={styles.nO279}>{`????????????????????? `} {item.number}</Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanKlongLukBorder}>
        {item.name}- {item.nameDes}
        </Text>
        <View style={styles.groupView1}>
          <Text style={styles.bangkok}>{item.name}</Text>
          <Text style={styles.text}>{item.time}</Text>
          <Text style={styles.arr}>?????????</Text>
          <Text style={styles.dep}>?????????</Text>
          <Text style={styles.text1}>{item.timeDes}</Text>
          <Text style={styles.praChomKlao}>{item.nameDes}</Text>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </View>
      </Pressable>
      </View>
      ))}
      </View>
      </ScrollView>
      <View style={styles.BGAvailable}>
      </View>
      <Text style={styles.bookmark}>???????????????????????????</Text>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={styles.bottomTab}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.labelText}>????????????????????????</Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.search, styles.ml42]}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.labelText1}>???????????????</Text>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bookmark1, styles.ml42]}
          onPress={() => navigation.navigate("Bookmark")}
        >
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-2932.png")}
          />
          <Text style={styles.labelText3}>???????????????????????????</Text>
        </Pressable>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 87,
  },
  backIcon: {
    position: "absolute",
    height: "1.9%",
    width: "4.33%",
    top: "7.88%",
    right: "90.12%",
    bottom: "90.23%",
    left: "5.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  scrollView: {
    flex: 1,
  },
  ScrollViewData: {
    top: 0,
    left: 0,
    position: "relative",
    flex: 1,
    width: "100%",
    height: 2200,
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    height: "12.63%",
    width: "100%",
    top: "91.13%",
    right: "0%",
    bottom: "-3.75%",
    left: "0%",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  BGAvailable: {
    position: "absolute",
    top: -10,
    left: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
  },
  back: {
    position: "absolute",
    left: "5.56%",
    top: "7.88%",
    right: "90.12%",
    bottom: "90.23%",
    width: "10.33%",
    height: "3.9%",
  },
  bookmark: {
    position: "absolute",
    top: 52,
    left: 121,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffe9cf",
    width: 42,
    height: 115,
  },
  vectorIcon: {
    position: "absolute",
    height: "14.78%",
    width: "30.95%",
    top: "46.09%",
    right: "19.05%",
    bottom: "39.13%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  delete: {
    position: "absolute",
    top: 138,
    left: 299,
    width: 42,
    height: 115,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(19, 19, 19, 0.12)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 296,
    height: 115,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO279: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon1: {
    position: "absolute",
    height: "20%",
    width: "6.42%",
    top: "11.3%",
    right: "89.53%",
    bottom: "68.7%",
    left: "4.05%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanKlongLukBorder: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 32,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon: {
    position: "absolute",
    top: 16,
    left: 59,
    width: 78,
    height: 15,
  },
  groupView1: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  detail: {
    position: "absolute",
    top: 138,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 296,
    height: 115,
  },
  labelText: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  home: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  labelText1: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  vectorIcon2: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  search: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  labelText2: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  vectorIcon3: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  favourite: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  groupIcon: {
    position: "absolute",
    height: "59.46%",
    width: "43.14%",
    top: "-2.7%",
    right: "27.45%",
    bottom: "43.24%",
    left: "29.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText3: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 9,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  bookmark1: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  bottomTab: {
    position: "absolute",
    top: 670,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 360,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bookmark2: {
    top: 20,
    left: 16.5,
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  bookmarkBG: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
  },
});

export default Bookmark;
