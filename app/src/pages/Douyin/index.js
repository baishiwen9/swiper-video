import React, {Component} from 'react';
import './index.css';
import {Carousel, Button} from 'antd-mobile';
import {getTodayVideo} from './../../services/index';
import Video from './../../component/Video';
import Footer from './../../component/Footer';

class Douyin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoDatas: [],
            innerHeight: window.innerHeight,
            showSwiper: true,
        };
    }

    componentDidMount() {
        getTodayVideo().then(res => {
            if (res && res.length > 0) {
                const result = [];
                res.map(item => {
                    if (item.data && item.data.content && item.data.content && item.data.content.data) {
                        result.push(item.data.content.data);
                    }
                });
                this.setState({
                    videoDatas: result
                });
            }
        }).catch(err => {
            console.log('获取视频列表出错：', err);
        });
    }

    beforeChange = (from, to) => {
      console.log('from', from);
      console.log('to', to);
      this.setState({
         fromIndex: from,
         toIndex: to
      })
    }

    afterChange = (index) => {
        console.log('index', index);
        if (index === this.state.fromIndex) {
          return;
        }
        const myVideoList = window.myVideoList;
        if (myVideoList && myVideoList.length > 0) {
          myVideoList.map((item, num) => {
              if (num === index) {
                if (item.video) {
                    const playPromise = item.video.play();
                    playPromise && playPromise.then(res => {
                      console.log('video 播放正常：', res);
                    }).catch(err => {
                      console.log('video 播放出错：', err);
                    });
                }
              }
              if (num === this.state.fromIndex) {
                  item.video && item.video.pause();
              }
          })
        }
    }

    gotoOtherComp = () => {
        this.setState({
            showSwiper: false,
        })
    }

    showHomePage = () => {
      this.setState({
          showSwiper: true,
      })
    }

    render() {
      const {videoDatas, showSwiper} = this.state;
      if (videoDatas.length == 0) {
        return null;
      }
      console.log('videoDatas', videoDatas);
      return (
        <div className="wrap">
          {/* 类似抖音上下滚动视频列表 */}
          {
              showSwiper && (
                <Carousel
                  infinite={true}
                  selectedIndex={0}
                  autoplay={false}
                  dots={false}
                  vertical={true}
                  beforeChange={(from, to) => this.beforeChange(from, to)}
                  afterChange={index => this.afterChange(index)}
                >
                    {
                      videoDatas && videoDatas.length>0 && videoDatas.map((item, index) => {
                          return (
                            <div key={index} style={{position: 'relative', width: '100%', height: this.state.innerHeight }} >
                                <div className="detail-wrap">
                                    <Video videoUrl={item.playUrl} cover={item.cover} />
                                    <Footer author={item.author} description={item.description} />
                                </div>
                            </div>
                          )
                      })
                    }
                </Carousel>
              )
          }
        </div>
      )
    }
}


export default Douyin;
