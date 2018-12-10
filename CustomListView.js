/*
 * @Description: 自定义电影列表
 * @Author: HaoYongWei
 * @Email: HowieDeveloper@163.com
 * @Date: 2018-12-07 17:06:56
 * @LastEditors: HaoYongWei
 * @LastEditTime: 2018-12-10 14:17:01
 */
import React, { Component } from 'react'
import { Text, View , StyleSheet, ListView} from 'react-native'

export default class CustomListView extends Component {
    constructor(props) {
        super(props);

        // 定义电影数组
        let movies = [
            {title: '肖生克的救赎'},
            {title: '这个杀手不太冷'},
            {title: '阿甘正传'},
            {title: '霸王别姬'},
            {title: '美丽人生'},
        ];

        // 检查rows的变化
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        // 初始化数据
        this.state = {
            movies : dataSource.cloneWithRows(movies)
        };
    }


    render() {
        return (
        <View>
            <ListView 
                dataSource = {this.state.movies}
                renderRow = {
                    movie => <Text style = {styles.itemText}>{movie.title}</Text>
                }
            />
        </View>
        )
    }
}

let styles = StyleSheet.create ({
    itemText: {
        fontSize : 20,
        fontFamily: 'Helvetica Neue',
        color: 'red',
        textAlign: 'center',
        padding: 30,
        margin: 30,
    }
});
