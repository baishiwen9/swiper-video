import React, {Component} from 'react';
import './index.css';
import Header from './../../component/Header/index';
import NoticeBar from './../../component/NoticeBar/index';

class Comps extends Component {

    render() {
        return (
            <div className="otherComps-wrap">
                <Header {...this.props} />
                <div className="content-box">
                    <div className="list">
                        <h3>通知组件</h3>
                        <NoticeBar content="亲爱的，该活动将于2019年12月31日结束，有兑换券的亲们请在截止日前完成兑换哦，过期作废哟。" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Comps;