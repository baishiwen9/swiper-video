import React, {Component} from 'react';
import './index.css';
import Header from './../../component/Header/index';
import NoticeBar from './../../component/NoticeBar/index';
import EmptyTips from './../../component/EmptyTips/index';

class Comps extends Component {

    render() {
        return (
            <div className="otherComps-wrap">
                <div className="content-box">
                    <div className="list">
                        <Header {...this.props} />
                    </div>
                    <div className="list">
                        <h3>通知组件</h3>
                        <NoticeBar speed='100' content="亲爱的，该活动将于2019年12月31日结束，有兑换券的亲们请在截止日前完成兑换哦，过期作废哟。" />
                    </div>
                    <div className="list">
                        <h3>空提示组件</h3>
                        <EmptyTips title="没有更多数据了~" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Comps;