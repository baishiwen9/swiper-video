import React, {Component} from 'react';
import './index.css';
import Header from './../../component/Header/index';
import NoticeBar from './../../component/NoticeBar/index';
import EmptyTips from './../../component/EmptyTips/index';
import InputNumber from './../../component/InputNumber/index';
import PullDownRefrsh from './../../component/PullDownRefresh';

class Comps extends Component {

    inputNumberChange = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="otherComps-wrap">
                <PullDownRefrsh>
                    <div className="content-box">
                        {/* <div className="list">
                            <Header {...this.props} />
                        </div> */}
                        <div className="list">
                            <h3>通知组件</h3>
                            <NoticeBar speed='100' content="亲爱的，该活动将于2019年12月31日结束，有兑换券的亲们请在截止日前完成兑换哦，过期作废哟。" />
                        </div>
                        <div className="list">
                            <h3>空提示组件</h3>
                            <EmptyTips title="此页面可以下拉加载哦哦哦~" />
                        </div>
                        <div className="list">
                            <h3>inputNumber组件</h3>
                            <InputNumber min={1} max={999} step={1} defaultValue={1} onChanged={(e) => this.inputNumberChange(e)}/>
                        </div>
                    </div>
                </PullDownRefrsh>
            </div>
        )
    }
}

export default Comps;