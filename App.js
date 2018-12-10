/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import CustomListView from './src/CustomListView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // 自定义view 一，对应样式一
      // <View style = {styles.container}>
      //     <Text style = {styles.title}>MovieTalk</Text>
      // </View>

      // 自定义view 二，对应样式二
      // <View style={styles.container}>

      //   <View style={[styles.item, styles.itemOne]}>
      //     <Text style={styles.itemText}> 1 </Text>
      //   </View>

      //   <View style={[styles.item, styles.itemTwo]}>
      //     <Text style={styles.itemText}> 2 </Text>
      //   </View>

      //   <View style={[styles.item, styles.itemThree]}>
      //     <Text style={styles.itemText}> 3 </Text>
      //   </View>

      // </View>

      // 自定义view 三 加载自定义Text
      // <View>
      //   {/* 自定义view */}
      //   <HeaderViewText>
      //       Hello Custom Text.
      //   </HeaderViewText>
      // </View>

      // 自定义view 四 加载网络图片
      // <View style = {styles.container}>
      //   <Image 
      //   style = {styles.image}
      //   source = {{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544181315721&di=1ea38732ebc4d4fbc1f9cbff65f34c5e&imgtype=0&src=http%3A%2F%2Fwerkstette.dk%2Fwp-content%2Fuploads%2F2015%2F09%2FEntertainment_Weekly_Photographer_Marc_Hom_British_Actor_Charlie_Hunnam_as_King_Arthur_Retouch_Werkstette10-770x841.jpg'}} />
      // </View>

      // 自定义view 四 设置背景图片 机器总动员
      // <View style={styles.container}>
      //   <ImageBackground style={styles.imageBg}
      //     source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544182308638&di=176db1c29dee2f25e526df8ba7116ce6&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F342ac65c10385343d7bd81479013b07eca808861.jpg' }}
      //   >
      //     <View style = {styles.overlay}>
      //       <Text style = {styles.overlayTitle}>机器人总动员</Text>
      //       <Text style = {styles.overlaySubTitle}> Wall - E （2008）</Text>
      //     </View>

      //   </ImageBackground>
      // </View>


      // 自定义listView
      <CustomListView />
    );
  }
}

// 自定义view 三
class HeaderViewText extends Component {
  render() {
    return (
      <Text style={styles.itemText}>
        {this.props.children}
      </Text>
    );
  }
}



// 自定义样式一
// let styles = StyleSheet.create({
//   container : {
//     backgroundColor : 'green',
//     flex : 1,
//     marginTop : 50,
//     marginLeft : 20,
//     marginBottom : 50,
//     marginRight : 20,    

//     borderWidth: 1,
//     borderColor: '#6435c9',
//     borderRadius: 15,

//     shadowColor: 'red',
//     shadowOpacity: 0.6,
//     shadowRadius:2,
//     shadowOffset: {
//       height: 1,
//       width : 0
//     },

//   },
//   title : {

//     height: 50,

//     backgroundColor : 'red',
//     marginTop : 30,
//     paddingTop: 20,

//     fontSize: 30,
//     color: 'blue',
//     textAlign: 'center',
//     letterSpacing: 3,
//     lineHeight: 20,

//     fontFamily: 'Helvetica Neue',
//     // fontWeight: '300',
//     fontWeight: 'normal',

//     textDecorationLine: 'underline',
//     textDecorationStyle: 'dashed'

//   }
// });


// 自定义样式二
// let styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#eae7ff',
//     flex: 1,
//     paddingTop: 64,
//     // flexDirection: 'column',
//     flexDirection: 'row',
//     // 居屏幕的顶部、中间、底部显示
//     // justifyContent: 'flex-start'
//     // justifyContent: 'center',
//     // justifyContent: 'flex-end'

//     // justifyContent: 'space-between',
//     // justifyContent: 'space-around',
//     // justifyContent: 'space-evenly',

//     // 
//     // alignItems: 'flex-start',
//     // alignItems: 'flex-end',
//     // alignItems: 'center',
//     // alignItems: 'baseline',
//     // alignItems: 'stretch',

//   },

//   item: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#6435c9',
//     margin: 6,
//     flex: 1,
//   },

//   itemOne: {
//     // alignSelf: 'flex-start',
//   },
//   itemTwo: {
//     // alignSelf: 'center',
//   },
//   itemThree: {
//     // alignSelf: 'flex-end',
//     // flex: 2,
//   },

//   itemText: {
//     fontSize: 30,
//     fontFamily: 'Helvetica Neue', 
//     fontWeight: 'normal',
//     color: '#6435c9',
//     padding: 30,
//     margin: 30,
//     textAlign: 'center'
//   },


//   image: {
//     width : 265,
//     height: 290,
//     margin: 20,
//   }
// }); 


// 自定义样式三
let styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 64,
  },

  imageBg: {
    flex: 1,
    // 图片显示样式
    // resizeMode : 'contain' // 包含
    // resizeMode : 'stretch'  // 抻拉
    resizeMode: 'cover' // 平铺

  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
  },

  overlayTitle: {
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    color: '#eae7ff',
    padding: 10,
  },

  overlaySubTitle: {
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#eae7ff',
    padding: 10,
    paddingTop: 0,
  }

}); 