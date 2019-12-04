import React, {Component} from 'react';
import './index.css';
import noticeIcon from './../imgs/notice.png';
import closeIcon from './../imgs/close.png';

class NoticeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBar: true,
            cls: '',
        }
    }

    componentDidMount() {

    }

    closeNotice = () => {
        this.setState({
            cls: 'hideNotice',
        }, () => {
            setTimeout(() => {
                this.setState({
                    showBar: false,
                })
            }, 500);
        })
    }

    render() {
        const {content} = this.props;
        const {showBar, cls} = this.state;
        return (
            <div>
                {
                    showBar && (
                        <div className={'noticebar-wrap '+ cls}>
                            <div className="icon-wrap left-wrap">
                                <img className="noticeIcon icon" src={noticeIcon} alt="icon" />
                            </div>
                            <div className='content playNotice'>{content}</div>
                            <div className="icon-wrap right-wrap">
                                <img className="closeIcon icon" src={closeIcon} alt="icon" onClick={() => this.closeNotice()}/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}


export default NoticeBar;