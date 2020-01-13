import React, {Component} from 'react';
import './index.less';


export default class PullDownRefresh extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshText: '下拉刷新',
            refreshStatus: 0,
            refreshIcon: 'down'
        };

        this.wrapper = React.createRef();

        this.moveCoefficient = 0.5;  // 滑动量缩减比
        this.moveCount = 50;         // 临界值

        // 执行完需要还原的值
        this.dragStart = 0;          // 开始抓取标志位
        this.translateY = 0;         // 滑动值，Y轴
        this.joinRefreshFlag = null; // 进入下拉刷新状态标志位
        this.refreshFlag = 0;        // 下拉刷新执行是控制页面假死标志位
    }

    
    start = (e) => {
        if (this.refreshFlag) {
            e.preventDefault();
            return;
        }
        console.log(1111)
        this.dragStart = e.touches[0].pageY;
        this.translateY = 0;

        const wrapper = document.querySelector('.refresh-wrapper');
        wrapper.style.transitionDuration = '0ms';

        this.setState({
            refreshText: '下拉刷新',
            refreshStatus: 0,
            refreshIcon: 'down'
        });
    }


    move = (e) => {
        // 从其他容器滑入
        if (this.dragStart === 0) {
            return;
        }
        // 正在异步操作
        if (this.refreshFlag) {
            e.preventDefault();
            return;
        }
        console.log(222222)
        var clientY = e.touches[0].pageY;
        const y = (clientY - this.dragStart) * this.moveCoefficient;
        this.translateY = y > 100 ? 100 : y;

        // 当scrolltop是0且往下滚动
        if (document.documentElement.scrollTop + document.body.scrollTop === 0) {
            if (this.translateY > 0) {
                e.cancelable && e.preventDefault(); // 必须
                this.joinRefreshFlag = 1;

                if (Math.abs(this.translateY) > this.moveCount) {
                    this.setState({
                        refreshText: '释放刷新',
                        refreshStatus: 1,
                        refreshIcon: 'up'
                    })
                } else {
                    this.setState({
                        refreshText: '下拉刷新',
                        refreshStatus: 0,
                        refreshIcon: 'down'
                    })
                }
                const wrapper = document.querySelector('.refresh-wrapper');
                wrapper.style.transform = 'translate3d(0,' + this.translateY + 'px,0)';
            } 
        } 
    }

    end = (e) => {
        if (this.translateY === 0) {
            return;
        }
        if (this.refreshFlag) {
            e.preventDefault();
            return;
        }
        console.log(33333)
        // 超过刷新临界值
        if (this.translateY > this.moveCount && this.joinRefreshFlag) {
            this.setState({
                refreshText: '正在刷新',
                refreshStatus: 2,
                refreshIcon: 'loading'
            }, () => {
                this.callback && this.callback();
            });
            // 进入下拉刷新状态
            this.refreshFlag = 1;
        } else {
            // 未超过刷新临界值
            if (this.joinRefreshFlag) {
                this.refreshFlag = 1;
            }
        }

        const wrapper = document.querySelector('.refresh-wrapper');
        setTimeout(() => {
            wrapper.style.transitionDuration = '500ms';
            wrapper.style.transform = 'translate3d(0,0,0)';
        }, 600);

        // 恢复初始化状态
        this.joinRefreshFlag = null;
        this.dragStart = 0;
        this.translateY = 0;
        setTimeout(() => {
            this.refreshFlag = 0;
        }, 800);
    }

    callback() {
        console.log('--------刷新成功--------');
    }
    render(){
        const {refreshText, refreshStatus} = this.state;
        return (
            <div 
                className="refresh-wrapper" 
                ref={this.wrapper}
                onTouchStart={this.start.bind(this)} 
                onTouchMove={this.move.bind(this)}
                onTouchEnd={this.end.bind(this)}
            >
                <div className="refresh-bar">
                    <div className={`refresh-icon ${refreshStatus == 0 ? 'down': (refreshStatus == 1 ? 'up' : (refreshStatus == 2 ? 'loading': ''))}`}></div>
                    <div className="refresh-text">{refreshText}</div>
                </div>
                <div className="refresh-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}