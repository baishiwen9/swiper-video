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
        this.initAnimate();
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

    initAnimate = () => {
        const dom = this.refs.content;
        if (!dom) {
            return;
        }
        const width = dom.getBoundingClientRect().width;
        const duration = width / (+this.props.speed ? this.props.speed : 100);
        let style = {
            'animationDuration': `${duration}s`
        };
        this.setState({
            style,
        })
    }

    render() {
        const {content} = this.props;
        const {showBar, cls, style} = this.state;
        return (
            <div>
                {
                    showBar && (
                        <div className={'noticebar-wrap '+ cls}>
                            <div className="icon-wrap left-wrap">
                                <img className="noticeIcon icon" src={noticeIcon} alt="icon" />
                            </div>
                            <div className='text-content playNotice' ref='content' style={style}>{content}</div>
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