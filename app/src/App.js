import React, {Component} from 'react';
import './App.css';
import {Carousel} from 'antd-mobile';
import Detail from './pages/Detail/index';
import {getTodayVideo} from './services/index';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoDatas: [],
            innerHeight: window.innerHeight,
        };
    }

    componentDidMount() {
        getTodayVideo().then(res => {
            console.log(res);
            if (res && res.length > 0) {
                const datas = res.filter(item => {
                    return item.data && item.data.content && item.data.content && item.data.content.data;
                });
                
                if (datas.length > 0) {
                    const result = [];
                    datas.map(item => {
                        result.push(item.data.content.data);
                    });
                    this.setState({
                        videoDatas: result
                    })
                }
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
                  console.log(playPromise)
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

    render() {
      const {videoDatas} = this.state;
      return (
        <div className="App">
          <Carousel
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
                          <Detail infos={item} />
                      </div>
                    )
                })
              }
          </Carousel>
        </div>
      )
    }
}


export default App;
