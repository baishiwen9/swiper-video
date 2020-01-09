
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

/**
 * 瀑布流组件
 */
export default class WaterFall extends Component {
    config = {
        Component: true
    }
    constructor(props) {
        super(props);
        this.state = {
            listLeft: [],   //左边数据
            listRight: [],  //右边数据
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    componentDidShow() {
        const {datas=[]} = this.props;
        if (datas && datas.length) {
            this.wrapperWaterfallData(datas);
        }
    }

    /**
     * 瀑布流数据处理
     * @param {*} list 要渲染的数据
     */
    wrapperWaterfallData (list) {
        this.heightLeft = 0;  //左边最新高度
        this.heightRight = 0; //右边最新高度
        let {listLeft, listRight} = this.state;
        for (let i = 0, l = list.length; i < l; i++) {
            if (list[i]) {
                if (this.heightRight >= this.heightLeft) {
                    listLeft.push(list[i]);
                    if (list[i].height) {
                        this.heightLeft += list[i].height;
                    } 
                } else {
                    listRight.push(list[i])
                    if (list[i].height) {
                        this.heightRight += list[i].height;
                    }
                }
            }
        }
        this.setState({
            listLeft, listRight
        })
    }

    componentDidHide() { }

    render() {
        const {listLeft=[], listRight=[]} = this.state;
        return (
            <View className="waterFallWrapper">
               <View class="waterfall">
                    <View class="waterfall-col" style={{'margin-right': '8rpx'}}>
                        {
                            listLeft.length && listLeft.map(item => <View className="waterfall-item" style={{height: `${item.height}px`}}>{item.title}</View>)
                        }
                    </View>
                    <View class="waterfall-col" style={{'margin-left': '8rpx'}}>
                        {
                            listRight.length && listRight.map(item => <View className="waterfall-item" style={{height: `${item.height}px`}}>{item.title}</View>)
                        }
                    </View>
                </View>
            </View>
        )
    }
}
