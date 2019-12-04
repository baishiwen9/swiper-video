import React, {Component} from 'react';
import './index.css';
import Video from './../Video/index';
import Footer from './../Footer/index';

class Detail extends Component{
    render() {
        const {description, author, playUrl, cover} = this.props.infos;
        return (
            <div className="detail-wrap">
                <Video videoUrl={playUrl} cover={cover} />
                <Footer author={author} description={description} />
            </div>
        )
    }
}

export default Detail;
