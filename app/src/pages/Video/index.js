import React, {Component} from 'react';
import './index.css';


class Video extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        this.video = React.createRef();
    }

    componentDidMount() {
        const video = this.video.current;
        if (window.myVideoList) {
            window.myVideoList.push({
                id: this.props.id,
                video: video
            });
        } else {
           window.myVideoList = [{
              id: this.props.id,
              video: video
           }];
        }
    }

    render() {
        const {autoplay, videoUrl, cover} = this.props;
        return (
            <div className="video-wrap">
                <video 
                    ref={this.video}
                    style={{ 
                        objectFit: 'contain', 
                        width: "100%", 
                        height: window.innerHeight - 120,
                    }}
                    airplay="allow"
                    playsInline={true}
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x-webkit-airplay="allow"
                    x5-video-player-type="h5" 
                    x5-video-player-fullscreen='true'
                    preload="auto"
                    // autoPlay={autoplay}
                    poster={cover.feed}
                    src={videoUrl}
                    controls="controls"
                > 
                </video>
            </div>
        )
    }
}

export default Video;
