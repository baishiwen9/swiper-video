import React, {Component} from 'react';
import './index.css';


export default class EmptyTips extends Component {
    render() {
        return (
            <div className="empty-wrap">
                <div className="line line-left"></div>
                <div className="content">没有更多数据了</div>
                <div className="line line-right"></div>
            </div>
        )
    }
}